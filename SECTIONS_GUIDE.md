# LUXE 360° Sections Guide (Shopify 2.0)

## Overview

This guide explains how to use the section-based approach for LUXE 360° on Shopify 2.0 themes. Sections allow for drag-and-drop customization without editing code.

---

## 📁 Available Sections

1. **luxe360-hero.liquid** - Hero/landing section
2. **luxe360-packages.liquid** - Pricing packages with blocks
3. **luxe360-contact.liquid** - Contact form with customizable options

---

## 🚀 Installation

### Step 1: Upload CSS & JS Assets

1. Go to **Online Store > Themes > Edit code**
2. In **Assets** folder, create:
   - `luxe360.css` (copy from `shopify/assets/luxe360.css`)
   - `luxe360.js` (copy from `shopify/assets/luxe360.js`)

### Step 2: Create Sections

In the **Sections** folder:

1. **Add a new section** → Create `luxe360-hero`
   - Paste content from `shopify/sections/luxe360-hero.liquid`

2. **Add a new section** → Create `luxe360-packages`
   - Paste content from `shopify/sections/luxe360-packages.liquid`

3. **Add a new section** → Create `luxe360-contact`
   - Paste content from `shopify/sections/luxe360-contact.liquid`

### Step 3: Add Sections to Page

1. Go to **Online Store > Pages**
2. Create or edit a page
3. Click **Customize** (top right)
4. Click **Add section**
5. Find and add:
   - LUXE 360° Hero
   - LUXE 360° Packages
   - LUXE 360° Contact

---

## ⚙️ Customization (No Code Required!)

### Hero Section

In the theme customizer:

- **Subtitle**: "Premium 360° Photo Booth"
- **Main Title**: Use shift+enter for line breaks
- **Tagline**: "Where Elegance Meets Innovation"
- **Button Text**: "Book Your Experience"
- **Button Link**: Link to contact section or page

### Packages Section

**Section Settings:**
- Subtitle, title, and description

**Add Package Blocks:**

Each package can have:
- Package ID (for form integration)
- Name, price, duration
- Features (one per line)
- Optional badge ("Most Popular")
- Featured toggle (gold border)
- Custom button text and link

**To add a package:**
1. Click "Add block" → Package
2. Fill in the settings
3. Drag to reorder

### Contact Section

**Section Settings:**
- Subtitle, title, description
- Submit button text
- Success message

**Package Options (Blocks):**

Add package options for the dropdown:
1. Click "Add block" → Package Option
2. Set label: "Essence - €495"
3. Set value: "essence"

---

## 🎨 Styling Customization

### Colors

Edit `assets/luxe360.css`:

```css
:root {
  --gold: #D4AF37;
  --dark-gold: #B8941F;
  --champagne: #F7E7CE;
  /* etc... */
}
```

### Fonts

To use custom fonts, add to the CSS:

```css
.luxe360-page {
  font-family: 'Your Font', Georgia, serif;
}
```

Then in theme settings, upload custom fonts or use Google Fonts.

---

## 🔄 Section vs Template Approach

| Feature | Sections (2.0) | Template |
|---------|----------------|----------|
| **Editing** | Theme customizer | Code editor |
| **Flexibility** | Drag & drop | Fixed structure |
| **Updates** | User-friendly | Developer needed |
| **Reusability** | Multi-page | Single template |
| **Best For** | Non-technical users | Developers |

**Recommendation**: Use sections for Shopify 2.0 themes, use template for older themes or full control.

---

## 💡 Advanced: Combining Sections

You can mix LUXE 360° sections with your theme's sections:

```
Page Layout:
1. LUXE 360° Hero
2. Your Theme's "Image with Text"
3. LUXE 360° Packages
4. Your Theme's "Testimonials"
5. LUXE 360° Contact
6. Your Theme's "Footer"
```

This allows seamless integration with your existing theme.

---

## 🎯 Creating a Complete Landing Page

### Method 1: Use Page Template

Create `templates/page.json`:

```json
{
  "sections": {
    "hero": {
      "type": "luxe360-hero"
    },
    "packages": {
      "type": "luxe360-packages"
    },
    "contact": {
      "type": "luxe360-contact"
    }
  },
  "order": ["hero", "packages", "contact"]
}
```

### Method 2: Use Theme Customizer

Just add sections as shown in Step 3 above.

---

## 📱 Mobile Customization

Sections automatically responsive. To adjust:

1. In customizer, click mobile preview icon
2. Adjust settings for mobile view
3. CSS handles breakpoints automatically

---

## 🔧 Troubleshooting

### Section Not Appearing

- Make sure CSS/JS files are uploaded
- Check section file naming (must match exactly)
- Clear theme cache

### Styling Issues

- Verify `luxe360.css` is loaded in each section
- Check for theme CSS conflicts
- Add `!important` to critical styles if needed

### Blocks Not Saving

- Check JSON schema syntax
- Ensure all quotes are properly closed
- Save section file before using in customizer

---

## 📚 Additional Resources

- [Shopify Section Documentation](https://shopify.dev/themes/architecture/sections)
- [Liquid Template Language](https://shopify.github.io/liquid/)
- [Theme Customization](https://help.shopify.com/en/manual/online-store/themes/customizing-themes)

---

## ✅ Benefits of Section Approach

1. **Easy Updates** - Change content without touching code
2. **Reusable** - Use on multiple pages
3. **Flexible** - Mix with other sections
4. **Safe** - Can't break site with settings changes
5. **Professional** - Theme editor interface
6. **Version Control** - Changes tracked in theme history

---

**When to use sections:**
- Shopify 2.0 or newer themes
- Non-technical client/user
- Need flexibility to change content often
- Want to reuse sections on multiple pages

**When to use template:**
- Older themes (pre-2.0)
- Fixed layout preferred
- Full custom control needed
- Single-purpose landing page

---

**Version**: 1.0
**Compatible with**: Shopify 2.0+ themes
