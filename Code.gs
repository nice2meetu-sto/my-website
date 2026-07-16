/**
 * 2026 연차사용촉진 제출현황 대시보드 — Apps Script 백엔드 (읽기 + 쓰기 API)
 *
 * 배포: 확장 프로그램 → Apps Script → 이 코드 붙여넣기 →
 *       배포 → 새 배포 → 유형: 웹 앱 → 실행: 나 / 액세스: 모든 사용자 → URL 복사
 *
 * 설계 원칙 (재단 시스템 패턴 준수)
 *  - GET 전용. doGet(e) + ContentService 만 사용.
 *  - POST / google.script.run / HtmlService 사용 안 함.
 *  - GitHub Pages·로컬 file:// 에서의 CORS 문제를 피하기 위해
 *    callback 파라미터가 있으면 JSONP(자바스크립트) 로, 없으면 순수 JSON 으로 응답.
 *  - 쓰기는 모두 GET 쿼리스트링으로 전달(action=submit / clear).
 */

var SHEET_NAME = '연차현황';

/** 헤더 텍스트 → 내부 키 매핑 (공백 제거 후 비교) */
var HEADER_MAP = {
  '연번':      'no',
  '상태':      'status',
  '사번':      'empId',
  '성명':      'name',
  '직급':      'grade',
  '소속':      'team',
  '근무지':    'worksite',
  '센터':      'worksite',   // '근무지'/'센터' 헤더 모두 허용 (소속팀의 하위 구분)
  '입사일':    'hireDate',
  '부여연차':  'granted',
  '사용합계':  'used',
  '사용':      'used',      // '사용 합계' → 공백 제거 시 '사용합계', 단독 '사용'도 허용
  '잔여':      'remaining',
  '지정':      'designated',
  '결과':      'result'
};

function doGet(e) {
  var params = (e && e.parameter) ? e.parameter : {};
  var action = params.action || 'data';
  var out;

  try {
    if (action === 'data') {
      out = handleData();
    } else if (action === 'submit') {
      out = handleSubmit(params);
    } else if (action === 'clear') {
      out = handleClear(params);
    } else {
      out = { ok: false, error: '알 수 없는 action: ' + action };
    }
  } catch (err) {
    out = { ok: false, error: String(err && err.message ? err.message : err) };
  }

  return respond(out, params.callback);
}

