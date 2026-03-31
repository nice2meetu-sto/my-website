<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>익명 게시판</title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Gowun+Batang:wght@400;700&display=swap" rel="stylesheet">
<style>
:root {
  --bg:       #F7F5F0;
  --surface:  #FFFFFF;
  --border:   #E2DDD6;
  --ink:      #1C1917;
  --muted:    #78716C;
  --accent:   #2563EB;
  --accent-h: #1D4ED8;
  --admin:    #7C3AED;
  --admin-bg: #F5F3FF;
  --danger:   #DC2626;
  --success:  #16A34A;
  --tag-bg:   #FEF3C7;
  --tag-fg:   #92400E;
  --radius:   6px;
  --shadow:   0 1px 4px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.05);
}

* { margin:0; padding:0; box-sizing:border-box; }
html { font-size:16px; }

body {
  background: var(--bg);
  color: var(--ink);
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  min-height: 100vh;
}

/* ── Layout ── */
.topbar {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  position: sticky; top:0; z-index:200;
}
.topbar-inner {
  max-width: 780px;
  margin: 0 auto;
  padding: 0 20px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.logo {
  font-family: 'Gowun Batang', serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-dot { width:7px; height:7px; border-radius:50%; background:var(--accent); display:inline-block; }

.admin-btn {
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  background: none;
  border: 1px solid var(--border);
  padding: 5px 12px;
  border-radius: 100px;
  cursor: pointer;
  transition: all .2s;
  display: flex; align-items: center; gap: 5px;
}
.admin-btn:hover { border-color: var(--admin); color: var(--admin); }
.admin-btn.active { background: var(--admin); color: #fff; border-color: var(--admin); }

.main {
  max-width: 780px;
  margin: 0 auto;
  padding: 32px 20px 80px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
}

/* ── Write box ── */
.write-box {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 24px;
}
.write-box h2 {
  font-family: 'Gowun Batang', serif;
  font-size: 16px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 16px;
  display: flex; align-items: center; gap: 8px;
}
.write-box h2 span { font-size: 18px; }

.field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; }
.field label { font-size: 12px; font-weight: 500; color: var(--muted); letter-spacing: .3px; }

input[type=text], textarea, select {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: var(--ink);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 10px 14px;
  outline: none;
  transition: border-color .2s, box-shadow .2s;
  width: 100%;
  resize: none;
}
input:focus, textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(37,99,235,.1); }

.char-count { font-size: 11px; color: var(--muted); text-align: right; margin-top: 4px; }

.anon-notice {
  display: flex; align-items: center; gap: 7px;
  font-size: 12px; color: var(--muted);
  margin-bottom: 16px;
  padding: 10px 14px;
  background: var(--bg);
  border-radius: var(--radius);
  border: 1px dashed var(--border);
}

.btn-submit {
  width: 100%;
  padding: 12px;
  background: var(--accent);
  color: #fff;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: background .2s, transform .15s;
  letter-spacing: .3px;
}
.btn-submit:hover { background: var(--accent-h); }
.btn-submit:active { transform: scale(.98); }

/* ── Post list ── */
.list-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 4px;
}
.list-title {
  font-family: 'Gowun Batang', serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--ink);
  display: flex; align-items: center; gap: 8px;
}
.post-count {
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--accent); color: #fff;
  font-size: 11px; font-weight: 700;
  min-width: 20px; height: 20px;
  border-radius: 10px;
  padding: 0 6px;
}

.sort-btns { display: flex; gap: 6px; }
.sort-btn {
  font-size: 12px; color: var(--muted);
  background: none; border: none; cursor: pointer;
  padding: 4px 8px; border-radius: 4px;
  transition: all .15s;
}
.sort-btn.active, .sort-btn:hover { background: var(--border); color: var(--ink); font-weight: 500; }

.posts { display: flex; flex-direction: column; gap: 12px; }

.empty-state {
  text-align: center;
  padding: 56px 20px;
  color: var(--muted);
  font-size: 14px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}
