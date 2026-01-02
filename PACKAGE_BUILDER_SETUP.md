# Custom Package Builder - Implementatie Handleiding

## Overzicht

De Custom Package Builder is een interactieve pagina waar klanten zelf een 360° photo booth pakket kunnen samenstellen. Het bevat:

- **Basispakket selectie** (1/2/3 uur) met radio buttons
- **Add-ons** met checkboxes en quantity selector voor extra uren
- **Live prijscalculator** die real-time updates toont
- **Minimum prijs validatie** (€250)
- **Offerte aanvraag formulier** (geen directe bestelling)

---

## Bestanden

| Bestand | Locatie | Beschrijving |
|---------|---------|--------------|
| `luxe360-package-builder.liquid` | `shopify/sections/` | Hoofdsectie met HTML, CSS en JavaScript |
| `page.package-builder.liquid` | `shopify/templates/` | Liquid page template |
| `page.package-builder.json` | `shopify/templates/` | JSON page template (Shopify 2.0) |
| `package-builder-demo.html` | `/` (root) | Standalone demo voor testen |

---

## Shopify Implementatie

### Methode 1: Liquid Template (Alle Shopify themes)

1. **Upload sectie bestand**
   - Ga naar Shopify Admin → Online Store → Themes
   - Klik "Actions" → "Edit code"
   - Onder "Sections", klik "Add a new section"
   - Noem het `luxe360-package-builder` en plak de code

2. **Upload template bestand**
   - Onder "Templates", klik "Add a new template"
   - Selecteer "page" en noem het `package-builder`
   - Plak de code uit `page.package-builder.liquid`

3. **Maak een nieuwe pagina**
   - Ga naar Online Store → Pages → Add page
   - Vul de titel in: "Stel Je Pakket Samen"
   - Kies de template: `package-builder`
   - Sla op

### Methode 2: JSON Template (Shopify 2.0+ themes)

1. Upload `luxe360-package-builder.liquid` naar de `sections` folder
2. Upload `page.package-builder.json` naar de `templates` folder
3. Maak een nieuwe pagina en selecteer de template

---

## Formspree Setup (Email Notificaties)

