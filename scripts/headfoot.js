// Dynamic Header and Footer Loader
document.addEventListener('DOMContentLoaded', function() {
    // Load Header
    const headerContainer = document.getElementById('header');
    if (headerContainer) {
        fetch('/pages/header.html')
            .then(response => {
                if (!response.ok) throw new Error('Header not found');
                return response.text();
            })
            .then(html => {
                headerContainer.innerHTML = html;
                // Reinitialize mobile menu after header loads
                initializeMobileMenu();
            })
            .catch(error => {
                console.error('Error loading header:', error);
                // Fallback: keep existing inline header if fetch fails
            });
    }
    
    // Load Footer
    const footerContainer = document.getElementById('footer');
    if (footerContainer) {
        fetch('/pages/footer.html')
            .then(response => {
                if (!response.ok) throw new Error('Footer not found');
                return response.text();
            })
            .then(html => {
                footerContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
            });
    }
});

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
                mobileMenu.classList.remove('active');
            }
        });
    }
    
    // Desktop dropdown functionality
    const dropdownButtons = document.querySelectorAll('.services-dropdown .dropdown-button');
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const dropdown = this.closest('.services-dropdown');
            dropdown.classList.toggle('active');
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        document.querySelectorAll('.services-dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });
}