.empty-state .icon { font-size: 36px; margin-bottom: 12px; display: block; }

/* ── Post card ── */
.post-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: box-shadow .2s;
  animation: fadeUp .35s ease both;
}
.post-card:hover { box-shadow: 0 2px 8px rgba(0,0,0,.09), 0 8px 24px rgba(0,0,0,.07); }

@keyframes fadeUp {
  from { opacity:0; transform: translateY(10px); }
  to   { opacity:1; transform: translateY(0); }
}

.post-head {
  padding: 18px 20px 14px;
  border-bottom: 1px solid var(--border);
}
.post-meta {
  display: flex; align-items: center; gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.anon-avatar {
  width: 28px; height: 28px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px;
  font-weight: 700;
  flex-shrink: 0;
}
.anon-label { font-size: 13px; font-weight: 500; color: var(--muted); }
.post-time { font-size: 11px; color: var(--muted); margin-left: auto; }
.post-num { font-size: 11px; color: var(--muted); font-weight: 300; }

.post-title {
  font-family: 'Gowun Batang', serif;
  font-size: 17px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 6px;
  line-height: 1.45;
  cursor: pointer;
}
.post-title:hover { color: var(--accent); }

.post-preview {
  font-size: 13.5px;
  color: var(--muted);
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-foot {
  padding: 10px 20px;
  display: flex; align-items: center; gap: 10px;
}
.foot-stat {
  display: flex; align-items: center; gap: 4px;
  font-size: 12px; color: var(--muted);
}
.foot-stat svg { width:14px; height:14px; opacity:.6; }

.btn-expand {
  margin-left: auto;
  font-size: 12px;
  color: var(--accent);
  background: none; border: none; cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background .15s;
}
.btn-expand:hover { background: rgba(37,99,235,.07); }

/* ── Post expanded ── */
.post-full { padding: 0 20px 20px; display:none; }
.post-full.open { display:block; animation: fadeUp .2s ease; }
.post-body {
  font-size: 14.5px;
  line-height: 1.85;
  color: var(--ink);
  white-space: pre-wrap;
  padding: 16px 0 20px;
  border-bottom: 1px solid var(--border);
}

/* Admin controls */
.admin-controls {
  display: none;
  gap: 8px;
  margin-top: 12px;
  margin-bottom: 4px;
  flex-wrap: wrap;
}
.admin-controls.visible { display: flex; }
.btn-admin {
  font-size: 12px; font-weight: 500;
  padding: 5px 12px; border-radius: 4px; cursor: pointer;
  border: 1px solid; transition: all .15s;
  font-family: 'Noto Sans KR', sans-serif;
  display: flex; align-items: center; gap: 4px;
}
.btn-edit { color: var(--admin); border-color: var(--admin); background: var(--admin-bg); }
.btn-edit:hover { background: var(--admin); color:#fff; }
.btn-delete { color: var(--danger); border-color: #FCA5A5; background: #FEF2F2; }
.btn-delete:hover { background: var(--danger); color:#fff; border-color:var(--danger); }

/* ── Comments ── */
.comments-section { margin-top: 16px; }
.comments-title {
  font-size: 13px; font-weight: 700; color: var(--muted);
  margin-bottom: 12px;
  display: flex; align-items: center; gap: 6px;
}
.comment-count-badge {
  font-size: 11px; font-weight: 700;
  background: var(--border); color: var(--muted);
  padding: 1px 7px; border-radius: 10px;
}

.comment-list { display: flex; flex-direction: column; gap: 0; }

.comment-item {
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 10px;
  animation: fadeUp .2s ease;
}
.comment-item:last-child { border-bottom: none; }

.comment-avatar {
  width:24px; height:24px;
  border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  font-size:11px; font-weight:700;
  flex-shrink:0;
  margin-top:1px;
}
.comment-right {}
.comment-header {
  display:flex; align-items:center; gap:6px;
  margin-bottom:4px;
}
.comment-author { font-size:12px; font-weight:700; }
.comment-admin-tag {
  font-size:10px; font-weight:700;
  background: var(--admin); color:#fff;
  padding: 1px 6px; border-radius:3px;
  letter-spacing:.3px;
}
.comment-time { font-size:11px; color:var(--muted); margin-left:auto; }
.comment-text {
  font-size: 13.5px; line-height:1.7;
  color: var(--ink);
  white-space: pre-wrap;
}
.comment-admin-controls {
  display:none; gap:6px; margin-top:6px;
}
.comment-admin-controls.visible { display:flex; }
.btn-comment-admin {
  font-size:11px; padding:3px 9px;
  border-radius:3px; cursor:pointer; border:1px solid;
  font-family:'Noto Sans KR',sans-serif; font-weight:500;
  transition: all .15s;
}

/* Comment write */
.comment-write {
  margin-top: 14px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: flex-end;
}
.comment-write textarea {
  font-size: 13px;
  padding: 9px 12px;
  min-height: 40px;
  max-height: 120px;
}
.btn-comment-submit {
  height: 40px;
  padding: 0 16px;
  background: var(--accent);
  color: #fff;
  font-size: 13px; font-weight:700;
  border:none; border-radius:var(--radius);
  cursor:pointer; white-space:nowrap;
  font-family:'Noto Sans KR',sans-serif;
  transition: background .2s;
  flex-shrink:0;
}
.btn-comment-submit:hover { background:var(--accent-h); }

/* ── Edit modal ── */
.modal-overlay {
  display:none;
  position:fixed; inset:0; z-index:500;
  background: rgba(0,0,0,.45);
  align-items:center; justify-content:center;
  padding:20px;
}
.modal-overlay.open { display:flex; animation: fadeIn .2s ease; }
@keyframes fadeIn { from{opacity:0} to{opacity:1} }

.modal {
  background: var(--surface);
  border-radius: 10px;
  width: 100%; max-width: 520px;
  box-shadow: 0 20px 60px rgba(0,0,0,.2);
  overflow: hidden;
  animation: slideUp .25s ease;
}
@keyframes slideUp {
  from{opacity:0;transform:translateY(20px)}
  to{opacity:1;transform:translateY(0)}
}

.modal-head {
  padding:20px 24px;
  border-bottom:1px solid var(--border);
  display:flex; align-items:center; justify-content:space-between;
}
.modal-head h3 { font-size:16px; font-weight:700; }
.modal-close {
  width:28px;height:28px;
  border:none;background:none;cursor:pointer;
  color:var(--muted);font-size:20px;line-height:1;
  border-radius:4px; transition:background .15s;
  display:flex;align-items:center;justify-content:center;
}
.modal-close:hover { background:var(--border); }

.modal-body { padding:20px 24px; display:flex; flex-direction:column; gap:12px; }
.modal-foot {
  padding:16px 24px;
  border-top:1px solid var(--border);
  display:flex;gap:8px;justify-content:flex-end;
}
.btn-cancel {
  padding:9px 18px;
  font-size:13px;font-weight:500;
  background:none;border:1px solid var(--border);
  border-radius:var(--radius);cursor:pointer;
  font-family:'Noto Sans KR',sans-serif;
  transition:background .15s;
}
.btn-cancel:hover { background:var(--border); }
.btn-save {
  padding:9px 18px;
  font-size:13px;font-weight:700;
  background:var(--accent);color:#fff;
  border:none;border-radius:var(--radius);cursor:pointer;
  font-family:'Noto Sans KR',sans-serif;
  transition:background .15s;
}
.btn-save:hover { background:var(--accent-h); }

/* ── Toast ── */
.toast {
  position:fixed;bottom:28px;left:50%;
  transform:translateX(-50%) translateY(80px);
  background:var(--ink);color:#fff;
  padding:11px 22px;border-radius:100px;
  font-size:13px;font-weight:500;
  z-index:900;
  transition:transform .35s cubic-bezier(.34,1.56,.64,1);
  pointer-events:none;
  white-space:nowrap;
  box-shadow:0 4px 20px rgba(0,0,0,.25);
}
.toast.show { transform:translateX(-50%) translateY(0); }

/* ── Admin modal ── */
.admin-modal-overlay {
  display:none;
  position:fixed;inset:0;z-index:600;
  background:rgba(0,0,0,.5);
  align-items:center;justify-content:center;
  padding:20px;
}
.admin-modal-overlay.open { display:flex; animation:fadeIn .2s ease; }
.admin-modal {
  background:var(--surface);
  border-radius:10px;
  width:100%;max-width:360px;
  box-shadow:0 20px 60px rgba(0,0,0,.25);
  overflow:hidden;
  animation:slideUp .25s ease;
}
.admin-modal-head {
  padding:20px 24px 16px;
  display:flex;align-items:center;gap:10px;
}
.admin-modal-head .lock-icon { font-size:28px; }
.admin-modal-head h3 { font-size:16px;font-weight:700; }
.admin-modal-body { padding:0 24px 20px; display:flex;flex-direction:column;gap:10px; }
.admin-modal-body p { font-size:13px;color:var(--muted);line-height:1.6; }
.admin-modal-body input {
  font-size:14px;
  letter-spacing:2px;
}
.admin-modal-foot {
  padding:16px 24px;
  border-top:1px solid var(--border);
  display:flex;gap:8px;justify-content:flex-end;
}
.admin-error { font-size:12px;color:var(--danger);display:none; }
.admin-error.visible { display:block; }

/* Responsive */
@media(max-width:540px) {
  .topbar-inner { padding:0 16px; }
  .main { padding:20px 16px 60px; gap:20px; }
  .write-box { padding:18px; }
  .comment-write { grid-template-columns:1fr; }
  .btn-comment-submit { width:100%; height:38px; }
  .modal-body,.modal-head,.modal-foot { padding-left:18px;padding-right:18px; }
}
</style>
</head>
<body>

<!-- Top bar -->
<header class="topbar">
  <div class="topbar-inner">
    <div class="logo">
      <span class="logo-dot"></span>
      익명 게시판
    </div>
    <button class="admin-btn" id="adminBtn" onclick="openAdminLogin()">
      🔐 관리자
    </button>
  </div>
</header>

<!-- Main -->
<main class="main">

  <!-- Write box -->
  <section class="write-box">
    <h2><span>✏️</span> 새 글 작성</h2>

    <div class="anon-notice">
      🕵️ 이름 없이 자유롭게 작성하세요. 익명으로 게시됩니다.
    </div>

    <div class="field">
      <label>제목</label>
      <input type="text" id="postTitle" placeholder="제목을 입력하세요" maxlength="80">
    </div>
    <div class="field">
      <label>내용</label>
      <textarea id="postBody" rows="5" placeholder="내용을 자유롭게 작성해주세요..." maxlength="2000"
        oninput="updateChar(this,'bodyChar',2000)"></textarea>
      <div class="char-count"><span id="bodyChar">0</span> / 2000</div>
    </div>

    <button class="btn-submit" onclick="submitPost()">게시하기 →</button>
  </section>

  <!-- Post list -->
  <section>
    <div class="list-header">
      <div class="list-title">
        게시글
        <span class="post-count" id="postCount">0</span>
      </div>
      <div class="sort-btns">
        <button class="sort-btn active" id="sortNew" onclick="setSort('new')">최신순</button>
        <button class="sort-btn" id="sortOld" onclick="setSort('old')">오래된순</button>
      </div>
    </div>
    <div class="posts" id="postList"></div>
  </section>

</main>

<!-- Edit Modal -->
<div class="modal-overlay" id="editModal">
  <div class="modal">
    <div class="modal-head">
      <h3>게시글 수정</h3>
      <button class="modal-close" onclick="closeModal('editModal')">✕</button>
    </div>
    <div class="modal-body">
      <div class="field">
        <label>제목</label>
        <input type="text" id="editTitle" maxlength="80">
      </div>
      <div class="field">
        <label>내용</label>
        <textarea id="editBody" rows="7" maxlength="2000"></textarea>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn-cancel" onclick="closeModal('editModal')">취소</button>
      <button class="btn-save" onclick="saveEdit()">저장하기</button>
    </div>
  </div>
</div>

<!-- Edit Comment Modal -->
<div class="modal-overlay" id="editCommentModal">
  <div class="modal">
    <div class="modal-head">
      <h3>댓글 수정</h3>
      <button class="modal-close" onclick="closeModal('editCommentModal')">✕</button>
    </div>
    <div class="modal-body">
      <div class="field">
        <label>댓글 내용</label>
        <textarea id="editCommentBody" rows="4" maxlength="500"></textarea>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn-cancel" onclick="closeModal('editCommentModal')">취소</button>
      <button class="btn-save" onclick="saveCommentEdit()">저장하기</button>
    </div>
  </div>
</div>

<!-- Admin Login Modal -->
<div class="admin-modal-overlay" id="adminModal">
  <div class="admin-modal">
    <div class="admin-modal-head">
      <span class="lock-icon">🔐</span>
      <h3>관리자 로그인</h3>
    </div>
    <div class="admin-modal-body">
      <p>관리자 비밀번호를 입력하면 게시글과 댓글을 수정·삭제할 수 있습니다.</p>
      <input type="password" id="adminPw" placeholder="비밀번호 입력"
        onkeydown="if(event.key==='Enter')tryAdminLogin()">
      <div class="admin-error" id="adminError">비밀번호가 올바르지 않습니다.</div>
    </div>
    <div class="admin-modal-foot">
      <button class="btn-cancel" onclick="closeModal('adminModal')">취소</button>
      <button class="btn-save" onclick="tryAdminLogin()">확인</button>
    </div>
  </div>
</div>

<!-- Toast -->
<div class="toast" id="toast"></div>

<script>
/* ================================================================
   CONFIG — 관리자 비밀번호를 여기서 변경하세요
   ================================================================ */
const ADMIN_PW = 'admin1234';

/* ================================================================
   Storage helpers — localStorage with in-memory fallback
   ================================================================ */
const POSTS_KEY = 'anon-board:posts';
const SORT_KEY  = 'anon-board:sort';

let posts    = [];
let isAdmin  = false;
let sortMode = 'new';

const store = {
  get(k) {
    try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; }
    catch { return null; }
  },
  set(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); } catch {}
  }
};

/* ================================================================
   Color palette for anon avatars
   ================================================================ */
const COLORS = [
  ['#DBEAFE','#1D4ED8'], ['#FCE7F3','#9D174D'], ['#D1FAE5','#065F46'],
  ['#FEF3C7','#92400E'], ['#EDE9FE','#5B21B6'], ['#FFE4E6','#9F1239'],
  ['#ECFDF5','#047857'], ['#FEF9C3','#713F12'],
];
function avatarColor(id) {
  const n = parseInt(id.replace(/\D/g,'').slice(-4)||'0', 10) || 0;
  return COLORS[n % COLORS.length];
}

const ANON_NAMES = ['익명의 고양이','익명의 여우','익명의 판다','익명의 부엉이',
  '익명의 오리','익명의 토끼','익명의 곰','익명의 너구리','익명의 사슴','익명의 수달'];
function anonName(id) {
  const n = parseInt(id.replace(/\D/g,'').slice(-4)||'0',10)||0;
  return ANON_NAMES[n % ANON_NAMES.length];
}

/* ================================================================
   Helpers
   ================================================================ */
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2,7);
}

