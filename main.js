const loginBtn = document.getElementById('login');
const loginEnter = document.getElementById('enter');
const loginDiv = document.getElementById('log-in');

loginBtn.addEventListener('click', () => {
    loginDiv.style.display = 'flex';
});

loginEnter.addEventListener('click', () => {
    loginDiv.style.display = 'none';
});