import { logInIcon, logIn, logInEnter, NavList, userNavList, userNavDrop, NavListDrop, closeList1, closeList2 } from './elements.js'

logInIcon.addEventListener('click', () => {
    if (logIn.style.display === 'flex') {
        logIn.style.display = 'none';
        logInIcon.innerText = 'LogIn';
        logInIcon.style.padding = '0.2rem';
    } else {
        logIn.style.display = 'flex';
        logInIcon.innerText = '[ x ]';
        logInIcon.style.padding = 0;
    }
});

logInEnter.addEventListener('click', () => {
    logIn.style.display = 'none';
    logInIcon.innerText = 'LogIn';
    logInIcon.style.padding = '0.2rem';
});

NavList.addEventListener('click', () => {
    if (NavListDrop.classList.contains('hidden')) {
        NavListDrop.classList.remove('hidden');
        NavListDrop.classList.add('show');
    } else {
        NavListDrop.classList.add('hidden');
        NavListDrop.classList.remove('show');
    }
});

userNavList.addEventListener('click', () => {
    if (userNavDrop.classList.contains('hidden')) {
        userNavDrop.classList.remove('hidden');
        userNavDrop.classList.add('show');
    } else {
        userNavDrop.classList.add('hidden');
        userNavDrop.classList.remove('show');
    }
});

for (let i = 0; i < closeList1.length; i++) {
    closeList1[i].addEventListener('click', () => {
        NavListDrop.classList.add('hidden');
    });
}

for (let i = 0; i < closeList2.length; i++) {
    closeList2[i].addEventListener('click', () => {
        userNavDrop.classList.add('hidden');
    });
}