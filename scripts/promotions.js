// Promotions Date Management System
// Automatically hides promotions based on date ranges

document.addEventListener('DOMContentLoaded', function() {
    initializePromotions();
});

function initializePromotions() {
    // Get all elements with date-range attributes
    const promotionElements = document.querySelectorAll('[data-promotion-start], [data-promotion-end]');
    
    if (promotionElements.length === 0) {
        return; // No date-based promotions on this page
    }
    
    // Current date at midnight (local time)
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    console.log('🗓️ Current date:', now.toISOString().split('T')[0], '|', now.toString());
    
    let activePromotionCount = 0;
    
    promotionElements.forEach(element => {
        const promotionName = element.getAttribute('data-promotion-name') || 'Unnamed';
        const startDate = element.getAttribute('data-promotion-start');
        const endDate = element.getAttribute('data-promotion-end');
        
        console.log(`\n📋 Checking: ${promotionName}`);
        console.log(`   Start: ${startDate}, End: ${endDate}`);
        
        const isActive = checkPromotionActive(now, startDate, endDate);
        
        console.log(`   Status: ${isActive ? '✅ ACTIVE' : '❌ HIDDEN'}`);
        
        if (isActive) {
            activePromotionCount++;
            element.style.display = ''; // Show the promotion
            
            // Add countdown if end date is within 7 days
            if (endDate) {
                const daysRemaining = calculateDaysRemaining(now, endDate);
                if (daysRemaining > 0 && daysRemaining <= 7) {
                    addCountdownBadge(element, daysRemaining);
                }
            }
        } else {
            element.style.display = 'none'; // Hide expired/inactive promotion
        }
    });
    
    // If no promotions are active, show the fallback message
    if (activePromotionCount === 0) {
        showNoActivePromotionsMessage();
    } else {
        hideNoActivePromotionsMessage();
    }
}

function checkPromotionActive(currentDate, startDateStr, endDateStr) {
    // Parse dates
    const startDate = startDateStr ? parseDate(startDateStr) : null;
    const endDate = endDateStr ? parseDate(endDateStr) : null;
    
    console.log(`   Parsed dates:`, {
        current: currentDate.toISOString().split('T')[0],
        start: startDate ? startDate.toISOString().split('T')[0] : 'none',
        end: endDate ? endDate.toISOString().split('T')[0] : 'none'
    });
    
    // Check if current date is within range
    let isActive = true;
    
    if (startDate && currentDate < startDate) {
        console.log(`   ⚠️ Not started yet (current < start)`);
        isActive = false; // Not started yet
    }
    
    if (endDate && currentDate > endDate) {
        console.log(`   ⚠️ Already ended (current > end)`);
        isActive = false; // Already ended
    }
    
    return isActive;
}

function parseDate(dateStr) {
    // Expected format: YYYY-MM-DD
    const date = new Date(dateStr + 'T00:00:00');
    return date;
}

function calculateDaysRemaining(currentDate, endDateStr) {
    const endDate = parseDate(endDateStr);
    const timeDiff = endDate - currentDate;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysRemaining;
}

function addCountdownBadge(element, daysRemaining) {
    // Check if badge already exists
    if (element.querySelector('.promotion-countdown-badge')) {
        return;
    }
    
    // Find the heading or title within the promotion
    const heading = element.querySelector('h2, h3, .text-center');
    
    if (heading) {
        const badge = document.createElement('span');
        badge.className = 'promotion-countdown-badge';
        badge.innerHTML = `⏰ ${daysRemaining} day${daysRemaining !== 1 ? 's' : ''} left!`;
        badge.style.cssText = `
            display: inline-block;
            background: linear-gradient(135deg, #DC2626 0%, #F59E0B 100%);
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.875rem;
            font-weight: 600;
            margin-left: 10px;
            animation: urgentPulse 2s ease-in-out infinite;
        `;
        
        heading.appendChild(badge);
        
        // Add animation CSS if not already present
        addUrgentPulseAnimation();
    }
}

function addUrgentPulseAnimation() {
    // Check if animation already exists
    if (document.getElementById('promotion-countdown-animation')) {
        return;
    }
    
    const style = document.createElement('style');
    style.id = 'promotion-countdown-animation';
    style.textContent = `
        @keyframes urgentPulse {
            0%, 100% { 
                transform: scale(1); 
                opacity: 1; 
            }
            50% { 
                transform: scale(1.05); 
                opacity: 0.9; 
            }
        }
    `;
    document.head.appendChild(style);
}

function showNoActivePromotionsMessage() {
    const fallbackMessage = document.getElementById('no-active-promotions-message');
    if (fallbackMessage) {
        fallbackMessage.style.display = 'block';
    }
}

function hideNoActivePromotionsMessage() {
    const fallbackMessage = document.getElementById('no-active-promotions-message');
    if (fallbackMessage) {
        fallbackMessage.style.display = 'none';
    }
}

// Optional: Check for date changes at midnight (for pages left open)
function scheduleNextMidnightCheck() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const msUntilMidnight = tomorrow - now;
    
    setTimeout(function() {
        console.log('Midnight reached - refreshing promotions');
        initializePromotions();
        scheduleNextMidnightCheck(); // Schedule next check
    }, msUntilMidnight);
}

// Start the midnight check scheduler
scheduleNextMidnightCheck();

// Export for testing/debugging
window.promotionsManager = {
    refresh: initializePromotions,
    checkActive: checkPromotionActive,
    parseDate: parseDate
};

