# SEO Implementation Guide for HSTM
## Hibiscus Springs Therapeutic Massage - Leduc, Alberta

---

## ✅ **COMPLETED TASKS**

### 1. **robots.txt** ✓
- Created `/robots.txt` with proper crawl directives
- Added sitemap location
- Disallowed temporary/admin pages

### 2. **sitemap.xml** ✓
- Created `/sitemap.xml` with all main pages
- Properly prioritized pages by importance
- Set appropriate change frequencies

### 3. **Schema Markup Template** ✓
- Created `/schema-markup-template.html` with complete examples
- Includes LocalBusiness/MedicalBusiness schema
- Service schema for all offerings
- JobPosting schema for careers page
- FAQ schema
- Article schema for blog posts

### 4. **Updated index.html** ✓
- Added complete meta tags (Open Graph, Twitter, Geo)
- Implemented LocalBusiness schema
- Updated title for local SEO
- Added canonical URL
- Included keywords meta tag

### 5. **FAQ Page** ✓
- Created `/pages/faq.html`
- Implemented FAQ schema markup
- Covered all major question categories
- Mobile-responsive design
- Internal links to services

### 6. **Blog Article Template** ✓
- Created `/blog/understanding-tmj-disorder.html`
- Complete article schema markup
- SEO-optimized structure
- Breadcrumb navigation
- Author bio section
- Related articles section

---

## 📋 **NEXT STEPS - TODO LIST**

### **Immediate Priority (This Week):**

1. **Apply Meta Tags to All Remaining Pages**
   - [ ] pages/tmj.html
   - [ ] pages/haven.html
   - [ ] pages/about.html
   - [ ] pages/contact.html
   - [ ] pages/servicesnew.html
   - [ ] pages/servicesret.html
   - [ ] pages/join-the-team.html
   - [ ] pages/legal.html

   **Template to use:**
   ```html
   <!-- Primary Meta Tags -->
   <title>[Page-Specific Title with Location]</title>
   <meta name="title" content="[Same as title]">
   <meta name="description" content="[150-160 char description with location]">
   <meta name="keywords" content="[relevant keywords, location-based]">
   <link rel="canonical" href="https://www.hstm.ca/pages/[pagename].html">
   
   <!-- Open Graph / Facebook -->
   <meta property="og:type" content="website">
   <meta property="og:url" content="https://www.hstm.ca/pages/[pagename].html">
   <meta property="og:title" content="[Page Title]">
   <meta property="og:description" content="[Page Description]">
   <meta property="og:image" content="https://www.hstm.ca/assets/images/HSTM_LF_PORTRAIT.webp">
   
   <!-- Twitter -->
   <meta property="twitter:card" content="summary_large_image">
   <meta property="twitter:url" content="https://www.hstm.ca/pages/[pagename].html">
   <meta property="twitter:title" content="[Page Title]">
   <meta property="twitter:description" content="[Page Description]">
   <meta property="twitter:image" content="https://www.hstm.ca/assets/images/HSTM_LF_PORTRAIT.webp">
   ```

2. **Add Schema Markup to All Pages**
   - Use the templates from `/schema-markup-template.html`
   - Add LocalBusiness schema to every page
   - Add page-specific schemas:
     - TMJ page: MedicalProcedure schema
     - Services pages: Service schema
     - About page: Person schema
     - Job posting page: JobPosting schema

3. **Optimize Image Alt Text**
   - Review all images
   - Add descriptive alt text including location where appropriate
   - Example: `alt="Massage therapy room at Hibiscus Springs in Leduc Alberta"`

4. **Submit to Google Search Console**
   - Verify ownership of hstm.ca
   - Submit sitemap.xml
   - Monitor for crawl errors

5. **Submit to Bing Webmaster Tools**
   - Verify ownership
   - Submit sitemap.xml

### **This Month:**

6. **Google Business Profile Optimization**
   - [ ] Claim/verify listing
   - [ ] Upload professional photos (exterior, interior, team, treatments)
   - [ ] Add complete business information
   - [ ] Set business hours
   - [ ] Select proper categories:
     - Primary: "Massage Therapist"
     - Secondary: "Physical Therapy Clinic", "Wellness Center"
   - [ ] Add services with descriptions
   - [ ] Create first post about services
   - [ ] Set up Q&A section
   - [ ] Enable booking (if available)

7. **Local Directory Submissions**
   - [ ] YellowPages.ca
   - [ ] 411.ca
   - [ ] Yelp Canada
   - [ ] RateMDs
   - [ ] HealthChoicesFirst
   - [ ] College of Massage Therapists of Alberta directory
   - [ ] Leduc Chamber of Commerce (if member)

8. **Start Review Collection**
   - [ ] Set up review request system
   - [ ] Ask satisfied clients for Google reviews
   - [ ] Respond to all reviews (positive and negative)
   - [ ] Add review snippets to website (with permission)

9. **Create Additional Blog Content**
   - [ ] "How to Prepare for Your First Massage"
   - [ ] "5 Benefits of Regular Massage Therapy"
   - [ ] "Deep Tissue vs Swedish Massage: Which is Right for You?"
   - [ ] "What to Expect at The Haven Wellness Sanctuary"
   - [ ] "TMJ Self-Care: Exercises and Tips for Home"
   - Use the template in `/blog/understanding-tmj-disorder.html`

10. **Add Breadcrumb Navigation**
    - Implement on all pages
    - Improves UX and SEO
    - Example HTML:
    ```html
    <nav class="text-sm mb-8">
        <ol class="flex items-center space-x-2 text-gray-600">
            <li><a href="/" class="hover:text-hibiscus-600">Home</a></li>
            <li><span class="mx-2">/</span></li>
            <li class="text-gray-900">[Current Page]</li>
        </ol>
    </nav>
    ```

