# LUXE 360° - Super Simple Setup (No Errors!)

## ✅ This is the EASY way - One file, no complications!

Forget all the sections and JSON template errors. This is a single liquid file that will work perfectly.

---

## 📁 The File You Need

```
shopify/templates/page.luxe360-simple.liquid
```

This file has **everything** in it:
- All HTML
- All CSS (inline)
- All JavaScript (inline)
- Complete contact form
- All sections included

---

## 🚀 Installation (3 Easy Steps)

### Step 1: Upload to Shopify

1. Go to **Online Store > Themes**
2. Click **Actions > Edit code**
3. Find **Templates** folder
4. **Right-click** on Templates folder
5. Select **"Create new file"** or **"Add a new template"**
6. Name it: `page.luxe360-simple.liquid`
7. Copy the entire contents from `/shopify/templates/page.luxe360-simple.liquid`
8. Paste into Shopify
9. **Save**

### Step 2: Create a Page

1. Go to **Online Store > Pages**
2. Click **Add page**
3. Enter title: "360 Photo Booth" (or whatever you want)
4. On the right sidebar, find **Theme template**
5. Select: `page.luxe360-simple`
6. **Save**

### Step 3: Done!

Click **View page** - Your landing page is live! 🎉

---

## ✨ Features

Everything works out of the box:
- ✅ Responsive design
- ✅ Smooth scrolling navigation
- ✅ Package selection
- ✅ Contact form (Shopify native)
- ✅ WhatsApp floating button
- ✅ Animations on scroll
- ✅ Mobile menu
- ✅ All styling included

---

## 🎨 Customizing Content

Since all the content is in the template file, you'll edit it directly:

### Update Contact Info

Find these lines in the template and change them:

```liquid
<li>📍 Almere, Nederland</li>
<li>📧 hello@luxe360.nl</li>
<li>📱 +31 6 12345678</li>
```

### Update WhatsApp Number

Find this line:

```liquid
<a href="https://wa.me/31612345678" class="whatsapp-float">
```

Change `31612345678` to your WhatsApp number (country code + number, no spaces).

### Update Prices

Find the package prices and change as needed:

```liquid
<div class="package-price">€495</div>
<div class="package-price">€795</div>
<div class="package-price">€1,295</div>
```

### Change Colors

Find the `:root` section in the CSS and modify:

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

---

## 🖼️ Adding Real Gallery Images

Replace the emoji placeholders:

**Find this:**
```liquid
<div class="gallery-item"><div class="gallery-placeholder">💍</div></div>
```

**Replace with:**
```liquid
<div class="gallery-item">
  <img src="{{ 'your-image.jpg' | asset_url }}" alt="Event photo" style="width:100%;height:100%;object-fit:cover;">
</div>
```

Then upload your images to **Assets** folder and reference them.

---

## 💡 Why This Is Better

**No sections = No errors!**

- ✅ No schema validation errors
- ✅ No URL field issues
- ✅ No JSON template problems
- ✅ Works with ALL Shopify themes (Dawn, Debut, Brooklyn, etc.)
- ✅ Everything in one file
- ✅ Easy to find and edit
- ✅ No dependencies

---

## 🔧 Updating the Page

To make changes:

1. Go to **Themes > Edit code > Templates**
2. Click on `page.luxe360-simple.liquid`
3. Make your changes
4. **Save**
5. Refresh your page - changes appear instantly!

---

## 📱 Mobile Responsive

The template is fully responsive:
- Mobile: Single column layout
- Tablet: 2 columns for gallery
- Desktop: Full 3-4 column layouts

---

## 🎯 Contact Form

The form uses Shopify's native contact form:
- Submissions go to your store email
- Appear in Shopify admin notifications
- No external services needed
- Works immediately

---

## 🆘 Troubleshooting

### Page not showing?

Make sure:
- File is named: `page.luxe360-simple.liquid` (with `.liquid` extension)
- File is in **Templates** folder
- You selected the template in the page settings

### Styling looks wrong?

- The CSS is inline in the template
- Make sure you copied the entire file
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Form not working?

- The form is Shopify's native form - it should work automatically
- Check **Settings > Notifications** to see where emails are sent

---

## ✅ Advantages

**Single File Approach:**
1. Everything in one place
2. Easy to backup (just save the file)
3. Easy to version control
4. No missing dependencies
5. Works everywhere
6. Simple to understand
7. Fast to upload

---

## 🎉 You're Done!

This is the simplest, most reliable way to get your LUXE 360° page running on Shopify.

No sections, no JSON, no errors - just one file that works!

---

**Need to make changes?** → Just edit the template file directly
**Want to move to another theme?** → Copy this one file
**Backup your site?** → Save this one file

Simple! 🚀