/** JSONP(callback 있을 때) 또는 JSON 응답 생성 */
function respond(obj, callback) {
  var json = JSON.stringify(obj);
  if (callback) {
    // 콜백명 검증(영숫자·._$ 만 허용) 후 JSONP 반환
    var safe = String(callback).replace(/[^\w.$]/g, '');
    return ContentService
      .createTextOutput(safe + '(' + json + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

/** 시트 핸들 + 헤더→열인덱스(1-based) 매핑을 구한다 */
function getSheetCtx() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    throw new Error("시트 '" + SHEET_NAME + "' 를 찾을 수 없습니다.");
  }
  var lastCol = sheet.getLastColumn();
  var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  var colOf = {}; // key -> 1-based column index
  for (var c = 0; c < headers.length; c++) {
    var key = normalizeHeader(headers[c]);
    if (HEADER_MAP[key] && !colOf[HEADER_MAP[key]]) {
      colOf[HEADER_MAP[key]] = c + 1;
    }
  }
  return { sheet: sheet, colOf: colOf, lastCol: lastCol };
}

function normalizeHeader(h) {
  return String(h == null ? '' : h).replace(/\s+/g, '').trim();
}

/** 날짜 값을 'YYYY-MM-DD' 문자열로 정규화 */
function normalizeDate(v) {
  if (v === '' || v == null) return '';
  if (Object.prototype.toString.call(v) === '[object Date]') {
    var tz = Session.getScriptTimeZone() || 'Asia/Seoul';
    return Utilities.formatDate(v, tz, 'yyyy-MM-dd');
  }
  return String(v).trim();
}

/** 숫자 정규화(빈값 → '') */
function normalizeNumber(v) {
  if (v === '' || v == null) return '';
  if (typeof v === 'number') return v;
  var n = Number(String(v).replace(/[, ]/g, ''));
  return isNaN(n) ? String(v) : n;
}

/** ?action=data — 전체 행 반환 */
function handleData() {
  var ctx = getSheetCtx();
  var sheet = ctx.sheet;
  var colOf = ctx.colOf;
  var lastRow = sheet.getLastRow();

  var rows = [];
  if (lastRow >= 2) {
    // getValues() 로 숫자 정밀도 유지 (getDisplayValues 아님)
    var values = sheet.getRange(2, 1, lastRow - 1, ctx.lastCol).getValues();
    for (var i = 0; i < values.length; i++) {
      var r = values[i];
      var pick = function (key) { return colOf[key] ? r[colOf[key] - 1] : ''; };
      // 완전히 빈 행은 건너뜀
      var name = pick('name');
      var empId = pick('empId');
      if (name === '' && empId === '') continue;

      rows.push({
        no:         normalizeNumber(pick('no')),
        status:     String(pick('status') || '').trim(),
        empId:      String(empId || '').trim(),
        name:       String(name || '').trim(),
        grade:      String(pick('grade') || '').trim(),
        team:       String(pick('team') || '').trim(),
        worksite:   String(pick('worksite') || '').trim(),
        hireDate:   normalizeDate(pick('hireDate')),
        granted:    normalizeNumber(pick('granted')),
        used:       normalizeNumber(pick('used')),
        remaining:  normalizeNumber(pick('remaining')),
        designated: String(pick('designated') || '').trim(),
        result:     String(pick('result') || '').trim()
      });
    }
  }

  var tz = Session.getScriptTimeZone() || 'Asia/Seoul';
  var updatedAt = Utilities.formatDate(new Date(), tz, 'yyyy-MM-dd HH:mm');
  return { ok: true, updatedAt: updatedAt, rows: rows };
}

/** empId 로 데이터 행 번호(1-based, 헤더 포함)를 찾는다. 없으면 -1 */
function findRowByEmpId(sheet, colOf, empId) {
  if (!colOf.empId) throw new Error("'사번' 열을 찾을 수 없습니다.");
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return -1;
  var ids = sheet.getRange(2, colOf.empId, lastRow - 1, 1).getValues();
  var target = String(empId || '').trim();
  for (var i = 0; i < ids.length; i++) {
    if (String(ids[i][0] || '').trim() === target) {
      return i + 2; // 실제 시트 행 번호
    }
  }
  return -1;
}

/** ?action=submit&empId=..&designated=<encoded>&result=일치|불일치 */
function handleSubmit(params) {
  var empId = params.empId;
  if (!empId) return { ok: false, error: 'empId 누락' };

  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var ctx = getSheetCtx();
    if (!ctx.colOf.designated) return { ok: false, error: "'지정' 열을 찾을 수 없습니다." };
    if (!ctx.colOf.result) return { ok: false, error: "'결과' 열이 없습니다. L열에 '결과' 헤더를 추가하세요." };

    var row = findRowByEmpId(ctx.sheet, ctx.colOf, empId);
    if (row < 0) return { ok: false, error: '사번을 찾을 수 없음' };

    var designated = params.designated != null ? String(params.designated) : '';
    var result = params.result != null ? String(params.result) : '';

    // 전체 교체(덮어쓰기) — 수정 재제출 지원
    ctx.sheet.getRange(row, ctx.colOf.designated).setValue(designated);
    ctx.sheet.getRange(row, ctx.colOf.result).setValue(result);

    return { ok: true, empId: String(empId).trim(), designated: designated, result: result };
  } finally {
    lock.releaseLock();
  }
}

/** ?action=clear&empId=.. — 지정·결과를 비워 미제출 상태로 되돌림 */
function handleClear(params) {
  var empId = params.empId;
  if (!empId) return { ok: false, error: 'empId 누락' };

  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var ctx = getSheetCtx();
    var row = findRowByEmpId(ctx.sheet, ctx.colOf, empId);
    if (row < 0) return { ok: false, error: '사번을 찾을 수 없음' };

    if (ctx.colOf.designated) ctx.sheet.getRange(row, ctx.colOf.designated).setValue('');
    if (ctx.colOf.result) ctx.sheet.getRange(row, ctx.colOf.result).setValue('');

    return { ok: true, empId: String(empId).trim(), designated: '', result: '' };
  } finally {
    lock.releaseLock();
  }
}
