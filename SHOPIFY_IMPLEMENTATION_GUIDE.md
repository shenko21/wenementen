# LUXE 360° - Shopify Implementation Guide

## Overview

This guide will help you implement the LUXE 360° landing page into your Shopify store. The implementation uses a custom page template approach that's compatible with all Shopify themes.

---

## 📁 File Structure

Your Shopify theme should have the following files:

```
your-theme/
├── templates/
│   └── page.luxe360.liquid          # Main page template
├── assets/
│   ├── luxe360.css                  # Stylesheet
│   └── luxe360.js                   # JavaScript functionality
```

---

## 🚀 Implementation Steps

### Step 1: Access Your Shopify Theme Files

1. Log in to your Shopify admin panel
2. Navigate to **Online Store > Themes**
3. Click the **Actions** dropdown on your active theme
4. Select **Edit code**

### Step 2: Upload the CSS File

1. In the left sidebar, find the **Assets** folder
2. Click **Add a new asset**
3. Select **Create a blank file**
4. Name it `luxe360.css`
5. Copy the contents from `shopify/assets/luxe360.css`
6. Paste into the new file
7. Click **Save**

### Step 3: Upload the JavaScript File

1. Still in the **Assets** folder
2. Click **Add a new asset**
3. Select **Create a blank file**
4. Name it `luxe360.js`
5. Copy the contents from `shopify/assets/luxe360.js`
6. Paste into the new file
7. Click **Save**

### Step 4: Create the Page Template

1. In the left sidebar, find the **Templates** folder
2. Click **Add a new template**
3. Select **page** from the dropdown
4. Name it `luxe360` (this will create `page.luxe360.liquid`)
5. Copy the contents from `shopify/templates/page.luxe360.liquid`
6. Paste into the new template
7. Click **Save**

### Step 5: Create a New Page in Shopify

1. Go to **Online Store > Pages**
2. Click **Add page**
3. Enter the page title (e.g., "360 Photo Booth" or "Home")
4. In the right sidebar, under **Theme template**, select `page.luxe360`
5. Click **Save**

### Step 6: View Your Page

1. Click **View page** to see your new landing page
2. The URL will be `yourstore.com/pages/your-page-title`

---

## ⚙️ Configuration & Customization

### Updating Contact Information

Edit `templates/page.luxe360.liquid` and find the footer section:

```liquid
<li>📍 Almere, Nederland</li>
<li>📧 hello@luxe360.nl</li>
<li>📱 +31 6 12345678</li>
```

Replace with your actual contact details.

### Updating WhatsApp Number

Find this line in the template:

```liquid
<a href="https://wa.me/31612345678" class="whatsapp-float">
```

Replace `31612345678` with your WhatsApp number (country code + number, no spaces or special characters).

### Customizing Colors

Edit `assets/luxe360.css` and modify the CSS variables:

```css
:root {
  --gold: #D4AF37;           /* Primary gold color */
  --dark-gold: #B8941F;      /* Darker gold shade */
  --champagne: #F7E7CE;      /* Light accent color */
  --black: #0A0A0A;          /* Primary dark */
  --charcoal: #2C2C2C;       /* Secondary dark */
  --white: #FFFFFF;          /* White */
  --cream: #FAF8F5;          /* Background cream */
}
```

### Adding Real Gallery Images

Replace the emoji placeholders with actual images:

1. Upload your event photos to **Content > Files** in Shopify admin
2. Copy the file URLs
3. Edit the template and replace:

```liquid
<!-- Before -->
<div class="gallery-item">
  <div class="gallery-placeholder">💍</div>
</div>

<!-- After -->
<div class="gallery-item">
  <img src="https://cdn.shopify.com/your-image.jpg" alt="Event description">
</div>
```

4. Add this CSS to make images look good:

