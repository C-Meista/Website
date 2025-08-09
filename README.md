# CHAINZZ - Premium Edelstahlketten Website

Eine moderne, minimalistische Website für CHAINZZ Premium Edelstahlketten mit urbanem Flair.

## 🔥 Features

- **Minimal Dark Theme**: Elegantes dunkles Design mit subtilen Akzenten
- **Responsive Design**: Perfekt auf allen Geräten von Desktop bis Mobile
- **Modern CSS**: Verwendung von CSS Custom Properties (CSS Variables)
- **Keine Frameworks**: Pure HTML, CSS und JavaScript - kein Tailwind oder Bootstrap
- **Performance optimiert**: Schnelle Ladezeiten durch optimierte Assets
- **Accessibility**: ARIA-Labels und semantisches HTML für bessere Zugänglichkeit

## 📁 Dateistruktur

```
Website/
├── index.html          # Startseite
├── products.html       # Produktkatalog
├── custom.html         # Custom Design Service
├── about.html          # Über uns
├── contact.html        # Kontakt
├── assets/
│   ├── css/
│   │   ├── base.css        # Variablen, Reset, Typography, Utilities
│   │   ├── components.css  # Header, Footer, Buttons, Cards, Forms
│   │   ├── home.css        # Styles für index.html (Hero Section)
│   │   ├── products.css    # Styles für products.html (Product Cards)
│   │   ├── custom.css      # Styles für custom.html
│   │   ├── about.css       # Styles für about.html
│   │   ├── contact.css     # Styles für contact.html
│   │   ├── responsive.css  # Mobile & Responsive Styles
│   │   └── main.css        # Import-basierte Alternative (optional)
│   ├── js/
│   │   └── main.js         # JavaScript für Interaktivität
│   └── images/             # Bilder und Assets (leer, bereit für Inhalte)
└── README.md               # Diese Datei
```

## 🎨 CSS Architektur

### Modularer Aufbau
Das CSS ist in logische Module aufgeteilt für bessere Wartbarkeit:

- **`base.css`**: Grundlagen (CSS Custom Properties, Reset, Typography, Layout Utilities)
- **`components.css`**: Wiederverwendbare Komponenten (Header, Footer, Buttons, Cards, Forms)
- **`[page].css`**: Seitenspezifische Styles (home.css, products.css, etc.)
- **`responsive.css`**: Mobile und responsive Styles für alle Seiten

### Verwendung
Jede HTML-Seite lädt nur die CSS-Dateien, die sie benötigt:
```html
<link rel="stylesheet" href="./assets/css/base.css">
<link rel="stylesheet" href="./assets/css/components.css">
<link rel="stylesheet" href="./assets/css/home.css">
<link rel="stylesheet" href="./assets/css/responsive.css">
```

## 🎨 Design System

### Farbpalette
- **Primärer Hintergrund**: `#0a0a0a` (Sehr dunkles Schwarz)
- **Sekundärer Hintergrund**: `#141414` (Dunkles Grau)
- **Tertiärer Hintergrund**: `#1e1e1e` (Mittleres Grau)
- **Primärer Text**: `#ffffff` (Weiß)
- **Sekundärer Text**: `#b0b0b0` (Helles Grau)
- **Akzent**: `#ffffff` (Weiß für Buttons und Highlights)

### Typografie
- **Primäre Schrift**: Inter (für Fließtext)
- **Überschriften**: Poppins (für Headlines und Logo)
- **Google Fonts** werden verwendet für konsistente Darstellung

### Spacing System
- **XS**: 0.5rem (8px)
- **SM**: 1rem (16px)
- **MD**: 2rem (32px)
- **LG**: 3rem (48px)
- **XL**: 4rem (64px)
- **2XL**: 6rem (96px)

## 🛠 Technische Details

