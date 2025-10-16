// Ad Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    const adSpace = document.getElementById('ADSpace');
    
    if (!adSpace) return;
    
    // Create ad popup HTML structure
    const adHTML = `
        <div class="ad-popup-container" id="ad-popup">
            
            <div class="ad-popup-content">
            <button class="ad-popup-close" id="ad-close-btn" aria-label="Close advertisement">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
                <a href="/pages/haven.html#HavenAD" title="Explore The Haven" class="ad-image-container">
                    <img src="/assets/images/AD_Escape_Key.webp" 
                         alt="The Haven - Your Escape Room for Wellness" 
                         class="ad-popup-image">
                    <div class="ad-text-overlay">
                        <h3>Unlock a Year of Self-Care</h3><br>
                        <div>
                            <h2>Offer Valid Until</h2>
                            <h1>October 25</h1>
                        </div>
                        <h3>Grab your key 🗝️</h3>
                    </div>
                    
                </a>
            </div>
        </div>
    `;
    
    // Insert ad HTML into the ADSpace container
    adSpace.innerHTML = adHTML;
    
    const popup = document.getElementById('ad-popup');
    const closeBtn = document.getElementById('ad-close-btn');
    
    // Function to show the popup
    function showPopup() {
        popup.classList.add('active');
    }
    
    // Function to hide the popup
    function hidePopup() {
        popup.classList.remove('active');
    }
    
    // Close button event listener
    closeBtn.addEventListener('click', hidePopup);
    
    // Optional: Close when clicking outside on desktop (not on mobile)
    popup.addEventListener('click', function(e) {
        if (e.target === popup && window.innerWidth > 768) {
            hidePopup();
        }
    });
    
    // Show popup after delay on every page load
    setTimeout(showPopup, 1000); // Show after 1 second
    
    // Optional: Reshow button - you can add this to your page if you want users to be able to bring it back
    window.showAd = showPopup;
});

