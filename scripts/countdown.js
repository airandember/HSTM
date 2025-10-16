// Countdown Timer for Haven Escape Key Offer
document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('ADCountDown');
    
    if (!countdownElement) return;
    
    // Set the target date to October 25, 2025 at 11:59 PM
    const targetDate = new Date('October 25, 2025 23:59:59').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        // If countdown is finished
        if (distance < 0) {
            countdownElement.innerHTML = '<span class="text-red-300 font-semibold">Offer Expired</span>';
            clearInterval(countdownInterval);
            return;
        }
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Format with leading zeros
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        
        // Build the countdown HTML
        countdownElement.innerHTML = `
            <div class="text-center mt-4 pt-4 border-t border-white/20">
                <p class="text-sm text-hibiscus-100 mb-2">Offer ends in:</p>
                <div class="flex justify-between gap-3 text-white ">
                    <div class="flex flex-col items-center bg-white/10 rounded-lg px-3 py-2 min-w-[60px] pad-05">
                        <span class="text-2xl md:text-3xl font-bold">${days}</span>
                        <span class="text-xs text-hibiscus-200">Days</span>
                    </div>
                    <div class="flex flex-col items-center bg-white/10 rounded-lg px-3 py-2 min-w-[60px] pad-05">
                        <span class="text-2xl md:text-3xl font-bold">${formattedHours}</span>
                        <span class="text-xs text-hibiscus-200">Hours</span>
                    </div>
                    <div class="flex flex-col items-center bg-white/10 rounded-lg px-3 py-2 min-w-[60px] pad-05">
                        <span class="text-2xl md:text-3xl font-bold">${formattedMinutes}</span>
                        <span class="text-xs text-hibiscus-200">Mins</span>
                    </div>
                    <div class="flex flex-col items-center bg-white/10 rounded-lg px-3 py-2 min-w-[60px] pad-05">
                        <span class="text-2xl md:text-3xl font-bold">${formattedSeconds}</span>
                        <span class="text-xs text-hibiscus-200">Secs</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Update immediately
    updateCountdown();
    
    // Update every second
    const countdownInterval = setInterval(updateCountdown, 1000);
});

