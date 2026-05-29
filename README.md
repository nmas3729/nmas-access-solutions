# NMAS Access Solutions

Professional access control, biometric systems, turnstiles, boom gates, and comprehensive security solutions across South Africa.

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **React 19**
- **Nodemailer** (contact form emails)
- **Heroicons** (icons)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/contact/route.js   # Contact form API endpoint
│   ├── globals.css             # Tailwind + custom styles
│   ├── layout.js               # Root layout with metadata
│   └── page.js                 # Homepage
├── components/
│   ├── Navbar.jsx              # Fixed navigation bar
│   ├── Hero.jsx                # Hero section
│   ├── Services.jsx            # 8 service cards
│   ├── About.jsx               # About + Why Choose Us
│   ├── Contact.jsx             # Contact info + form
│   ├── Footer.jsx              # Site footer
│   └── WhatsAppButton.jsx      # Floating WhatsApp CTA
├── .env.local                  # SMTP credentials (not committed)
├── next.config.mjs             # Next.js configuration
├── postcss.config.mjs          # PostCSS + Tailwind
└── package.json
```

## Brand Colors

| Role                     | Hex       |
|--------------------------|-----------|
| Premium Gold (primary)   | `#D4AF37` |
| Deep Gold Shadow (hover) | `#9C7A1C` |
| Matte Black (main bg)    | `#121212` |
| Charcoal Black (card bg) | `#1E1E1E` |
| Clean White (headings)   | `#F5F5F5` |
| Metallic Grey (body text)| `#8A8F98` |

## License

Private – NMAS Access Solutions © 2024
