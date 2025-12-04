# 📅 Automatic Date-Based Promotions System

## Overview

Your promotions page now has **automatic date management**! Promotions automatically hide at midnight on their end date - no manual updates needed!

## How It Works

### The Magic ✨

1. **Page loads** → JavaScript checks each promotion's dates
2. **Compares to current date** → Determines if active
3. **Active promotions** → Show normally
4. **Expired promotions** → Automatically hidden
5. **All expired** → Shows "No Active Promotions" message
6. **Midnight check** → Updates automatically if page is left open

### Key Features

- ⏰ **Automatic hiding at midnight** on end date
- 🔔 **Countdown badges** appear when 7 days or less remain
- 💬 **Fallback message** when all promotions expire
- 🔄 **No page refresh needed** - works automatically
- 🌙 **Midnight updates** for pages left open overnight

---

## Adding Date-Based Promotions

### Step 1: Add Data Attributes

Add these attributes to any `<section>` you want to auto-hide:

```html
<section class="bg-white section-padding"
         data-promotion-name="Name of Your Promotion"
         data-promotion-start="2024-12-01"
         data-promotion-end="2024-12-15">
    <!-- Your promotion content -->
</section>
```

### Step 2: That's It!

The JavaScript handles everything else automatically!

---

## Data Attribute Reference

### `data-promotion-name` (optional but recommended)
**What:** A friendly name for your promotion  
**Format:** Any text  
**Example:** `"Holiday Gift Card Sale"`  
**Use:** Helps with debugging and console logging

### `data-promotion-start` (optional)
**What:** The date when promotion should START showing  
**Format:** `YYYY-MM-DD` (ISO date format)  
**Example:** `"2024-12-01"`  
**Use:** Hide promotion until start date arrives

### `data-promotion-end` (required for auto-hiding)
**What:** The date when promotion should STOP showing  
**Format:** `YYYY-MM-DD` (ISO date format)  
**Example:** `"2024-12-31"`  
**Use:** Hide promotion at midnight on this date

---

## Examples

### Example 1: Show Only in December
```html
<section class="bg-white section-padding"
         data-promotion-name="December Special"
         data-promotion-start="2024-12-01"
         data-promotion-end="2024-12-31">
    <h2>December Only Promotion</h2>
    <p>This will show Dec 1-31, then auto-hide on Jan 1</p>
</section>
```

### Example 2: Two-Week Campaign
```html
<section class="bg-gray-50 section-padding"
         data-promotion-name="Holiday Fundraiser"
         data-promotion-start="2024-12-01"
         data-promotion-end="2024-12-15">
    <h2>Limited Time: Dec 1-15</h2>
    <p>Will show countdown badge in the last 7 days</p>
</section>
```

### Example 3: Open-Ended (No End Date)
```html
<section class="bg-white section-padding"
         data-promotion-name="Ongoing Special"
         data-promotion-start="2024-12-01">
    <!-- No data-promotion-end means it stays visible forever -->
    <h2>Starts Dec 1, runs indefinitely</h2>
</section>
```

### Example 4: Hide Until Future Date
```html
<section class="bg-white section-padding"
         data-promotion-name="New Year Special"
         data-promotion-start="2025-01-01"
         data-promotion-end="2025-01-31">
    <!-- Hidden until Jan 1, 2025 -->
    <h2>Coming January 1st!</h2>
</section>
```

---

## Current Promotions Setup

### ✅ Gift Card Fundraiser
- **Start:** December 1, 2024
- **End:** December 15, 2024
- **Auto-hide:** December 16 at midnight
- **Countdown badge:** Shows when 7 days or less remain

### ✅ ClixTherapy Sale
- **Start:** December 1, 2024
- **End:** December 31, 2024
- **Auto-hide:** January 1, 2025 at midnight

### ✅ Arnica + Ice Lotion
- **Start:** December 1, 2024
- **End:** December 31, 2024
- **Auto-hide:** January 1, 2025 at midnight

---

## Countdown Badges

**Automatic Feature:** When 7 days or less remain, a countdown badge automatically appears:

```
⏰ 7 days left!
⏰ 3 days left!
⏰ 1 day left!
```

### Badge Appearance
- **Color:** Red to orange gradient
- **Animation:** Gentle pulsing effect
- **Position:** Next to the promotion heading
- **Triggers:** Automatically when ≤ 7 days remain

### Disable Countdown Badge
If you don't want countdown badges for a specific promotion:
```html
<section data-promotion-end="2024-12-31" 
         data-no-countdown="true">
```

---

## Fallback Message

**When:** All promotions have expired  
**What Happens:** Shows "No Active Promotions" message with:
- Gift cards link
- Booking link  
- Contact information

**Location:** `#no-active-promotions-message`

### Customize Fallback Message

Edit this section in `pages/promotions.html`:
```html
<section id="no-active-promotions-message" ...>
    <!-- Edit the content here -->
    <h2>No Active Promotions</h2>
    <p>Check back soon for new special offers!</p>
</section>
```

---

## Testing & Debugging

### Test Promotion Dates

