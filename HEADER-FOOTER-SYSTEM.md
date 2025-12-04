# Unified Header & Footer System

## Overview
Your website now uses a **unified header and footer system** where changes to `pages/header.html` and `pages/footer.html` automatically update across all pages.

## How It Works

### 1. **Dynamic Loading via JavaScript**
- The `scripts/headfoot.js` file loads header and footer content dynamically
- Each page has a `<div id="header"></div>` placeholder
- When the page loads, JavaScript fetches and injects the header/footer HTML

### 2. **Single Source of Truth**
- **Header**: `pages/header.html`
- **Footer**: `pages/footer.html`
- Edit these files once, and all pages update automatically!

## Making Changes

### Update Header (Navigation, Promotions, etc.)
1. Edit `pages/header.html`
2. Save the file
3. Refresh any page - changes appear everywhere!

### Update Footer
1. Edit `pages/footer.html`
2. Save the file
3. Refresh any page - changes appear everywhere!

## Adding Promotions

### Quick Promotion Example

To add a promotional banner (like December campaigns), edit `pages/header.html`:

```html
<header>
    <!-- PROMOTION BANNER - Comment out when not needed -->
    <a href="/pages/haven.html#HavenAD" class="promotionLink">
        <div class="promobanner">
            🎄 December Special: 20% Off Haven Sessions!
        </div>
    </a>
    
    <!-- Regular navigation below -->
    <nav class="bg-white">
        ...
    </nav>
</header>
```

### To Hide Promotions
Simply comment out the banner section:
```html
<!-- <a href="/pages/haven.html#HavenAD" class="promotionLink">
    <div class="promobanner">
        🎄 December Special: 20% Off Haven Sessions!
    </div>
</a> -->
```

## Files Updated

### All Pages Now Use Dynamic Headers:
- ✅ index.html
- ✅ pages/about.html
- ✅ pages/contact.html
- ✅ pages/haven.html
- ✅ pages/tmj.html
- ✅ pages/servicesnew.html
- ✅ pages/servicesret.html
- ✅ pages/join-the-team.html
- ✅ pages/faq.html
- ✅ pages/legal.html

### Core System Files:
- 📄 `scripts/headfoot.js` - Loads header/footer dynamically
- 📄 `pages/header.html` - Master header template
- 📄 `pages/footer.html` - Master footer template

## Current Navigation Structure

### Desktop Menu:
- Reserve Session (dropdown)
  - New Clients
  - Returning Clients
- TMJ Therapy
- The Haven
- Gift Cards
- About
- Contact

### Mobile Menu:
- Same structure, optimized for mobile display

## Adding New Pages to Navigation

To add a new page to the menu, edit `pages/header.html`:

```html
<!-- Desktop Nav -->
<div class="desktop-nav">
    ...
    <a href="/pages/new-page.html" class="nav-link">New Page</a>
</div>

<!-- Mobile Nav -->
<div class="mobile-menu-content">
    ...
    <a href="/pages/new-page.html" class="mobile-nav-link">New Page</a>
</div>
```

## Benefits

✅ **Edit Once, Update Everywhere** - Change header.html once, all pages update
✅ **Easy Promotions** - Add/remove promotional banners instantly
✅ **Consistent Navigation** - All pages always have the same menu
✅ **Easy Maintenance** - No need to update 10+ files for menu changes
✅ **Fast Deployment** - Make changes and push to production immediately

## Phone Number Updated

The phone number has been updated to **(780) 238-1340** across:
- All schema markup
- All meta tags
- Header and footer
- Contact page
- Documentation

## Troubleshooting

### Header Not Showing?
1. Check browser console for errors
2. Ensure `scripts/headfoot.js` is loading
3. Verify `pages/header.html` exists and has content

### Menu Not Working?
1. Check that `initializeMobileMenu()` is running in `headfoot.js`
2. Ensure CSS styles for `.mobile-menu` are present in `styles2.css`

### Changes Not Appearing?
1. Hard refresh the page (Ctrl+F5 or Cmd+Shift+R)
2. Clear browser cache
3. Check that you edited `pages/header.html` (not inline headers)

## Next Steps for Promotions

When your December campaign materials arrive:
1. Design the promotional banner HTML
2. Add to `pages/header.html` at the top
3. Style with CSS (use existing `.hiringtab` as reference)
4. Link to promotion page or anchor
5. When campaign ends, comment out the banner

**Pro Tip**: Keep old promotion code commented out for easy reactivation!

