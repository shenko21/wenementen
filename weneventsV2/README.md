# 🎬 LUXE 360° V2 - Premium Photo Booth Website

**Enhanced Version 2.0** - A complete redesign with modern features and improved user experience!

---

## ✨ What's New in V2

### Major Improvements:
- 🎨 **Modern Design** - Cleaner, more professional look
- 📱 **Better Mobile Experience** - Enhanced responsive design with smooth mobile menu
- ⚡ **Loading Animation** - Professional page loader with brand animation
- 💬 **Testimonials Section** - Show off your 5-star reviews
- ❓ **FAQ Accordion** - Interactive Q&A section
- 📊 **Stats Section** - Display impressive numbers (500+ events, 50K+ videos)
- 🔝 **Scroll to Top** - Convenient back-to-top button
- 🎯 **Better Animations** - Smooth scroll-triggered animations
- 🎨 **Google Fonts** - Professional Playfair Display + Inter combo
- 📝 **Enhanced Form** - Better styling and validation
- 🎭 **Better Package Cards** - More interactive pricing cards
- 🌟 **Social Proof Elements** - Build trust with visitors
- 🚀 **Performance** - Faster loading and smoother interactions

---

## 📦 Installation

### Option 1: Import Complete Theme (EASIEST!)

1. Download `luxe360-v2-theme.zip`
2. Go to Shopify: **Online Store > Themes**
3. Click **Upload theme**
4. Select the ZIP file
5. Wait for installation
6. Create a page with template **luxe360-v2**
7. Done! 🎉

### Option 2: Manual Template Upload

1. Go to **Themes > Edit code**
2. Click **Templates > Add a new template**
3. Name it `page.luxe360-v2.liquid`
4. Copy contents from `theme/templates/page.luxe360-v2.liquid`
5. Paste and save
6. Create a page and select the template

---

## 🎨 Features Breakdown

### 1. Hero Section
- Animated gradient text
- Call-to-action buttons (Book Now + View Packages)
- Stats counter (500+ Events, 50K+ Videos, 100% Satisfaction)
- Floating particle background
- Smooth entrance animations

### 2. Experience/Features Section
- 6 feature cards with icons
- Hover effects with gold accent
- Scroll-triggered animations
- Clean, modern layout

### 3. Pricing/Packages Section
- 3 pricing tiers (Essence, Prestige, Opulence)
- "Most Popular" badge on featured package
- Interactive card selection
- Hover effects and scaling
- Auto-scrolls to contact form when package selected

### 4. Gallery Section
- 8-item grid layout
- Hover zoom effects
- Gold overlay on hover
- Easy to replace with real images

### 5. Testimonials Section
- Star ratings
- Client names and event types
- Clean card design
- Ready for slider (can add multiple testimonials)

### 6. FAQ Section
- Interactive accordion
- Smooth expand/collapse
- 5 pre-written common questions
- Easy to add more

### 7. Contact Form
- 2-column grid layout
- All necessary fields
- Shopify form integration
- Success/error messages
- Form validation
- Package auto-selection from pricing cards

### 8. Navigation
- Sticky header
- Auto-hides on scroll down, shows on scroll up
- Smooth transitions
- Mobile hamburger menu
- Gold CTA button

### 9. Footer
- 4-column layout
- Social media icons
- Contact information
- Quick links
- Copyright info

### 10. Floating Elements
- WhatsApp button with pulse animation
- Scroll-to-top button (appears after scrolling)
- Professional hover effects

---

## 🛠️ Customization Guide

### Change Colors

Find this section in the code:

```css
:root {
  --gold: #D4AF37;           /* Primary brand color */
  --dark-gold: #B8941F;      /* Darker shade */
  --light-gold: #F0E5C9;     /* Lighter shade */
  --black: #0A0A0A;          /* Background dark */
  --charcoal: #2C2C2C;       /* Secondary dark */
  --cream: #FAF8F5;          /* Background light */
}
```

### Update Contact Info

Search for these and replace:

```liquid
📍 Almere, Nederland
📧 hello@luxe360.nl
📱 +31 6 12345678
```

### Update WhatsApp Number

Find and change:

```liquid
<a href="https://wa.me/31612345678?text=...">
```

Format: `31612345678` (country code + number, no spaces)

### Update Pricing

Find the pricing cards and modify:

```liquid
<div class="pricing-price">€495</div>
<div class="pricing-price">€795</div>
<div class="pricing-price">€1,295</div>
```

### Update Stats

Find the hero stats section:

```liquid
<div class="stat-number">500+</div>
<div class="stat-number">50K+</div>
<div class="stat-number">100%</div>
```

### Add Gallery Images

Replace placeholder emojis:

```liquid
<!-- Before -->
<div class="gallery-placeholder">💍</div>

<!-- After -->
<img src="{{ 'wedding-event.jpg' | asset_url }}" alt="Wedding Event">
```

Upload images to Assets folder first!

### Add More Testimonials

Duplicate the testimonial card and change content:

```liquid
<div class="testimonial-card">
  <div class="testimonial-stars">★★★★★</div>
  <p class="testimonial-text">"Your review here..."</p>
  <div class="testimonial-author">
    <div class="testimonial-avatar">J</div>
    <div class="testimonial-info">
      <h4>John Doe</h4>
      <p>Corporate Event, Rotterdam</p>
    </div>
  </div>
</div>
```

### Add More FAQ Items

Duplicate an FAQ item:

```liquid
<div class="faq-item">
  <div class="faq-question">
    <span>Your question here?</span>
    <span class="faq-icon">▼</span>
  </div>
  <div class="faq-answer">
    <p>Your answer here.</p>
  </div>
</div>
```

---

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1200px
- **Mobile**: Below 768px

The site automatically adapts to all screen sizes!

---