**Option 1: Browser Console**
```javascript
// Check if a date would be active
window.promotionsManager.checkActive(
    new Date('2024-12-10'), 
    '2024-12-01', 
    '2024-12-15'
); // Returns: true

// Manually refresh promotions
window.promotionsManager.refresh();
```

**Option 2: Temporarily Change Dates**
```html
<!-- Test with past date to see auto-hide -->
<section data-promotion-end="2024-01-01">

<!-- Test with future date to see "coming soon" -->
<section data-promotion-start="2025-12-01">
```

### Console Logging

The system logs hidden promotions:
```
Promotion hidden: Gift Card Fundraiser
Promotion hidden: ClixTherapy Sale
```

---

## Common Scenarios

### Scenario 1: Extend a Promotion
**Current end date:** `2024-12-15`  
**Want to extend:** Until December 31

**Solution:** Just update the attribute:
```html
<!-- Change from: -->
data-promotion-end="2024-12-15"

<!-- To: -->
data-promotion-end="2024-12-31"
```

### Scenario 2: Early End
**Promotion ends early** (sold out, changed plans, etc.)

**Solution:** Update to yesterday or today:
```html
data-promotion-end="2024-12-10"
```

### Scenario 3: Re-run Same Promotion
**Want to reuse expired promotion**

**Solution:** Just update the dates:
```html
data-promotion-start="2025-01-01"
data-promotion-end="2025-01-15"
```

### Scenario 4: Permanent Promotion
**Want promotion to show forever**

**Solution:** Remove end date attribute:
```html
<!-- Remove this line entirely: -->
<!-- data-promotion-end="2024-12-31" -->
```

---

## Midnight Update Feature

**What:** Pages left open overnight automatically update at midnight  
**How:** JavaScript schedules a check at 12:00 AM  
**Result:** Expired promotions hide without manual refresh

**Example:** 
- User opens page December 14 at 11:45 PM
- Gift card promotion (ends Dec 15) is visible
- At midnight (Dec 16), promotion auto-hides
- User sees updated page without refreshing

---

## Troubleshooting

### Promotion Not Hiding
1. **Check date format:** Must be `YYYY-MM-DD`
2. **Check timezone:** Uses local browser timezone
3. **Check attribute spelling:** `data-promotion-end` (not "date" or "expire")
4. **View console:** Look for error messages

### Countdown Badge Not Showing
- Badge only shows when **7 days or less** remain
- Requires `data-promotion-end` attribute
- Check if heading/title element exists in section

### All Promotions Hidden Too Early
- Check if dates are in the future
- Verify system date on server/browser
- Use browser console to test: `new Date()`

### Fallback Message Not Showing
- Verify element ID: `id="no-active-promotions-message"`
- Check if at least one promotion has date attributes
- Look for JavaScript errors in console

---

## Best Practices

### ✅ DO:
- Use ISO date format: `YYYY-MM-DD`
- Add descriptive promotion names
- Test dates before going live
- Set end date to midnight of last day
- Keep fallback message updated

### ❌ DON'T:
- Use format like `12/31/2024` (won't work)
- Forget to add `data-promotion-end` for auto-hide
- Set end date to start of last day (will hide too early)
- Remove fallback message element

---

## File Reference

| File | Purpose |
|------|---------|
| `scripts/promotions.js` | Core date logic & auto-hiding |
| `pages/promotions.html` | Promotion content with date attributes |
| `#no-active-promotions-message` | Fallback message element |

---

## Date Format Guide

### ✅ CORRECT Formats:
```
"2024-12-31"     ← Perfect!
"2025-01-15"     ← Perfect!
```

### ❌ WRONG Formats:
```
"12/31/2024"     ← Won't work (US format)
"31-12-2024"     ← Won't work (EU format)
"Dec 31 2024"    ← Won't work (text format)
"2024/12/31"     ← Won't work (slashes)
```

### Date Examples by Month:
```html
January 1:     "2025-01-01"
February 14:   "2025-02-14"
March 31:      "2025-03-31"
April 1:       "2025-04-01"
December 25:   "2024-12-25"
December 31:   "2024-12-31"
```

---

## Quick Reference Card

```html
<!-- BASIC TEMPLATE -->
<section data-promotion-name="My Promotion"
         data-promotion-start="2024-12-01"
         data-promotion-end="2024-12-31">
    <!-- Your content -->
</section>

<!-- START DATE: YYYY-MM-DD -->
<!-- END DATE: YYYY-MM-DD -->
<!-- COUNTDOWN: Auto at 7 days -->
<!-- HIDE: Midnight on end date -->
```

---

## Summary

🎯 **The System Automatically:**
- Hides expired promotions at midnight
- Shows countdown badges (7 days or less)
- Displays fallback when all expired
- Updates pages left open overnight
- Logs actions to browser console

👤 **You Only Need To:**
- Add `data-promotion-end` attributes
- Use `YYYY-MM-DD` date format
- Update dates when promotions change
- Test before going live

---

**System Active:** ✅  
**Auto-Hide:** ✅  
**Countdown Badges:** ✅  
**Midnight Updates:** ✅  
**Fallback Message:** ✅  

**Your promotions page is now fully automated! 🎉**

