const logInIcon = document.getElementById('login-icon');
const logIn = document.getElementById('login');
const logInEnter = document.getElementById('login-enter');


logInIcon.addEventListener('click', () => {
    if (logIn.classList.contains('hidden')) {
        logIn.classList.remove('hidden');
        logInIcon.innerText = '[x]';
    } else {
        logIn.classList.add('hidden');
        logInIcon.innerText = 'LogIn';
    }
});

logInEnter.addEventListener('click', () => {
    logIn.classList.add('hidden');
    logInIcon.innerText = 'LogIn';
});