### **Next Quarter:**

11. **Build Local Backlinks**
    - Partner with local businesses
    - Get listed on:
      - Leduc city websites/business directories
      - Local health and wellness blogs
      - Edmonton area wellness directories
    - Collaborate with chiropractors/physiotherapists
    - Local newspaper/blog features

12. **Create Service Area Pages**
    - Create pages targeting nearby cities:
      - "Massage Therapy Edmonton South"
      - "Beaumont Massage Services"  
      - "TMJ Therapy Nisku"
    - Include unique content for each location
    - Add to sitemap

13. **Implement Review Schema**
    - Add review/rating schema to homepage
    - Display aggregate ratings
    - Link to Google Business Profile

14. **Video Content**
    - Create short educational videos:
      - Tour of The Haven
      - TMJ self-care tips
      - Meet the therapist(s)
    - Upload to YouTube
    - Embed on website
    - Optimize video titles/descriptions for SEO

---

## 📊 **RECOMMENDED TITLE TAGS BY PAGE**

| Page | Current Title | Recommended Title |
|------|--------------|-------------------|
| Homepage | ✓ Updated | Massage Therapy Leduc AB \| TMJ Specialist \| Hibiscus Springs |
| TMJ | TMJ Therapy \| HSTM | TMJ Therapy Leduc Alberta \| Jaw Pain Relief \| HSTM |
| Haven | The Haven \| HSTM | The Haven Wellness Room Leduc \| Infrared Sauna \| Massage Chair |
| Services (New) | Services \| HSTM | Massage Services Leduc \| New Clients \| Hibiscus Springs RMT |
| Services (Ret) | Services \| HSTM | Returning Clients \| Massage Therapy Leduc \| Book Appointment |
| About | About \| HSTM | About Our RMT Team Leduc \| Massage Therapy Specialists |
| Contact | Contact Us \| HSTM | Contact HSTM Leduc \| Massage Therapy Appointments \| 780-238-1340 |
| FAQ | N/A | FAQ - Massage Therapy Questions \| Hibiscus Springs Leduc |
| Careers | Join Our Team | Massage Therapist Jobs Leduc \| RMT Careers \| Hibiscus Springs |

---

## 🎯 **PRIMARY KEYWORDS TO TARGET**

### **High Priority:**
- massage therapy Leduc
- TMJ therapy Leduc
- registered massage therapist Leduc
- therapeutic massage Leduc Alberta
- RMT Leduc

### **Secondary:**
- deep tissue massage Leduc
- Swedish massage Leduc
- massage near me (local search)
- TMJ specialist Leduc
- jaw pain treatment Leduc
- massage therapy Edmonton south

### **Long-Tail:**
- best massage therapist in Leduc
- TMJ therapy near me
- where to get TMJ massage in Leduc
- registered massage therapist accepting new clients Leduc
- massage therapy for jaw pain Leduc

---

## 🔍 **MONITORING & TRACKING**

### **Set Up:**
1. **Google Analytics 4**
   - Track traffic sources
   - Monitor conversion goals (appointment requests)
   - Set up event tracking

2. **Google Search Console**
   - Monitor search impressions
   - Track click-through rates
   - Identify ranking keywords
   - Fix crawl errors

3. **Bing Webmaster Tools**
   - Similar monitoring for Bing

### **Monthly Checks:**
- Organic traffic trends
- Keyword rankings for target terms
- Google Business Profile insights
- Backlink profile
- Page speed scores
- Mobile usability

### **Quarterly Reviews:**
- Full SEO audit
- Competitor analysis
- Content performance
- Technical SEO health check

---

## 📈 **SUCCESS METRICS**

Track these KPIs monthly:

| Metric | Current Baseline | 3-Month Goal | 6-Month Goal |
|--------|-----------------|--------------|--------------|
| Organic Traffic | [Establish] | +30% | +50% |
| Google Business Views | [Establish] | +40% | +75% |
| Phone Calls from GMB | [Establish] | +50% | +100% |
| Local Pack Ranking | [Check] | Top 3 | Top 3 |
| "massage therapy Leduc" rank | [Check] | Page 1 | Top 5 |
| "TMJ therapy Leduc" rank | [Check] | Page 1 | Top 3 |

---

## 🚀 **QUICK WINS (Do First)**

1. ✅ Create robots.txt and sitemap.xml
2. ✅ Add schema markup to homepage
3. ✅ Create FAQ page with schema
4. ✅ Update homepage meta tags
5. Update remaining page titles
6. Claim Google Business Profile
7. Submit sitemap to Search Console
8. Add schema to all pages
9. Start collecting reviews
10. Create first 3 blog posts

---

## 📞 **SUPPORT RESOURCES**

- **Schema Markup Testing:** https://validator.schema.org/
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **Google Search Console:** https://search.google.com/search-console
- **Bing Webmaster Tools:** https://www.bing.com/webmasters

---

## 📝 **NOTES**

- All new meta tags have been tested and formatted correctly
- Schema markup follows Schema.org standards
- Blog templates are ready to use - just replace content
- FAQ page is fully functional and includes common questions
- Remember to update dates in sitemap.xml when pages change
- Keep business hours in schema markup updated
- Monitor Google Business Profile for customer questions

---

*Last Updated: January 17, 2025*  
*Implementation by: Cursor AI Assistant*  
*For: Hibiscus Springs Therapeutic Massage (HSTM)*

