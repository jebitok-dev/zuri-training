const menu = document.querySelector('.fa-bars');

const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    } else {
        navLinks.classList.add('active');
    }
})