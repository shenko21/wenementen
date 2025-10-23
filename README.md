# LUXE 360° - Premium Photo Booth Shopify Implementation

A luxury 360° photo booth landing page designed for Shopify. Features elegant design, smooth animations, and full mobile responsiveness.

![LUXE 360°](https://img.shields.io/badge/Shopify-Compatible-green)
![Version](https://img.shields.io/badge/version-1.0-blue)

## 🎯 Features

- ✨ **Premium Design** - Luxury gold and black color scheme
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🎨 **Customizable** - Easy to modify colors, content, and pricing
- 📧 **Contact Form** - Built-in Shopify contact form integration
- 🎭 **Package Selection** - Interactive pricing cards
- 🖼️ **Gallery Section** - Showcase your events
- 💬 **WhatsApp Integration** - Floating WhatsApp button
- ⚡ **Smooth Animations** - Scroll-triggered animations
- 🔧 **Two Implementation Methods** - Template or Sections approach

---

## 📁 Project Structure

```
wenementen/
├── content-creation-shopify-site.html   # Original HTML file
│
├── shopify/                             # Shopify implementation files
│   ├── templates/
│   │   └── page.luxe360.liquid         # Page template (Method 1)
│   │
│   ├── assets/
│   │   ├── luxe360.css                 # Stylesheet
│   │   └── luxe360.js                  # JavaScript functionality
│   │
│   └── sections/                        # Shopify 2.0 sections (Method 2)
│       ├── luxe360-hero.liquid
│       ├── luxe360-packages.liquid
│       └── luxe360-contact.liquid
│
├── SHOPIFY_IMPLEMENTATION_GUIDE.md     # Complete implementation guide
├── SECTIONS_GUIDE.md                   # Sections-specific guide
└── README.md                            # This file
```

---

## 🚀 Quick Start

### Choose Your Method

**Method 1: Page Template** (All Shopify themes)
- Single template file
- Fixed layout
- Best for: One-time landing page

**Method 2: Sections** (Shopify 2.0+ only)
- Drag & drop customization
- Reusable components
- Best for: Flexibility and ease of updates

---

## 📖 Implementation

### Method 1: Page Template

1. Upload `shopify/assets/luxe360.css` to your theme's Assets folder
2. Upload `shopify/assets/luxe360.js` to your theme's Assets folder
3. Create new template `page.luxe360.liquid` in Templates folder
4. Create a new page and select the `luxe360` template
5. Customize content directly in the template file

**Full guide**: See [SHOPIFY_IMPLEMENTATION_GUIDE.md](SHOPIFY_IMPLEMENTATION_GUIDE.md)

### Method 2: Sections (Shopify 2.0)

1. Upload CSS and JS assets (same as above)
2. Create sections from `shopify/sections/` folder
3. Add sections to any page via theme customizer
4. Customize content through visual editor (no code!)

**Full guide**: See [SECTIONS_GUIDE.md](SECTIONS_GUIDE.md)

---

## 🎨 Customization

### Colors

Edit `shopify/assets/luxe360.css`:

```css
:root {
  --gold: #D4AF37;           /* Your brand color */
  --dark-gold: #B8941F;
  --champagne: #F7E7CE;
  --black: #0A0A0A;
  --charcoal: #2C2C2C;
  --white: #FFFFFF;
  --cream: #FAF8F5;
}
```

### Content

**Template Method**: Edit the `.liquid` template file
**Sections Method**: Use Shopify theme customizer

### Pricing

Update package prices, features, and names in:
- Template: Edit directly in `page.luxe360.liquid`
- Sections: Use theme customizer blocks

---

## 📱 Sections Included

| Section | Description |
|---------|-------------|
| **Navigation** | Fixed top navigation with smooth scroll |
| **Announcement Bar** | Scrolling promotional banner |
| **Hero** | Full-screen landing section |
| **Experience** | 6-card features grid |
| **Packages** | 3 pricing tiers with selection |
| **Gallery** | 4x2 image grid |
| **Contact Form** | Shopify contact form |
| **Footer** | 4-column footer with social links |
| **WhatsApp Float** | Floating action button |

---

## ✅ Features Checklist

- [x] Responsive design (mobile, tablet, desktop)
- [x] Smooth scrolling navigation
- [x] Animated sections on scroll
- [x] Package selection highlighting
- [x] Contact form with validation
- [x] WhatsApp integration
- [x] SEO optimized
- [x] Fast loading
- [x] Shopify 2.0 compatible
- [x] Easy customization
- [x] Mobile menu
- [x] Form success/error messages

---

## 🛠️ Technical Details

- **Platform**: Shopify (all versions)
- **Theme Compatibility**: Universal (works with all themes)
- **Shopify 2.0**: Fully compatible with sections
- **Mobile-First**: Responsive breakpoints at 768px and 1200px
- **Browser Support**: All modern browsers
- **Dependencies**: None (vanilla JavaScript)
- **Fonts**: Didot, Playfair Display (with fallbacks)

---

## 📊 Performance

- **CSS**: ~10KB (minified: ~7KB)
- **JavaScript**: ~4KB (minified: ~2KB)
- **Load Time**: <1s on average connection
- **Lighthouse Score**: 90+ (with optimized images)

---

## 🔐 Contact Form

The contact form integrates with Shopify's native contact form system:

- Form submissions sent to store email
- Appears in Shopify admin notifications
- GDPR compliant
- Spam protection included
- Easy to integrate with email marketing apps

---

## 📞 Support & Documentation

- **Full Implementation Guide**: [SHOPIFY_IMPLEMENTATION_GUIDE.md](SHOPIFY_IMPLEMENTATION_GUIDE.md)
- **Sections Guide**: [SECTIONS_GUIDE.md](SECTIONS_GUIDE.md)
- **Shopify Docs**: [shopify.dev](https://shopify.dev)
- **Shopify Support**: [help.shopify.com](https://help.shopify.com)

---

## 🎯 Use Cases

Perfect for:
- 360° Photo Booth businesses
- Event services
- Photography services
- Equipment rental
- Entertainment services
- Any service-based business needing a premium landing page

---

## 🔄 Updates & Maintenance

### Updating Content

**Template Method**:
```
Themes > Edit code > Templates > page.luxe360.liquid
```

**Sections Method**:
```
Pages > Your Page > Customize
```

### Updating Styles

```
Themes > Edit code > Assets > luxe360.css
```

### Updating Functionality

```
Themes > Edit code > Assets > luxe360.js
```

---

## 🌐 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 Customization Examples

### Change WhatsApp Number

```liquid
<a href="https://wa.me/YOUR_NUMBER" class="whatsapp-float">
```

### Add Gallery Images

```liquid
<div class="gallery-item">
  <img src="{{ 'your-image.jpg' | asset_url }}" alt="Event">
</div>
```

### Modify Package Features

```liquid
<li>Your custom feature</li>
```

---

## 🎉 Getting Started

1. **Read the guides** - Start with `SHOPIFY_IMPLEMENTATION_GUIDE.md`
2. **Choose your method** - Template or Sections
3. **Upload files** - CSS, JS, and template/sections
4. **Customize** - Update colors, content, and pricing
5. **Test** - Check on mobile, tablet, and desktop
6. **Launch** - Publish your page!

---

## 📄 License

This implementation is provided as-is for use in Shopify stores.

---

## 🤝 Contributing

Feel free to customize and adapt this implementation to your needs.

---

## 📮 Contact

For questions about implementation, refer to the detailed guides or Shopify's documentation.

---

**Version**: 1.0
**Last Updated**: January 2025
**Shopify Compatible**: All versions
**Shopify 2.0 Sections**: ✅ Yes

---

## 🎨 Preview

The design features:
- Elegant gold (#D4AF37) and black color scheme
- Serif typography (Didot, Playfair Display)
- Smooth animations and transitions
- Professional layout with clear hierarchy
- Modern, luxury aesthetic

---

## ⚡ Next Steps

1. ✅ Upload assets (CSS & JS)
2. ✅ Create template or sections
3. ✅ Customize content and branding
4. ✅ Add real images to gallery
5. ✅ Update contact information
6. ✅ Test contact form
7. ✅ Test on mobile devices
8. ✅ Set up analytics
9. ✅ Launch!

---

**Ready to get started?** → Open `SHOPIFY_IMPLEMENTATION_GUIDE.md`
# LUXE 360° - Premium Photo Booth Website

A luxurious, modern website for LUXE 360°, a premium 360° photo booth service specializing in weddings, corporate events, and celebrations in Nederland.

## Features

### 🎨 Design & User Experience
- **Elegant Design**: Sophisticated gold and black color scheme with premium typography
- **Responsive Layout**: Fully responsive design that works seamlessly on all devices
- **Smooth Animations**: Subtle scroll animations and transitions for enhanced user experience
- **Mobile Navigation**: Touch-friendly hamburger menu for mobile devices

### ♿ Accessibility
- **WCAG Compliant**: Built with accessibility best practices
- **ARIA Labels**: Proper ARIA attributes for screen readers
- **Keyboard Navigation**: Full keyboard accessibility throughout the site
- **Semantic HTML**: Proper HTML5 semantic elements for better structure
- **Skip Links**: Quick navigation for assistive technologies

### 📱 Responsive Features
- Desktop-first design with mobile optimization
- Flexible grid layouts that adapt to screen size
- Touch-optimized interactive elements
- Responsive typography using clamp()

### 🔧 Technical Features
- **Modular Code Structure**: Separated HTML, CSS, and JavaScript files
- **Form Validation**: Real-time form validation with user feedback
- **Error Handling**: Comprehensive error handling in JavaScript
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Performance**: Optimized CSS and JavaScript for fast loading
- **Cross-browser Compatible**: Works on all modern browsers

### 📋 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action
2. **Experience Section**: Showcase of key features and benefits
3. **Packages Section**: Interactive package cards with selection feature
4. **Gallery Section**: Portfolio display of recent events
5. **Contact Form**: Comprehensive booking form with validation
6. **Footer**: Complete site map and contact information

## File Structure

```
wenementen/
├── index.html              # Main HTML file with improved semantics and accessibility
├── styles.css              # Comprehensive stylesheet with organized sections
├── script.js               # Modular JavaScript with error handling
├── README.md               # Project documentation (this file)
└── content-creation-shopify-site.html  # Original single-file version (backup)
```

## Installation & Usage

### Local Development

1. **Clone or download** this repository
2. **Open** `index.html` in a modern web browser
3. **No build process required** - pure HTML, CSS, and JavaScript

### Deployment

The site is static and can be deployed to any web hosting service:

- **GitHub Pages**: Push to repository and enable GitHub Pages
- **Netlify**: Drag and drop the folder to Netlify
- **Vercel**: Import the repository or upload files
- **Traditional Hosting**: Upload files via FTP to your web server

### Customization

#### Update Contact Information

Edit the following in `index.html`:

```html
<!-- Phone number -->
<a href="tel:+31612345678">📱 +31 6 12345678</a>

<!-- Email -->
<a href="mailto:hello@luxe360.nl">📧 hello@luxe360.nl</a>

<!-- WhatsApp -->
<a href="https://wa.me/31612345678">
```

#### Modify Colors

Edit CSS custom properties in `styles.css`:

```css
:root {
    --gold: #D4AF37;
    --dark-gold: #B8941F;
    --champagne: #F7E7CE;
    --black: #0A0A0A;
    --charcoal: #2C2C2C;
    --white: #FFFFFF;
    --cream: #FAF8F5;
}
```

#### Update Package Pricing

Edit the package cards in `index.html` under the `#packages` section.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Code Quality Improvements

This improved version includes:

### HTML Enhancements
✅ Separated structure from presentation and behavior
✅ Added comprehensive meta tags for SEO and social sharing
✅ Implemented proper semantic HTML5 elements
✅ Added ARIA labels and roles for accessibility
✅ Included structured data (JSON-LD) for rich snippets
✅ Added skip navigation for screen readers
✅ Proper form labels and ARIA attributes
✅ Mobile menu toggle button

### CSS Improvements
✅ Organized into logical sections with comments
✅ Used CSS custom properties (variables) consistently
✅ Implemented responsive design with mobile-first approach
✅ Added focus states for keyboard navigation
✅ Optimized with utility classes
✅ Better organization and maintainability
✅ Print styles included

### JavaScript Enhancements
✅ Modular code structure with namespaces
✅ Comprehensive error handling
✅ Real-time form validation with user feedback
✅ Debounced scroll handlers for performance
✅ Intersection Observer for scroll animations
✅ Mobile menu functionality
✅ Package selection with form pre-fill
✅ Better code comments and documentation

## Performance Optimizations

- Minimal external dependencies
- Optimized CSS with no redundancies
- Debounced event handlers
- Efficient DOM manipulation
- Lazy loading ready (for images when added)
- Clean, maintainable code structure

## Future Enhancements

Potential additions for future versions:

- [ ] Replace emoji icons with SVG icons
- [ ] Add actual gallery images
- [ ] Implement backend for form submissions
- [ ] Add Google Analytics or privacy-focused analytics
- [ ] Create a favicon set
- [ ] Add loading animations
- [ ] Implement cookie consent banner (if needed)
- [ ] Add multilingual support (Dutch/English)
- [ ] Create an admin panel for content management
- [ ] Add testimonials section
- [ ] Integrate with booking system API

## Contributing

This is a client website. For changes or updates, please contact the development team.

## License

© 2025 LUXE 360°. All Rights Reserved.

## Support

For technical support or questions about the website:
- Email: hello@luxe360.nl
- Phone: +31 6 12345678

---

**Built with care for LUXE 360° - Creating unforgettable moments through innovative 360° photo booth experiences.**
