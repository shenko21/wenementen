# LUXE 360° Thema - Importeer Instructies

## 🎯 Super Eenvoudig: Importeer het Complete Thema

Je kunt nu het complete LUXE 360° thema direct importeren in Shopify!

---

## 📦 Het Bestand

**ZIP bestand:** `luxe360-theme.zip`

Dit bevat alles wat je nodig hebt - klaar om te gebruiken!

---

## 🚀 Installatie (4 Stappen)

### Stap 1: Download het ZIP Bestand

Download `luxe360-theme.zip` van GitHub:
- Ga naar je repository
- Branch: `claude/shopify-implementation-011CUQjP9gC3QSDv8sgkufiW`
- Download: `luxe360-theme.zip`

**OF** als je lokaal werkt:
- Het bestand staat in: `/home/user/wenementen/luxe360-theme.zip`

### Stap 2: Importeer in Shopify

1. Ga naar **Online Store** (Onlinewinkel)
2. Klik op **Thema's** (Themes)
3. Scroll naar beneden naar **Themabibliotheek** (Theme library)
4. Klik op **Upload een thema** (Upload theme)
5. Klik op **Bestand kiezen** (Choose file)
6. Selecteer `luxe360-theme.zip`
7. Klik op **Uploaden** (Upload)

Shopify installeert nu het thema automatisch!

### Stap 3: Maak een Pagina

1. Ga naar **Online Store > Pagina's** (Pages)
2. Klik op **Pagina toevoegen** (Add page)
3. Voer een titel in: bijv. "360 Photo Booth"
4. Aan de rechterkant, bij **Themasjabloon** (Theme template)
5. Selecteer: **luxe360**
6. Klik op **Opslaan** (Save)

### Stap 4: Bekijk je Pagina!

Klik op **Pagina bekijken** (View page) - Je LUXE 360° landingspagina is live! 🎉

---

## 🎨 Het Thema Gebruiken

### Optie A: Alleen de LUXE 360° Pagina

Je huidige Dawn thema blijft actief. De LUXE 360° pagina werkt als speciale landingspagina.

**Voordeel:** Je bestaande site blijft onveranderd.

### Optie B: Het Thema Activeren

Als je wilt, kun je het LUXE 360° thema activeren:

1. Ga naar **Thema's**
2. Bij "LUXE 360°" thema
3. Klik op **Acties > Publiceren** (Actions > Publish)

**Let op:** Dit vervangt je huidige thema. Alleen doen als je dit wilt!

---

## ✅ Wat Zit er in het Thema?

Het thema bevat:
- ✅ Complete LUXE 360° landingspagina template
- ✅ Standaard homepage (simpel, als placeholder)
- ✅ Standaard pagina template
- ✅ Alle benodigde configuratie bestanden
- ✅ Alles werkt direct na import

---

## 📝 Inhoud Aanpassen

Na import kun je de inhoud aanpassen:

### Methode 1: Via Code Editor

1. Ga naar **Thema's**
2. Bij "LUXE 360°" thema, klik **Acties > Code bewerken**
3. Ga naar **Templates > page.luxe360.liquid**
4. Pas aan wat je wilt:
   - Prijzen
   - Contactgegevens
   - WhatsApp nummer
   - Kleuren
   - Teksten

### Methode 2: Direct in het Bestand

Alle content staat in één bestand: `templates/page.luxe360.liquid`

**Contactgegevens aanpassen:**
```liquid
<li>📍 Almere, Nederland</li>          ← Jouw adres
<li>📧 hello@luxe360.nl</li>          ← Jouw email
<li>📱 +31 6 12345678</li>            ← Jouw telefoon
```

**WhatsApp nummer:**
```liquid
<a href="https://wa.me/31612345678"    ← Jouw WhatsApp
```

**Prijzen:**
```liquid
<div class="package-price">€495</div>  ← Jouw prijzen
<div class="package-price">€795</div>
<div class="package-price">€1,295</div>
```

