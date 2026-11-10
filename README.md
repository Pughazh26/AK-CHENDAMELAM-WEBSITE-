# AK Chendamelam (`@ak_kalasamithi`)

Official website for **AK Chendamelam & Event Management** — Traditional Kerala Percussion troupe led by **Vallarasu Kumaran**, based in Alapakkam, Chennai.

## Project Structure

```text
AK CHENDAMELAM/
├── assets/
│   ├── css/style.css           # Site styles and responsive layout
│   ├── images/                 # Troupe, event, and service photos
│   ├── js/
│   │   ├── config.js           # Contact info, WhatsApp, email, and map links
│   │   └── main.js             # Navigation, hero slider, gallery filter, and lightbox
│   └── videos/
│       ├── temple-performance.mp4
│       └── marriage-performance.mp4
├── index.html                  # Home page
├── packages.html               # Performance packages and FAQ
├── gallery.html                # Photo & video gallery
├── contact.html                # Booking enquiry form and map
├── server.js                   # Local Node.js static server
└── package.json
```

## Running Locally

Start the local server (requires Node.js):

```bash
npm start
```

Or run directly:

```bash
node server.js
```

Then open `http://localhost:3000` in your browser. You can also open `index.html` directly.

## Updating Contact & Gallery Details

- **Phone, WhatsApp, Email, Address & Maps:** Edit `assets/js/config.js`
- **Gallery Items:** Edit `GALLERY_ITEMS` in `assets/js/main.js`
