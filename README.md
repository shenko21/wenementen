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