function formatTime(ts) {
  const d = new Date(ts);
  const now = new Date();
  const diff = (now - d) / 1000;
  if (diff < 60) return '방금 전';
  if (diff < 3600) return `${Math.floor(diff/60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff/3600)}시간 전`;
  const ymd = d.toLocaleDateString('ko-KR',{month:'short',day:'numeric'});
  const hm  = d.toLocaleTimeString('ko-KR',{hour:'2-digit',minute:'2-digit'});
  return `${ymd} ${hm}`;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

function updateChar(el, spanId, max) {
  document.getElementById(spanId).textContent = el.value.length;
}

function toast(msg, emoji='✅') {
  const t = document.getElementById('toast');
  t.textContent = emoji + ' ' + msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ================================================================
   Persist
   ================================================================ */
function savePosts() {
  store.set(POSTS_KEY, posts);
}

function loadPosts() {
  posts = store.get(POSTS_KEY) || [];
  const savedSort = store.get(SORT_KEY);
  if (savedSort) setSort(savedSort, false);
  render();
}

/* ================================================================
   Render
   ================================================================ */
function sortedPosts() {
  const arr = [...posts];
  return sortMode === 'new'
    ? arr.sort((a,b) => b.ts - a.ts)
    : arr.sort((a,b) => a.ts - b.ts);
}

function render() {
  const list = document.getElementById('postList');
  const sp   = sortedPosts();
  document.getElementById('postCount').textContent = posts.length;

  if (!sp.length) {
    list.innerHTML = `
      <div class="empty-state">
        <span class="icon">💬</span>
        아직 게시글이 없어요.<br>첫 번째 글을 남겨보세요!
      </div>`;
    return;
  }

  list.innerHTML = sp.map((p, idx) => renderPost(p, idx)).join('');
}

function renderPost(p, globalIdx) {
  const [bg, fg] = avatarColor(p.id);
  const name = anonName(p.id);
  const adminClass = isAdmin ? 'visible' : '';
  const commentCount = (p.comments || []).length;
  const num = posts.indexOf(p) + 1;

  const commentsHtml = (p.comments || []).map(c => renderComment(p.id, c)).join('');

  return `
  <div class="post-card" id="card-${p.id}">
    <div class="post-head">
      <div class="post-meta">
        <div class="anon-avatar" style="background:${bg};color:${fg}">${name[2]}</div>
        <span class="anon-label">${escapeHtml(name)}</span>
        <span class="post-num">#${String(num).padStart(3,'0')}</span>
        <span class="post-time">${formatTime(p.ts)}</span>
      </div>
      <div class="post-title" onclick="togglePost('${p.id}')">${escapeHtml(p.title)}</div>
      <div class="post-preview">${escapeHtml(p.body)}</div>
    </div>
    <div class="post-foot">
      <div class="foot-stat">
        <svg viewBox="0 0 20 20" fill="currentColor"><path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z"/></svg>
        ${commentCount}
      </div>
      <button class="btn-expand" onclick="togglePost('${p.id}')">
        <span id="expand-label-${p.id}">펼치기 ▾</span>
      </button>
    </div>

    <div class="post-full" id="full-${p.id}">
      <div class="post-body">${escapeHtml(p.body)}</div>

      <div class="admin-controls ${adminClass}" id="ac-${p.id}">
        <button class="btn-admin btn-edit" onclick="openEditPost('${p.id}')">✏️ 수정</button>
        <button class="btn-admin btn-delete" onclick="deletePost('${p.id}')">🗑️ 삭제</button>
      </div>

      <!-- Comments -->
      <div class="comments-section">
        <div class="comments-title">
          댓글
          <span class="comment-count-badge" id="cc-${p.id}">${commentCount}</span>
        </div>
        <div class="comment-list" id="cl-${p.id}">
          ${commentsHtml}
        </div>
        <div class="comment-write">
          <textarea id="ci-${p.id}" placeholder="댓글을 남겨보세요..." rows="2" maxlength="500"
            onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();submitComment('${p.id}')}"></textarea>
          <button class="btn-comment-submit" onclick="submitComment('${p.id}')">등록</button>
        </div>
      </div>
    </div>
  </div>`;
}

function renderComment(postId, c) {
  const isAdm = c.isAdmin;
  const [bg, fg] = isAdm ? ['#EDE9FE','#5B21B6'] : avatarColor(c.id);
  const label = isAdm ? '관리자' : anonName(c.id);
  const initial = isAdm ? '관' : label[2];
  const adminClass = isAdmin ? 'visible' : '';

  return `
  <div class="comment-item" id="cmt-${c.id}">
    <div class="comment-avatar" style="background:${bg};color:${fg}">${initial}</div>
    <div class="comment-right">
      <div class="comment-header">
        <span class="comment-author" style="color:${fg}">${escapeHtml(label)}</span>
        ${isAdm ? '<span class="comment-admin-tag">ADMIN</span>' : ''}
        <span class="comment-time">${formatTime(c.ts)}</span>
      </div>
      <div class="comment-text" id="ct-${c.id}">${escapeHtml(c.body)}</div>
      <div class="comment-admin-controls ${adminClass}" id="cac-${c.id}">
        <button class="btn-comment-admin btn-edit" onclick="openEditComment('${postId}','${c.id}')">수정</button>
        <button class="btn-comment-admin btn-delete" onclick="deleteComment('${postId}','${c.id}')">삭제</button>
      </div>
    </div>
  </div>`;
}

/* ================================================================
   Toggle post expand
   ================================================================ */
function togglePost(postId) {
  const full  = document.getElementById(`full-${postId}`);
  const label = document.getElementById(`expand-label-${postId}`);
  const open  = full.classList.toggle('open');
  label.textContent = open ? '접기 ▴' : '펼치기 ▾';
}

/* ================================================================
   Submit post
   ================================================================ */
function submitPost() {
  const title = document.getElementById('postTitle').value.trim();
  const body  = document.getElementById('postBody').value.trim();
  if (!title) { toast('제목을 입력해주세요.','⚠️'); return; }
  if (!body)  { toast('내용을 입력해주세요.','⚠️'); return; }

  const post = { id: uid(), title, body, ts: Date.now(), comments: [] };
  posts.unshift(post);
  savePosts();

  document.getElementById('postTitle').value = '';
  document.getElementById('postBody').value  = '';
  document.getElementById('bodyChar').textContent = '0';

  render();
  toast('게시글이 등록되었습니다!');
}

/* ================================================================
   Sort
   ================================================================ */
function setSort(mode, save=true) {
  sortMode = mode;
  document.getElementById('sortNew').classList.toggle('active', mode==='new');
  document.getElementById('sortOld').classList.toggle('active', mode==='old');
  if (save) store.set(SORT_KEY, mode);
  render();
}

/* ================================================================
   Admin: edit post
   ================================================================ */
let editingPostId = null;

function openEditPost(postId) {
  const p = posts.find(x => x.id === postId);
  if (!p) return;
  editingPostId = postId;
  document.getElementById('editTitle').value = p.title;
  document.getElementById('editBody').value  = p.body;
  openModal('editModal');
}

function saveEdit() {
  const t = document.getElementById('editTitle').value.trim();
  const b = document.getElementById('editBody').value.trim();
  if (!t || !b) { toast('제목과 내용을 모두 입력해주세요.','⚠️'); return; }
  const p = posts.find(x => x.id === editingPostId);
  if (!p) return;
  p.title = t;
  p.body  = b;
  p.edited = true;
  savePosts();
  render();
  closeModal('editModal');
  toast('수정되었습니다.','✏️');
}

function deletePost(postId) {
  if (!confirm('정말 삭제할까요?')) return;
  posts = posts.filter(x => x.id !== postId);
  savePosts();
  render();
  toast('삭제되었습니다.','🗑️');
}

/* ================================================================
   Submit comment
   ================================================================ */
function submitComment(postId) {
  const inp  = document.getElementById(`ci-${postId}`);
  const body = inp.value.trim();
  if (!body) return;

  const p = posts.find(x => x.id === postId);
  if (!p) return;

  const comment = {
    id: uid(),
    body,
    ts: Date.now(),
    isAdmin: isAdmin
  };
  (p.comments = p.comments || []).push(comment);
  savePosts();

  // Append comment to DOM (without full re-render)
  const cl = document.getElementById(`cl-${postId}`);
  const div = document.createElement('div');
  div.innerHTML = renderComment(postId, comment);
  cl.appendChild(div.firstElementChild);

  // Update count badge
  const cc = document.getElementById(`cc-${postId}`);
  if (cc) cc.textContent = p.comments.length;

  inp.value = '';
  toast(isAdmin ? '관리자 댓글이 등록되었습니다.' : '댓글이 등록되었습니다.', isAdmin ? '👑' : '💬');
}

/* ================================================================
   Admin: edit/delete comment
   ================================================================ */
let editingPostIdForComment = null;
let editingCommentId = null;

function openEditComment(postId, commentId) {
  const p = posts.find(x => x.id === postId);
  const c = p?.comments?.find(x => x.id === commentId);
  if (!c) return;
  editingPostIdForComment = postId;
  editingCommentId = commentId;
  document.getElementById('editCommentBody').value = c.body;
  openModal('editCommentModal');
}

function saveCommentEdit() {
  const b = document.getElementById('editCommentBody').value.trim();
  if (!b) { toast('내용을 입력해주세요.','⚠️'); return; }
  const p = posts.find(x => x.id === editingPostIdForComment);
  const c = p?.comments?.find(x => x.id === editingCommentId);
  if (!c) return;
  c.body = b;
  savePosts();

  const el = document.getElementById(`ct-${editingCommentId}`);
  if (el) el.textContent = b;

  closeModal('editCommentModal');
  toast('댓글이 수정되었습니다.','✏️');
}

function deleteComment(postId, commentId) {
  if (!confirm('댓글을 삭제할까요?')) return;
  const p = posts.find(x => x.id === postId);
  if (!p) return;
  p.comments = (p.comments || []).filter(c => c.id !== commentId);
  savePosts();

  const el = document.getElementById(`cmt-${commentId}`);
  if (el) el.remove();

  const cc = document.getElementById(`cc-${postId}`);
  if (cc) cc.textContent = p.comments.length;

  toast('댓글이 삭제되었습니다.','🗑️');
}

/* ================================================================
   Modal helpers
   ================================================================ */
function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

// Close on overlay click
document.querySelectorAll('.modal-overlay,.admin-modal-overlay').forEach(el => {
  el.addEventListener('click', e => {
    if (e.target === el) el.classList.remove('open');
  });
});

/* ================================================================
   Admin login
   ================================================================ */
function openAdminLogin() {
  if (isAdmin) {
    // Logout
    isAdmin = false;
    document.getElementById('adminBtn').classList.remove('active');
    document.getElementById('adminBtn').textContent = '🔐 관리자';
    render();
    toast('관리자 모드가 해제되었습니다.','🔓');
    return;
  }
  document.getElementById('adminPw').value = '';
  document.getElementById('adminError').classList.remove('visible');
  openModal('adminModal');
  setTimeout(() => document.getElementById('adminPw').focus(), 150);
}

function tryAdminLogin() {
  const pw = document.getElementById('adminPw').value;
  if (pw === ADMIN_PW) {
    isAdmin = true;
    closeModal('adminModal');
    document.getElementById('adminBtn').classList.add('active');
    document.getElementById('adminBtn').textContent = '👑 관리자 모드';
    render();
    toast('관리자 모드로 전환되었습니다.','👑');
  } else {
    document.getElementById('adminError').classList.add('visible');
    document.getElementById('adminPw').value = '';
    document.getElementById('adminPw').focus();
  }
}

/* ================================================================
   Init
   ================================================================ */
loadPosts();
</script>
</body>
</html>
