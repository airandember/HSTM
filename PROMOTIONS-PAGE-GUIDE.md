# 🎄 Promotions Page Guide

## What Was Created

A professional, SEO-optimized December promotions page featuring:
- ✅ Gift Card Fundraiser with Connectivity Dance (Dec 1-15)
- ✅ ClixTherapy Packs Sale ($125, save $50)
- ✅ Arnica + Ice Lotion Stocking Stuffer ($30)

## File Location

**Page URL**: `https://www.hstm.ca/pages/promotions.html`
**File Path**: `pages/promotions.html`

## Features Included

### ✅ SEO Optimization
- Comprehensive meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card tags
- Geo tags for local Leduc targeting
- Schema markup for all offers (`OfferCatalog`)
- LocalBusiness schema

### ✅ Content Sections

1. **Hero Section** - Welcoming header with festive design
2. **Gift Card Fundraiser** - Prominent featured section with:
   - Partnership link to [Connectivity Dance](https://www.connectivitydance.com/)
   - 10% donation details
   - $150 bonus offer (20-min Haven coupon)
   - Three purchase locations
   - Important terms and dates

3. **ClixTherapy Section** - Product showcase with:
   - What it is and how it works
   - Perfect use cases
   - Pricing (Regular $175 → Sale $125)
   - Visual step-by-step guide

4. **Arnica + Ice Lotion Section** - Stocking stuffer special:
   - Key ingredients breakdown
   - Benefits and uses
   - Pricing (Regular $35 → Sale $30)

5. **CTA Section** - Call-to-action for gift cards and contact

### ✅ Technical Features
- Dynamic header (uses unified header system)
- Dynamic footer
- Responsive design (mobile, tablet, desktop)
- Accessibility compliant
- Fast loading
- SEO-friendly URLs

## Navigation

The promotions page is now automatically included in:
- ✅ Main desktop navigation (`pages/header.html`)
- ✅ Mobile menu
- ✅ Sitemap (`sitemap.xml`) with high priority (0.9)

## Backlink to Connectivity Dance

The page includes **multiple backlinks** to [Connectivity Dance](https://www.connectivitydance.com/):
- In the main fundraiser heading
- In the "Give Back" card
- In the purchase locations section

This supports their SEO and strengthens the partnership!

---

## 🔥 NEW: Automatic Date-Based Hiding!

Your promotions page now has **automatic date management**! 

### Key Features:
- ✅ **Auto-hide at midnight** on the end date
- ✅ **Countdown badges** show when 7 days or less remain  
- ✅ **No manual updates** needed - it just works!
- ✅ **Fallback message** when all promotions expire

**See:** `PROMOTIONS-DATE-SYSTEM-GUIDE.md` for complete details.

### Current Setup:
- **Gift Card Fundraiser:** Dec 1-15 (auto-hides Dec 16)
- **ClixTherapy Sale:** Dec 1-31 (auto-hides Jan 1)
- **Arnica Lotion:** Dec 1-31 (auto-hides Jan 1)

---

## 📝 How to Update Promotions

### Option 1: Edit Existing Promotions

**To update dates, prices, or details:**

1. Open `pages/promotions.html`
2. Find the section you want to edit
3. Update the HTML content
4. Save the file

**Common edits:**
```html
<!-- Update dates -->
<div class="inline-block bg-hibiscus-600 text-white px-6 py-2 rounded-full font-semibold mb-4">
    December 1–15  <!-- Change these dates -->
</div>

<!-- Update prices -->
<p class="text-3xl font-bold">Sale: $125</p>  <!-- Change price -->
<p class="text-sm opacity-90 line-through">Regular: $175</p>  <!-- Change original price -->

<!-- Update expiry dates -->
<p class="text-sm text-gray-700">
    Haven coupons expire Feb 15, 2026.  <!-- Change date -->
</p>
```

### Option 2: Hide/Show Promotions

**To hide a promotion when it expires:**

Simply wrap the section in HTML comments:

```html
<!-- EXPIRED: Gift Card Fundraiser 2024
<section class="bg-white section-padding">
    ... entire section ...
</section>
-->
```

**To show it again later**, just remove the comment tags.

### Option 3: Update Promotion Dates

**To change when a promotion shows/hides:**

Simply update the date attributes in the `<section>` tag:

```html
<!-- Find the promotion section -->
<section class="bg-white section-padding"
         data-promotion-name="Gift Card Fundraiser"
         data-promotion-start="2024-12-01"
         data-promotion-end="2024-12-15">  <!-- Change these dates! -->
```

**Examples:**
- **Extend promotion:** Change `2024-12-15` to `2024-12-31`
- **End early:** Change to today's date or yesterday
- **Run indefinitely:** Remove the `data-promotion-end` line entirely

**Date format:** Always use `YYYY-MM-DD` format!

### Option 4: Add New Promotions

**To add a new promotion:**

1. Copy an existing section from `pages/promotions.html`
2. Paste it where you want the new promotion
3. Update the content (title, description, pricing, etc.)
4. Update the schema markup at the top of the file:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "itemListElement": [
    {
      "@type": "Offer",
      "name": "Your New Promotion Name",
      "description": "Description here",
      "price": "99",
      "priceCurrency": "CAD",
      "validFrom": "2025-01-01",
      "validThrough": "2025-01-31"
    }
  ]
}
</script>
```

---

## 🎯 Marketing Tips

### Share on Social Media
The page is optimized for social sharing with Open Graph tags. When shared on Facebook/Twitter, it will show:
- Title: "December Promotions | HSTM Leduc Holiday Specials"
- Description: "Support local arts with our gift card fundraiser..."
- Image: Your HSTM logo

### Email Marketing
**Subject line ideas:**
- "🎄 Support Local Arts + Get FREE Haven Time!"
- "December Specials: Gift Cards, ClixTherapy & More"
- "Perfect Holiday Gifts for Wellness Lovers"

**Email content:**
Simply link to: `https://www.hstm.ca/pages/promotions.html`

### In-Clinic Promotion
1. Print QR code linking to the promotions page
2. Place posters at reception
3. Mention during appointments
4. Add to booking confirmation emails

### Partnership Promotion
**For Connectivity Dance event (Dec 15, 6-7:30pm):**
- Bring printed gift card order forms
- Have QR code for online purchases
- Bring promotional materials

---

## 📊 SEO Benefits

### Keywords Targeting:
- "massage gift cards Leduc"
- "holiday massage specials"
- "ClixTherapy Leduc"
- "massage therapy gifts"
- "stocking stuffers wellness"

### Local SEO:
- Geo tags for Leduc, Alberta
- Schema markup with address
- Links to local business (Connectivity Dance)

### Backlinks:
- Link from Connectivity Dance (if they add it) = high-value local backlink
- Social shares = increased domain authority

---

## 🔄 After December Promotions End

### 🎉 Good News: It Happens Automatically!

**On January 1, 2025 at midnight:**
- ClixTherapy and Arnica sections auto-hide
- "No Active Promotions" message appears automatically
- No manual updates needed!

**On December 16, 2024 at midnight:**
- Gift Card Fundraiser section auto-hides
- Other December promotions still show

### Want to Do Something Different?

**Option A: Let it auto-hide (recommended)**
Just let the system do its thing! The fallback message looks professional.

**Option B: Add new promotions**
Add new January promotions before Dec 31 with future dates:
```html
<section data-promotion-name="New Year Special"
         data-promotion-start="2025-01-01"
         data-promotion-end="2025-01-31">
```

**Option C: Archive the entire page**
```html
<!-- Comment out entire main section in pages/promotions.html -->
<!-- Add a "Check Back Soon" message -->

<section class="section-padding bg-white">
    <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl font-serif font-bold text-gray-900 mb-6">
            Promotions
        </h1>
        <p class="text-xl text-gray-600 mb-8">
            Our December promotions have ended. Check back soon for new special offers!
        </p>
        <a href="/pages/giftcards.html" class="btn-primary">
            Shop Gift Cards Anytime
        </a>
    </div>
</section>
```

**Option B: Remove from navigation**
Edit `pages/header.html` and comment out:
```html
<!-- <a href="/pages/promotions.html" class="nav-link">Promotions</a> -->
```

**Option C: Add new promotions**
Replace December content with January/New Year promotions!

---

## 🎁 Gift Card Link

**Important:** Make sure your gift cards page exists or link to your booking system:
- Current link: `/pages/giftcards.html`
- If you don't have this page yet, update all links to point to your booking/purchase system

---

## ✅ Checklist: Going Live

- [x] Page created: `pages/promotions.html`
- [x] Added to navigation (desktop & mobile)
- [x] Added to sitemap
- [x] SEO optimized (meta tags, schema)
- [x] Backlinks to Connectivity Dance included
- [x] Responsive design (mobile-friendly)
- [ ] Test page on all devices
- [ ] Update gift card link if needed
- [ ] Share on social media
- [ ] Email to clients
- [ ] Print materials for in-clinic
- [ ] Coordinate with Connectivity Dance

---

## 📞 Support

**Phone**: (780) 238-1340  
**Email**: admin@hstm.ca  
**Clinic**: #101 4413 48 Street, Leduc, AB

---

**Last Updated**: December 4, 2024  
**Promotions Active**: December 1-31, 2024  
**Fundraiser Period**: December 1-15, 2024

