const menuDiv = document.querySelector('.mobileMenu');
const menuTitle = document.getElementById('mobMenuTitle');

const toggleMenu = () => {
    menuDiv.classList.toggle('mobileOpen');
};

menuTitle.addEventListener('click', toggleMenu);