```js
const API_BASE = 'http://localhost:4000/api/auth';


// Signup
const signupForm = document.getElementById('signupForm');
if (signupForm) {
signupForm.addEventListener('submit', async (e) => {
e.preventDefault();
const username = document.getElementById('username').value.trim();
const password = document.getElementById('password').value;
const msg = document.getElementById('msg');
try {
const res = await fetch(`${API_BASE}/signup`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ username, password })
});
const data = await res.json();
if (!res.ok) throw new Error(data.message || 'Signup failed');
msg.textContent = 'Signup success — go to login';
setTimeout(() => location.href = 'login.html', 1000);
} catch (err) {
msg.textContent = err.message;
}
});
}


// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
loginForm.addEventListener('submit', async (e) => {
e.preventDefault();
const username = document.getElementById('loginUsername').value.trim();
const password = document.getElementById('loginPassword').value;
const msg = document.getElementById('msg');
try {
const res = await fetch(`${API_BASE}/login`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ username, password })
});
const data = await res.json();
if (!res.ok) throw new Error(data.message || 'Login failed');
// Save token
localStorage.setItem('authToken', data.token);
```