```css
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Customizing Package Prices

Edit the packages section in `templates/page.luxe360.liquid`:

```liquid
<div class="package-price">€495</div>
```

Update prices, durations, and features as needed.

---

## 📧 Contact Form Setup

The contact form uses Shopify's built-in contact form functionality. Form submissions will:

1. Be sent to your store's customer email
2. Appear in **Settings > Notifications > Customer notifications**
3. Show up in your Shopify admin

### Customizing Form Notification Email

1. Go to **Settings > Notifications**
2. Click on **Customer contact**
3. Customize the email template as needed

### Integrating with Email Marketing

You can integrate form submissions with:
- **Klaviyo** - Install the Klaviyo app
- **Mailchimp** - Use Shopify's Mailchimp integration
- **Omnisend** - Install the Omnisend app

---

## 🎨 Using as Homepage

If you want this to be your store's homepage:

### Option 1: Set as Default Homepage (Not Recommended for Stores)

1. Go to **Online Store > Themes**
2. Click **Actions > Edit code**
3. Find `templates/index.liquid`
4. Replace its contents with the contents of `page.luxe360.liquid`

### Option 2: Redirect Homepage to Custom Page

1. Install the **"Easy Redirects"** app or similar
2. Create a redirect from `/` to `/pages/your-luxe360-page`

### Option 3: Modern Theme Sections (Recommended)

For newer themes (2.0+), create sections instead (see Section-Based Approach below).

---

## 📱 Mobile Optimization

The design is fully responsive. Key breakpoints:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1200px
- **Mobile**: Below 768px

Test on different devices using Shopify's preview feature.

---

## 🔧 Troubleshooting

### Styles Not Loading

1. Make sure `luxe360.css` is in the **assets** folder
2. Check that this line is in your template:
   ```liquid
   {{ 'luxe360.css' | asset_url | stylesheet_tag }}
   ```
3. Clear your browser cache

### JavaScript Not Working

1. Verify `luxe360.js` is in the **assets** folder
2. Check that this line is at the end of your template:
   ```liquid
   {{ 'luxe360.js' | asset_url | script_tag }}
   ```
3. Check browser console for errors (F12)

### Form Not Submitting

1. Ensure you're using `{% form 'contact' %}` tag
2. Check that all required fields have proper names (e.g., `name="contact[email]"`)
3. Verify the form is wrapped in the Liquid form tags

### Navigation Not Sticking

Some themes have CSS that overrides fixed positioning. Add this to your CSS:

```css
.luxe360-nav {
  position: fixed !important;
  z-index: 9999 !important;
}
```

---

## 🎯 SEO Optimization

### Page Settings

1. Edit your page in **Pages**
2. Click **Edit website SEO**
3. Add:
   - **Page title**: "Premium 360° Photo Booth Rental | LUXE 360°"
   - **Meta description**: "Elevate your event with LUXE 360°'s premium photo booth experiences. Professional-grade 360° video recording for weddings, corporate events, and celebrations."
   - **URL handle**: `/pages/360-photo-booth`

### Adding Schema Markup

Add this to the bottom of your template for rich snippets:

```liquid
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "LUXE 360° Photo Booth",
  "provider": {
    "@type": "LocalBusiness",
    "name": "LUXE 360°",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Almere",
      "addressCountry": "NL"
    },
    "telephone": "+31612345678"
  },
  "areaServed": "Netherlands",
  "description": "Premium 360° photo booth rental service"
}
</script>
```

---

## 🚦 Performance Optimization

### Image Optimization

1. Upload gallery images at maximum 1500px width
2. Use WebP format when possible
3. Compress images with TinyPNG before uploading

### Loading Speed

1. The CSS and JS files are already optimized
2. Consider using Shopify's image CDN for gallery images
3. Enable lazy loading for images:

```liquid
<img loading="lazy" src="..." alt="...">
```

---

## 🔐 Security Notes

### WhatsApp Link

The WhatsApp link is safe and standard. Users click it to open WhatsApp with your number pre-filled.

### Form Spam Protection

Shopify's contact form has built-in spam protection. For additional security:

1. Install Google reCAPTCHA app
2. Or use Shopify's built-in honeypot fields

---

## 📊 Analytics Integration

### Google Analytics

Add your GA4 code in **Settings > Apps and sales channels**

### Facebook Pixel

1. Install Facebook & Instagram app
2. Connect your Facebook Business account
3. Track form submissions with events

### Track Form Submissions

Add to `luxe360.js` after successful form submit:

```javascript
if (typeof gtag !== 'undefined') {
  gtag('event', 'form_submission', {
    'event_category': 'Contact',
    'event_label': 'LUXE360 Inquiry'
  });
}
```

---

## 🎨 Alternative: Section-Based Approach (Shopify 2.0)

For modern Shopify themes, you can create reusable sections. See the section files in the `shopify/sections/` folder.

Benefits:
- Drag-and-drop customization
- Reusable across pages
- Theme editor friendly
- No code editing needed for content updates

---

## 💡 Advanced Customization

### Adding Product Integration

If you want to sell packages as products:

1. Create products in Shopify for each package
2. Replace package buttons with "Add to Cart" buttons:

```liquid
{% assign essence_product = all_products['360-booth-essence'] %}
<form action="/cart/add" method="post">
  <input type="hidden" name="id" value="{{ essence_product.variants.first.id }}">
  <button type="submit" class="package-btn">Book Now - €495</button>
</form>
```

### Dynamic Content from Metafields

Use metafields for editable content without code changes:

```liquid
{{ page.metafields.custom.announcement_text | default: "Default announcement" }}
```

---

## 📞 Support Resources

### Shopify Documentation
- [Theme Development](https://shopify.dev/themes)
- [Liquid Reference](https://shopify.dev/api/liquid)
- [Contact Forms](https://shopify.dev/api/liquid/objects/form)

### Testing Checklist

- [ ] Page loads correctly
- [ ] Navigation links work
- [ ] Smooth scrolling functions
- [ ] Package selection highlights
- [ ] Contact form submits
- [ ] Mobile menu works
- [ ] WhatsApp button links correctly
- [ ] All sections display properly
- [ ] Responsive on mobile, tablet, desktop
- [ ] Form validation works

---

## 🎉 Launch Checklist

Before going live:

1. **Content**
   - [ ] Replace placeholder text with real content
   - [ ] Update contact information
   - [ ] Add real gallery images
   - [ ] Verify pricing is correct
   - [ ] Update WhatsApp number

2. **SEO**
   - [ ] Set page title and meta description
   - [ ] Add schema markup
   - [ ] Submit sitemap to Google

3. **Testing**
   - [ ] Test contact form
   - [ ] Check mobile responsiveness
   - [ ] Test on multiple browsers
   - [ ] Verify all links work

4. **Analytics**
   - [ ] Install Google Analytics
   - [ ] Set up conversion tracking
   - [ ] Add Facebook Pixel if needed

5. **Legal**
   - [ ] Add privacy policy link
   - [ ] Add terms and conditions
   - [ ] Ensure GDPR compliance if needed

---

## 🔄 Updates & Maintenance

To update the page in the future:

1. **Content Changes**: Edit the page template directly
2. **Style Changes**: Modify `luxe360.css`
3. **Functionality Changes**: Update `luxe360.js`
4. **Always backup** before making changes

---

## Need Help?

- Shopify Support: https://help.shopify.com
- Shopify Community: https://community.shopify.com
- Hire a Shopify Expert: https://experts.shopify.com

---

**Version**: 1.0
**Last Updated**: 2025
**Compatible with**: All Shopify themes
