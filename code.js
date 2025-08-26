const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('login-loginBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

function checkInputs() {
  loginBtn.disabled = !(usernameInput.value.trim() && passwordInput.value.trim());
}
usernameInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = [
    ['ユーザー名', 'パスワード', '送信日時'],
    [usernameInput.value, passwordInput.value, new Date().toLocaleString('ja-JP')]
  ];
  const bom = '\uFEFF';
  const csv = bom + data.map(row => row.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'form_data.csv';
  link.click();
  window.location.href = 'code.html';
});