# LUXE 360° Setup for Dawn Theme (Shopify 2.0)

## Quick Setup Guide

Since you're using the **Dawn theme** (Shopify 2.0), follow these simplified steps:

---

## Step 1: Upload Assets

1. Go to **Online Store > Themes**
2. Click **Actions > Edit code** on your Dawn theme
3. In the **Assets** folder, click **Add a new asset**
4. Upload these 2 files:
   - `shopify/assets/luxe360.css`
   - `shopify/assets/luxe360.js`

---

## Step 2: Create Sections

In the **Sections** folder, create these 7 new sections:

### Create each section:

1. Click **Add a new section**
2. Name it exactly as shown below
3. Copy & paste the content from the corresponding file

| Section Name | File to Copy From |
|--------------|-------------------|
| `luxe360-navigation` | `shopify/sections/luxe360-navigation.liquid` |
| `luxe360-hero` | `shopify/sections/luxe360-hero.liquid` |
| `luxe360-experience` | `shopify/sections/luxe360-experience.liquid` |
| `luxe360-packages` | `shopify/sections/luxe360-packages.liquid` |
| `luxe360-gallery` | `shopify/sections/luxe360-gallery.liquid` |
| `luxe360-contact` | `shopify/sections/luxe360-contact.liquid` |
| `luxe360-footer` | `shopify/sections/luxe360-footer.liquid` |

---

## Step 3: Create Page Template

1. In **Templates** folder, click **Add a new template**
2. Select **page** from dropdown
3. Choose **json** format (NOT liquid!)
4. Name it: `luxe360`
5. This creates: `page.luxe360.json`
6. Copy the entire content from `shopify/templates/page.luxe360.json`
7. Paste and save

---

## Step 4: Create the Page

1. Go to **Online Store > Pages**
2. Click **Add page**
3. Enter title: "360 Photo Booth" (or whatever you want)
4. On the right sidebar, find **Theme template**
5. Select **page.luxe360** from dropdown
6. Click **Save**

---

## Step 5: View Your Page

Click **View page** - You should see the complete LUXE 360° landing page!

---

## ✅ Checklist

- [ ] Uploaded `luxe360.css` to Assets
- [ ] Uploaded `luxe360.js` to Assets
- [ ] Created 7 sections in Sections folder
- [ ] Created `page.luxe360.json` template
- [ ] Created a new page
- [ ] Assigned `page.luxe360` template to the page
- [ ] Page displays correctly

---

## 🎨 Customizing Content (No Code!)

1. Go to your page in **Pages**
2. Click **Customize** button (top right)
3. You'll see all sections in the left panel
4. Click on any section to edit:
   - Change text, prices, features
   - Upload gallery images
   - Update contact info
   - Modify colors (in CSS variables)

---

## 🔧 Troubleshooting

### "Template not found" error
- Make sure you created a **JSON** template, not a liquid one
- File should be `page.luxe360.json` not `page.luxe360.liquid`

### Sections don't appear in customizer
- Verify all 7 section files are created
- Check that file names match exactly (no typos)
- Make sure they're in the **Sections** folder

### Styling looks broken
- Confirm `luxe360.css` is in Assets folder
- Check that each section file includes this line:
  ```liquid
  {{ 'luxe360.css' | asset_url | stylesheet_tag }}
  ```

### JavaScript not working
- Confirm `luxe360.js` is in Assets folder
- Check footer section includes:
  ```liquid
  {{ 'luxe360.js' | asset_url | script_tag }}
  ```

---

## 📝 Quick Customizations

### Update WhatsApp Number

1. Go to **Customize** on your page
2. Click **LUXE 360° Footer** section
3. Find "WhatsApp Number" field
4. Enter your number: `31612345678` (country code + number, no spaces)

### Change Package Prices

1. In customizer, click **LUXE 360° Packages**
2. Expand each package block
3. Update Price, Duration, Features

### Add Real Gallery Images

1. Click **LUXE 360° Gallery** section
2. Expand each gallery item block
3. Click "Select image" to upload your photos

### Update Contact Info

1. Click **LUXE 360° Footer** section
2. Expand the "Contact" column block
3. Update phone, email, address in the links field

---

## 🚀 Advanced: Make it Your Homepage

If you want this as your store's homepage:

### Option 1: Create Homepage
1. Create a page with handle `home`
2. Go to **Online Store > Preferences**
3. Under "Homepage", select your LUXE 360° page

### Option 2: Customize Existing Home
1. Go to **Online Store > Themes > Customize**
2. Change template to "Home page"
3. Remove existing sections
4. Add all LUXE 360° sections in order

---

## 🎯 Dawn Theme Benefits

With Dawn theme, you get:

✅ **Visual Editing** - Change content without touching code
✅ **Drag & Drop** - Reorder sections easily
✅ **Responsive Preview** - See mobile/desktop views
✅ **Save Presets** - Create variations
✅ **Fast Performance** - Optimized by Shopify

---

## 📱 Testing

Test on:
- [ ] Desktop (Chrome, Safari, Firefox)
- [ ] Mobile (iPhone, Android)
- [ ] Tablet (iPad)
- [ ] Contact form submission
- [ ] WhatsApp button click
- [ ] Package selection highlighting
- [ ] Navigation smooth scroll

---

## 💡 Pro Tips

1. **Use the theme customizer** - Don't edit code files directly for content changes
2. **Upload optimized images** - Keep gallery images under 1MB each
3. **Test contact form** - Make sure it sends to your email
4. **Set up Google Analytics** - Track page visits and form submissions
5. **Mobile first** - Most users will view on mobile

---

## 🆘 Need Help?

If you're still getting errors:

1. **Check file names** - Must match exactly (case-sensitive)
2. **Clear cache** - In your browser and Shopify admin
3. **Check JSON syntax** - Make sure page.luxe360.json is valid JSON
4. **Review error message** - Shopify usually gives specific error details
5. **Start fresh** - Delete template and sections, recreate step by step

---

## 📚 File Structure Summary

```
Dawn Theme/
├── assets/
│   ├── luxe360.css         ← Upload this
│   └── luxe360.js          ← Upload this
│
├── sections/
│   ├── luxe360-navigation.liquid   ← Create this
│   ├── luxe360-hero.liquid         ← Create this
│   ├── luxe360-experience.liquid   ← Create this
│   ├── luxe360-packages.liquid     ← Create this
│   ├── luxe360-gallery.liquid      ← Create this
│   ├── luxe360-contact.liquid      ← Create this
│   └── luxe360-footer.liquid       ← Create this
│
└── templates/
    └── page.luxe360.json    ← Create this (JSON not liquid!)
```

---

**You're all set!** 🎉

Your LUXE 360° landing page should now be live and fully customizable through the Dawn theme customizer.
