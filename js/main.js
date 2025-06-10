document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileServicesMenu = document.querySelector('.mobile-services-menu button');
    const mobileServicesSubmenu = document.querySelector('.mobile-services-menu .hidden');
    
    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        // Animate menu icon
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
        } else {
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
        }
    });

    // Toggle services submenu in mobile view
    mobileServicesMenu.addEventListener('click', () => {
        mobileServicesSubmenu.classList.toggle('hidden');
        const arrow = mobileServicesMenu.querySelector('svg');
        arrow.style.transform = mobileServicesSubmenu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
        }
    });
}); 