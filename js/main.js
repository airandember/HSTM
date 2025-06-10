// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileDropdownButton = document.querySelector('.mobile-dropdown-button');
    const mobileDropdownContent = document.querySelector('.mobile-dropdown-content');

    // Create background element
    const menuBackground = document.createElement('div');
    menuBackground.className = 'mobile-menu-background';
    document.body.appendChild(menuBackground);

    // Create flower overlay
    const overlay = document.createElement('div');
    overlay.className = 'flower-overlay';
    document.body.appendChild(overlay);

    // Hibiscus flower SVG path
    const hibiscusSVG = `
        <svg viewBox="0 0 100 100" class="flower">
            <path d="M50 0C55 15 65 25 80 30C65 35 55 45 50 60C45 45 35 35 20 30C35 25 45 15 50 0Z"/>
            <path d="M50 10C53 20 60 27 70 30C60 33 53 40 50 50C47 40 40 33 30 30C40 27 47 20 50 10Z"/>
        </svg>
    `;

    function createFlower(isRising = false) {
        const flower = document.createElement('div');
        flower.innerHTML = hibiscusSVG;
        flower.style.left = `${Math.random() * 100}%`;
        flower.style.setProperty('--fall-duration', `${2 + Math.random() * 2}s`);
        flower.firstElementChild.style.transform = `rotate(${Math.random() * 360}deg)`;
        flower.firstElementChild.classList.add(isRising ? 'rising' : 'falling');
        return flower;
    }

    function animateFlowers(opening = true) {
        overlay.innerHTML = '';
        overlay.classList.add('active');
        
        const flowerCount = opening ? 30 : 20;
        const delay = opening ? 100 : 50;
        
        let flowersCreated = 0;
        
        const createInterval = setInterval(() => {
            const flower = createFlower(!opening);
            overlay.appendChild(flower);
            flowersCreated++;
            
            if (flowersCreated >= flowerCount) {
                clearInterval(createInterval);
                
                if (!opening) {
                    setTimeout(() => {
                        overlay.classList.remove('active');
                        setTimeout(() => {
                            overlay.innerHTML = '';
                        }, 500);
                    }, 1000);
                }
            }
        }, delay);

        if (opening) {
            setTimeout(() => {
                mobileMenu.classList.add('show');
            }, 800);
        } else {
            mobileMenu.classList.remove('show');
        }
    }

    // Toggle mobile menu with animation
    mobileMenuButton.addEventListener('click', () => {
        const isOpening = !mobileMenu.classList.contains('show');
        
        if (isOpening) {
            menuIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            `;
            menuBackground.classList.add('show');
            // Slight delay to let background animation start
            setTimeout(() => {
                mobileMenu.classList.add('show');
            }, 400);
        } else {
            menuIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            `;
            mobileMenu.classList.remove('show');
            // Slight delay to let menu fade out before background
            setTimeout(() => {
                menuBackground.classList.remove('show');
            }, 300);
        }
    });

    // Toggle mobile services dropdown
    if (mobileDropdownButton) {
        mobileDropdownButton.addEventListener('click', () => {
            mobileDropdownContent.classList.toggle('show');
            const dropdownArrow = mobileDropdownButton.querySelector('.mobile-dropdown-arrow');
            if (dropdownArrow) {
                dropdownArrow.style.transform = mobileDropdownContent.classList.contains('show') 
                    ? 'rotate(180deg)' 
                    : 'rotate(0)';
            }
        });
    }

    // Handle menu item clicks
    const menuLinks = document.querySelectorAll('.mobile-nav-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            `;
            mobileMenu.classList.remove('show');
            setTimeout(() => {
                menuBackground.classList.remove('show');
            }, 300);
        });
    });

    // Close mobile menu when clicking background
    menuBackground.addEventListener('click', (e) => {
        if (e.target === menuBackground) {
            mobileMenu.classList.remove('show');
            menuIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            `;
            setTimeout(() => {
                menuBackground.classList.remove('show');
            }, 300);
        }
    });

    // Close mobile menu when window is resized to desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && mobileMenu.classList.contains('show')) {
            menuIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            `;
            mobileMenu.classList.remove('show');
            menuBackground.classList.remove('show');
            if (mobileDropdownContent) {
                mobileDropdownContent.classList.remove('show');
            }
        }
    });
}); 