## ⚡ Performance Tips

### 1. Optimize Images
- Max width: 1500px
- Use WebP format
- Compress with TinyPNG
- Lazy loading is built-in

### 2. Remove Unused Sections
If you don't need testimonials or FAQ:
- Simply delete those sections from the code
- Page will load faster

### 3. Minimize Custom Changes
- The code is already optimized
- Adding too much custom code can slow it down

---

## 🎯 SEO Optimization

### Page Settings

When creating your page:

1. **Title**: "360° Photo Booth Rental | LUXE 360° - Premium Events"
2. **Meta Description**: "Book LUXE 360°'s premium photo booth for your wedding, corporate event, or party. Professional 360° video experiences with instant sharing. Serving Amsterdam & beyond."
3. **URL Handle**: `360-photo-booth`

### Image Alt Tags

Add descriptive alt text to gallery images:

```liquid
<img src="..." alt="Luxury 360 photo booth at elegant wedding reception">
```

---

## 🔧 Troubleshooting

### Issue: Loading animation stuck

**Solution**: Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

### Issue: Mobile menu not working

**Solution**: Make sure JavaScript at bottom of file is intact

### Issue: Form not submitting

**Solution**:
1. Check form is wrapped in `{% form 'contact' %}`
2. Verify all required fields have proper names
3. Check Settings > Notifications > Customer contact

### Issue: Animations not smooth

**Solution**:
1. Disable browser extensions
2. Test in different browser
3. Check if hardware acceleration is enabled

### Issue: WhatsApp button not working

**Solution**: Verify number format: `31612345678` (no spaces, no +)

---

## 📊 Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari (iOS 13+)
- ✅ Chrome Mobile (Android 8+)

---

## 🚀 Going Live Checklist

Before publishing:

- [ ] Replace all placeholder content
- [ ] Update contact information
- [ ] Update WhatsApp number
- [ ] Update pricing
- [ ] Add real gallery images
- [ ] Test contact form
- [ ] Test on mobile device
- [ ] Test on tablet
- [ ] Test all links
- [ ] Check spelling
- [ ] Add real testimonials
- [ ] Review FAQ answers
- [ ] Set page SEO
- [ ] Test WhatsApp link
- [ ] Check social media links
- [ ] Test package selection
- [ ] Verify form submissions arrive

---

## 🆚 V2 vs V1 Comparison

| Feature | V1 | V2 |
|---------|----|----|
| Loading Animation | ❌ | ✅ |
| Testimonials | ❌ | ✅ |
| FAQ Section | ❌ | ✅ |
| Stats Counter | ❌ | ✅ |
| Scroll to Top | ❌ | ✅ |
| Mobile Menu | Basic | Enhanced |
| Animations | Basic | Advanced |
| Typography | System | Google Fonts |
| Form Design | Basic | Enhanced |
| Package Cards | Static | Interactive |
| Code Quality | Good | Excellent |
| Performance | Good | Better |
| Mobile UX | Good | Excellent |

---

## 💡 Pro Tips

### Tip 1: Use as Homepage

Make this your store homepage:
1. Go to **Settings > Online Store > Preferences**
2. Under "Homepage", select your LUXE 360° page
3. Save

### Tip 2: A/B Testing

Keep V1 and V2:
- Page 1: V1 template
- Page 2: V2 template
- Compare conversion rates!

### Tip 3: Custom Domain

For professional look:
- Instead of: `yourstore.myshopify.com/pages/360-booth`
- Use: `yourstore.com` or `360booth.com`
- Setup in Settings > Domains

### Tip 4: Email Marketing

Integrate form with:
- Klaviyo
- Mailchimp
- Omnisend

### Tip 5: Analytics

Track performance:
- Add Google Analytics
- Add Facebook Pixel
- Track form submissions
- Monitor scroll depth

---

## 📧 Form Notification Setup

Make sure you receive inquiries:

1. Go to **Settings > Notifications**
2. Click **Customer contact**
3. Ensure **Email notification** is checked
4. Add your email address
5. Test the form!

---

## 🎨 Design Philosophy

V2 follows these principles:

1. **Luxury First** - Premium feel throughout
2. **User-Centric** - Easy navigation and clear CTAs
3. **Performance** - Fast loading, smooth animations
4. **Conversion-Focused** - Every element drives bookings
5. **Mobile-First** - Perfect on all devices
6. **Trust-Building** - Social proof and testimonials
7. **Clarity** - Clear pricing and services

---

## 🔄 Updates & Maintenance

### Updating Content

All content is in one file: `page.luxe360-v2.liquid`

To update:
1. Go to **Themes > Edit code**
2. Click **Templates > page.luxe360-v2.liquid**
3. Make changes
4. Save

### Backup

Before making changes:
1. Copy entire template code
2. Save to local file
3. Or use version control

### Future Updates

Watch for:
- V2.1 with more features
- Additional templates
- More customization options

---

## 📚 Additional Resources

- [Shopify Liquid Docs](https://shopify.dev/api/liquid)
- [Shopify Theme Development](https://shopify.dev/themes)
- [CSS Animation Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Responsive Design](https://web.dev/responsive-web-design-basics/)

---

## 🎉 You're All Set!

Your LUXE 360° V2 website is ready to generate bookings!

**Questions?** Check the troubleshooting section or reach out for support.

**Happy booking!** 🚀📸✨

---

**Version**: 2.0.0
**Last Updated**: January 2025
**Compatibility**: All Shopify themes
**License**: Use freely for your photo booth business

---

## 🙏 Credits

- Design: LUXE 360° Team
- Typography: Google Fonts (Playfair Display + Inter)
- Icons: Unicode Emoji
- Framework: Vanilla HTML/CSS/JS (no dependencies!)

---

**Made with ❤️ for photo booth entrepreneurs**
