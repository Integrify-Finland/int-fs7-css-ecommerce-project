const userList = document.getElementById('user-list');
const userListResponsive = document.getElementById('user-list-responsive');
const siteList = document.getElementById('site-list');
const siteListResponsive = document.getElementById('site-list-responsive');

userList.addEventListener('click', () => {
    if (userListResponsive.style.display === 'none') {
        userListResponsive.style.display = 'flex';
    } else {
        userListResponsive.style.display = 'none';
    }
});

siteList.addEventListener('click', () => {
    if (siteListResponsive.style.display === 'none') {
        siteListResponsive.style.display = 'flex';
    } else {
        siteListResponsive.style.display = 'none';
    }
});