De formuliergegevens worden verstuurd via [Formspree](https://formspree.io/) - een gratis service voor form handling.

### Stappen:

1. **Maak een account** op https://formspree.io/
2. **Maak een nieuw formulier** aan
3. **Kopieer je form ID** (ziet er uit als `xwkgkjkl`)
4. **Update de endpoint** in de sectie settings:

```liquid
{% schema %}
{
  "settings": [
    {
      "type": "text",
      "id": "form_endpoint",
      "label": "Form Endpoint URL",
      "default": "https://formspree.io/f/xeejvbdp"
    }
  ]
}
{% endschema %}
```

Of via de Shopify Theme Editor:
- Ga naar Online Store → Themes → Customize
- Navigeer naar de Package Builder pagina
- Klik op de sectie en vul je Formspree URL in

### Alternatieve Form Handlers

Je kunt ook andere services gebruiken:
- **Netlify Forms** - Gratis met Netlify hosting
- **Google Forms** - Gratis met Google Sheets integratie
- **Shopify Forms App** - Native Shopify integratie
- **Custom Webhook** - Je eigen backend

---

## Prijzen Aanpassen

De prijzen staan direct in de HTML. Om ze aan te passen, bewerk de `data-price` attributen:

### Basispakketten

```html
<!-- In de sectie file -->
<input type="radio" name="base_package" value="1" data-price="150">  <!-- 1 uur -->
<input type="radio" name="base_package" value="2" data-price="225">  <!-- 2 uur -->
<input type="radio" name="base_package" value="3" data-price="300">  <!-- 3 uur -->
```

### Add-ons

```html
<input type="checkbox" name="addon_props" data-price="35">       <!-- Props Box -->
<input type="checkbox" name="addon_overlay" data-price="45">     <!-- Custom Overlay -->
<input type="checkbox" name="addon_social" data-price="40">      <!-- Social Sharing -->
<input type="checkbox" name="addon_usb" data-price="25">         <!-- USB -->
<input type="checkbox" name="addon_carpet" data-price="50">      <!-- Rode Loper -->
<input type="checkbox" name="addon_ringlight" data-price="30">   <!-- Ring Light -->
<input type="checkbox" name="addon_extra_hours" data-price="75"> <!-- Extra uur (per stuk) -->
```

### Minimum Prijs

```javascript
// In de JavaScript sectie
const MINIMUM_PRICE = 250;  // Pas dit aan naar gewenst minimum
```

---

## Aanpassingen voor Shopify Theme Settings

Om prijzen configureerbaar te maken via de Theme Editor, kun je de schema uitbreiden:

```liquid
{% schema %}
{
  "name": "LUXE 360° Package Builder",
  "settings": [
    {
      "type": "header",
      "content": "Basispakket Prijzen"
    },
    {
      "type": "number",
      "id": "price_1_hour",
      "label": "1 Uur Prijs (€)",
      "default": 150
    },
    {
      "type": "number",
      "id": "price_2_hours",
      "label": "2 Uur Prijs (€)",
      "default": 225
    },
    {
      "type": "number",
      "id": "price_3_hours",
      "label": "3 Uur Prijs (€)",
      "default": 300
    },
    {
      "type": "header",
      "content": "Add-on Prijzen"
    },
    {
      "type": "number",
      "id": "price_props",
      "label": "Premium Props Box (€)",
      "default": 35
    }
    // etc.
  ]
}
{% endschema %}
```

En dan in de HTML:
```html
<input type="radio" name="base_package" value="1" data-price="{{ section.settings.price_1_hour }}">
```

---

## Navigatie Link Toevoegen

Om een link naar de Package Builder toe te voegen aan je navigatie:

1. Ga naar Online Store → Navigation
2. Bewerk je hoofdmenu
3. Voeg een nieuw menu-item toe:
   - Naam: "Stel Je Pakket Samen" of "Custom Package"
   - Link: `/pages/stel-je-pakket-samen` (of je pagina handle)

---

## Testen

### Lokaal Testen

1. Open `package-builder-demo.html` in een browser
2. Test alle interacties:
   - Basispakket selectie
   - Add-ons aan/uitzetten
   - Extra uren quantity
   - Minimum prijs validatie
   - Formulier validatie

### Op Shopify

1. Preview je theme
2. Navigeer naar de Package Builder pagina
3. Test dezelfde functionaliteit
4. Test een formulier submit (zorg dat Formspree is geconfigureerd)

---

## Troubleshooting

### Formulier werkt niet

- Controleer of de Formspree URL correct is
- Controleer browser console voor errors
- Zorg dat alle required velden ingevuld zijn

### Prijzen updaten niet

- Controleer of JavaScript correct geladen is
- Check browser console voor errors
- Verifieer dat `data-price` attributen correct zijn

### Styling issues

- Zorg dat `luxe360.css` geladen is
- Check voor CSS conflicts met je theme
- Gebruik browser DevTools om conflicten te identificeren

---

## Email Inhoud

Bij een succesvolle submit ontvangt je inbox een email met:

```
Van: [klant email]
Onderwerp: Nieuwe Offerte Aanvraag - Custom Package

Naam: [naam]
Email: [email]
Telefoon: [telefoon]
Eventdatum: [datum]
Event Type: [type]
Locatie: [locatie]

Package Details:
Basispakket: 3 uur - €300
Premium Props Box - €35
Custom Overlay - €45

Totaal: €380

Opmerkingen:
[klant bericht]
```

---

## Support

Bij vragen of problemen:
- Check de Shopify documentatie voor theme development
- Formspree documentatie: https://help.formspree.io/
- Contact voor custom aanpassingen
