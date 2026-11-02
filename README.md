# AK Chendamelam (@ak_kalasamithi) - Website Guide

A fast, responsive, and authentic website built with pure HTML, CSS, and vanilla JavaScript for **AK Chendamelam** (Traditional Tamil Nadu Percussion Troupe & Event Management).

---

## 1. Quick Start

To launch and preview the website, open `index.html` in any modern web browser (Google Chrome, Firefox, Edge, Safari). No installation, npm, or build tools are required.

---

## 2. Where to Edit Contact Numbers & Links

All business details, phone numbers, WhatsApp configurations, and social media handles are located in a single file:

📁 **`js/config.js`**

```javascript
const SITE_CONFIG = {
  // Replace with your 10-digit WhatsApp number (prefixed with 91, no spaces or +)
  WHATSAPP_NUMBER: "919884682102",
  WHATSAPP_MESSAGE: "Hi, I am interested in your event management services.",

  // Instagram URL & Handle
  INSTAGRAM_URL: "https://www.instagram.com/ak_kalasamithi",
  INSTAGRAM_HANDLE: "@ak_kalasamithi",

  // Other social media
  YOUTUBE_URL: "https://www.youtube.com/@ak_kalasamithi",
  FACEBOOK_URL: "https://www.facebook.com/ak.kalasamithi",

  // Calling number and email
  PHONE_NUMBER: "+91 98846 82102",
  PHONE_TEL: "+919884682102",
  EMAIL_ADDRESS: "akchendamelam@gmail.com",
  ADDRESS_LINE: "Madurai / Chennai, Tamil Nadu, India",
  SERVICE_LOCATIONS: "Serving all districts across Tamil Nadu and South India"
};
```

Any change made here automatically updates every page, header, footer, package button, and the floating WhatsApp button.

---

## 3. Media Replacement Checklist

When replacing placeholder files with real photography, drop your files into the respective folders using the exact filenames listed below:

### `images/` Folder
| Filename | Purpose | Recommended Size |
|---|---|---|
| `hero1.jpg` | Homepage Slideshow 1 (Wedding Entry) | 1600 × 900 px |
| `hero2.jpg` | Homepage Slideshow 2 (Temple Festival) | 1600 × 900 px |
| `hero3.jpg` | Homepage Slideshow 3 (Procession / Ooravalam) | 1600 × 900 px |
| `wedding.jpg` | Service: Wedding Chendamelam & Entry | 800 × 600 px |
| `temple.jpg` | Service: Temple Festival & Thiruvizha | 800 × 600 px |
| `procession.jpg` | Service: Processions & Ooravalam | 800 × 600 px |
| `welcome.jpg` | Service: VIP Welcome & Inauguration | 800 × 600 px |
| `event_mgmt.jpg` | Service: Complete Traditional Event Management | 800 × 600 px |
| `gallery1.jpg` to `gallery12.jpg` | Gallery Page Photos | 800 × 600 px |
| `logo.svg` / `favicon.svg` | Chenda Drum Troupe Logos | Vector SVG |

### `videos/` Folder
| Filename | Purpose | Format |
|---|---|---|
| `sample1.mp4` | Live Performance Video 1 (Temple Festival) | MP4 (H.264) |
| `sample2.mp4` | Live Performance Video 2 (Wedding Entry) | MP4 (H.264) |
| `sample1_poster.jpg` | Thumbnail poster for Video 1 | 800 × 600 px |
| `sample2_poster.jpg` | Thumbnail poster for Video 2 | 800 × 600 px |

> **Note on Missing Files:** If any image or video file does not exist or has not been replaced yet, the website's CSS fallback system will automatically render a traditional deep maroon to dark gradient with the filename faintly visible so you immediately know which file to replace.

---

## 4. Editing Gallery Items & Captions

To add, remove, or modify items in the gallery, edit the `GALLERY_ITEMS` array at the top of:

📁 **`js/main.js`**

Each entry contains `src`, `category` (`weddings`, `temple`, `processions`, or `videos`), `type` (`image` or `video`), `title`, and `caption`.

---

## 5. Technology Stack & Design Direction
- **Languages:** HTML5, Vanilla CSS3, Vanilla ES6 JavaScript (No frameworks, no backend).
- **Fonts:** Playfair Display (Headings) and Mukta Malar (Tamil & Body) via Google Fonts.
- **Palette:** Deep Maroon (`#5a0f14`), Antique Gold (`#c8932b`), Cream (`#f6ecd9`), Near-Black (`#1c0b0a`).
- **Features:** Ken Burns Hero Slideshow, IntersectionObserver Count-Up Stats, Accessible Lightbox with Video Player, FAQ Accordion, WhatsApp URL Generator Form, and Sticky/Mobile Navigation.
