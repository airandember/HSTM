// Service Selection Modal
const viewServicesBtn = document.getElementById('view-services-btn');
const viewAllServicesBtn = document.getElementById('view-all-services-btn');
const serviceModal = document.getElementById('service-modal');
const serviceModalOverlay = document.getElementById('service-modal-overlay');

// Function to show modal
function showServiceModal(e) {
    e.preventDefault();
    serviceModalOverlay.classList.add('show');
    // Small delay to ensure the fade-in animation works
    setTimeout(() => {
        serviceModal.classList.add('show');
    }, 10);
}

// Add click handlers to both buttons
viewServicesBtn.addEventListener('click', showServiceModal);
viewAllServicesBtn.addEventListener('click', showServiceModal);

// Close modal when clicking overlay
serviceModalOverlay.addEventListener('click', (e) => {
    if (e.target === serviceModalOverlay) {
        serviceModal.classList.remove('show');
        setTimeout(() => {
            serviceModalOverlay.classList.remove('show');
        }, 300);
    }
});