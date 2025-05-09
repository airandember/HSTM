const menuDiv = document.querySelector('.mobileMenu');
const menuTitle = document.getElementById('mobMenuTitle');
const mobileCarrot = document.getElementById('mobMenuCarrot');

const toggleMenu = () => {
    menuDiv.classList.toggle('mobileOpen');
};

menuTitle.addEventListener('click', toggleMenu);
mobileCarrot.addEventListener('click', toggleMenu);