### CSS Architektur
- **Modulares CSS**: Aufgeteilt in logische Dateien für bessere Wartbarkeit
- **CSS Custom Properties** für Theme-Management
- **CSS Grid & Flexbox** für Layouts
- **Mobile-First** Responsive Design
- **Smooth Animations** mit CSS Transitions
- **Moderne Selektoren** und Pseudo-Klassen

### JavaScript Features
- **Mobile Menu Toggle** für Responsive Navigation
- **Smooth Scrolling** für interne Links
- **Header Background** Änderung beim Scrollen
- **Active Navigation** Highlighting
- **Form Validation** (basic)
- **Intersection Observer** für Scroll-Animationen

### Performance
- **Minimaler JavaScript**: Nur notwendige Funktionalität
- **Optimierte CSS**: Einzelne Datei, minimale Redundanz
- **Preconnect Links**: Für Google Fonts Optimierung
- **Semantic HTML**: Für bessere SEO und Accessibility

## 📱 Responsive Design

Die Website ist vollständig responsive und optimiert für:
- **Desktop**: 1200px+ (volle Funktionalität)
- **Tablet**: 768px-1199px (angepasste Grids)
- **Mobile**: bis 767px (Hamburger Menu, Stack-Layout)
- **Small Mobile**: bis 480px (kompakte Typografie)

## 🎯 Seiten-Übersicht

### index.html - Startseite
- Hero-Bereich mit Call-to-Action
- Featured Products Grid
- Über uns Sektion
- Custom Design Teaser

### products.html - Shop
- Produktgrid mit 6 Beispielprodukten
- Detaillierte Produktinformationen
- Größenberatung
- Feature-Highlights

### custom.html - Custom Design
- 4-Schritte Prozess Erklärung
- Custom Options Übersicht
- Portfolio Beispiele
- Umfassendes Kontaktformular
- FAQ Sektion

### about.html - Über uns
- Firmengeschichte
- Werte und Mission
- Gründer-Portrait
- Herstellungsprozess

### contact.html - Kontakt
- Mehrere Kontaktmöglichkeiten
- Detailliertes Kontaktformular
- FAQ Sektion
- Geschäftsinformationen

## 🚀 Setup & Development

1. **Lokaler Server starten** (optional):
   ```bash
   # Mit Python
   python -m http.server 8000
   
   # Mit Node.js (live-server)
   npx live-server
   ```

2. **Dateien bearbeiten**:
   - HTML: Direkt in den `.html` Dateien
   - Styles: In `assets/css/main.css`
   - JavaScript: In `assets/js/main.js`

3. **Bilder hinzufügen**:
   - Produktbilder in `assets/images/` ablegen
   - In HTML die Placeholder durch `<img>` Tags ersetzen

## 📈 SEO & Meta

Alle Seiten haben:
- **Meta Descriptions** für bessere Suchmaschinen-Sichtbarkeit
- **Semantic HTML** für strukturierte Daten
- **Alt-Texte** für Bilder (wenn hinzugefügt)
- **Open Graph** ready (kann erweitert werden)

## 🔧 Anpassungen

### Farben ändern
Bearbeite die CSS Custom Properties in `assets/css/base.css`:
```css
:root {
  --bg-primary: #0a0a0a;    /* Haupthintergrund */
  --text-primary: #ffffff;   /* Haupttext */
  /* ... weitere Variablen */
}
```

### Styles anpassen
- **Globale Styles**: `assets/css/base.css` und `assets/css/components.css`
- **Seitenspezifische Styles**: Entsprechende `[page].css` Datei bearbeiten
- **Responsive Design**: `assets/css/responsive.css`

### Neue Seite hinzufügen
1. HTML-Datei erstellen (Struktur von bestehenden Seiten kopieren)
2. Neue CSS-Datei in `assets/css/` erstellen
3. CSS-Datei in der HTML-Datei verlinken
4. Navigation in allen HTML-Dateien erweitern

---

**Entwickelt für CHAINZZ** - Premium Edelstahlketten mit urbanem Flair
*Zeitlos, hochwertig, nachhaltig*