**Kleuren aanpassen:**
```css
:root {
  --gold: #D4AF37;        ← Jouw merkkleur
  --black: #0A0A0A;
  --cream: #FAF8F5;
}
```

---

## 🖼️ Galerij Afbeeldingen Toevoegen

**Stap 1: Upload Afbeeldingen**
1. Ga naar **Instellingen > Bestanden** (Settings > Files)
2. Upload je event foto's

**Stap 2: Vervang Placeholders**

In het template, zoek:
```liquid
<div class="gallery-placeholder">💍</div>
```

Vervang met:
```liquid
<img src="{{ 'jouw-foto.jpg' | file_url }}" alt="Event" style="width:100%;height:100%;object-fit:cover;">
```

---

## 🔧 Problemen Oplossen

### "Thema kan niet worden geüpload"

Mogelijke oorzaken:
- ZIP bestand te groot → Dit zou niet moeten, het is klein
- Verkeerd formaat → Zorg dat je het `.zip` bestand upload
- Browser probleem → Probeer een andere browser

### "Template niet gevonden"

- Zorg dat je de pagina hebt aangemaakt
- Selecteer "luxe360" in het template dropdown menu
- Refresh de pagina

### Styling ziet er vreemd uit

- Clear je browser cache (Ctrl+Shift+R of Cmd+Shift+R)
- Kijk of het thema correct is geïmporteerd
- Check of alle bestanden aanwezig zijn in Templates folder

---

## 🎯 Voordelen van Thema Import

**Waarom dit beter is:**
1. ✅ Alles in één keer geüpload
2. ✅ Geen handmatig bestanden kopiëren
3. ✅ Geen schema errors
4. ✅ Geen configuratie nodig
5. ✅ Werkt direct
6. ✅ Makkelijk te backuppen (exporteer gewoon het thema)
7. ✅ Makkelijk te updaten (upload nieuw ZIP bestand)

---

## 📤 Thema Exporteren (Backup)

Je kunt het thema altijd weer exporteren:

1. Ga naar **Thema's**
2. Bij "LUXE 360°" thema
3. Klik **Acties > Thema downloaden** (Actions > Download theme)
4. Je krijgt een ZIP bestand als backup

---

## 🔄 Updaten

Als je updates wilt:

1. Download nieuwe versie van `luxe360-theme.zip`
2. Upload als nieuw thema
3. Test de nieuwe versie
4. Publiceer wanneer je tevreden bent

---

## 💡 Tips

**Tip 1: Test Eerst**
- Upload het thema maar publiceer het niet meteen
- Bekijk de preview
- Test alles
- Pas aan wat nodig is
- Publiceer pas als alles perfect is

**Tip 2: Maak een Backup**
- Voor je het thema publiceert
- Download je huidige thema als backup
- Dan kun je altijd terug

**Tip 3: Gebruik als Landingspagina**
- Je hoeft het thema niet te activeren
- Maak gewoon een pagina met het "luxe360" template
- Je Dawn thema blijft actief voor de rest van je site
- Perfect voor een speciale landingspagina!

---

## ✅ Checklist

Na installatie, controleer:

- [ ] Thema is geïmporteerd zonder errors
- [ ] Pagina is aangemaakt
- [ ] Template "luxe360" is geselecteerd
- [ ] Pagina ziet er goed uit op desktop
- [ ] Pagina ziet er goed uit op mobiel
- [ ] Contactformulier werkt
- [ ] WhatsApp knop werkt
- [ ] Package selectie werkt
- [ ] Smooth scrolling werkt
- [ ] Alle content is correct

---

## 🎉 Klaar!

Je LUXE 360° thema is nu geïnstalleerd en klaar voor gebruik!

**Nog vragen?** Check de andere guides in de repository of vraag hulp.

---

**Veel succes met je 360° Photo Booth business! 📸✨**
