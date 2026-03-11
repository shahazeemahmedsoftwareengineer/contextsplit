# ContextSplit 🔀

> Never lose AI context again. Upload a conversation file, split it into smart chunks, and continue on any AI platform.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Visit http://localhost:3000
```

## 📁 Project Structure

```
contextsplit/
├── app/
│   ├── globals.css       # Design system + Tailwind base styles
│   ├── layout.js         # Root layout, SEO metadata, AdSense script
│   └── page.js           # Home page (assembles all sections)
│
├── components/
│   ├── Navbar.jsx         # Sticky nav with mobile hamburger menu
│   ├── Hero.jsx           # Hero section with floating mockup
│   ├── HowItWorks.jsx     # 3-step process cards
│   ├── ProblemSolution.jsx # Split problem/solution columns
│   ├── ChunkTool.jsx      # 🌟 Core interactive tool (upload + split + download)
│   ├── Testimonials.jsx   # 6-card testimonial grid
│   ├── AboutUs.jsx        # Brand story + values
│   ├── AdBanner.jsx       # Google AdSense display units
│   └── Footer.jsx         # Links, social, copyright
│
├── lib/
│   └── chunkFile.js       # Pure utility: split, download, formatBytes
│
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Design System

| Token           | Value       | Usage                      |
|-----------------|-------------|----------------------------|
| `brand-peach`   | `#FDF0ED`   | Background blobs, cards    |
| `brand-lavender`| `#F4EFFF`   | Background blobs, cards    |
| `brand-purple`  | `#8B5CF6`   | Primary accent, CTAs       |
| `brand-charcoal`| `#1A1A1A`   | Headings, primary buttons  |
| `brand-muted`   | `#6B7280`   | Body text, secondary info  |

**Fonts**: Bricolage Grotesque (display) + DM Sans (body) — loaded via Google Fonts

## 💰 Google AdSense Setup

1. Get your **Publisher ID** from [AdSense](https://adsense.google.com)
2. In `app/layout.js`, replace `ca-pub-XXXXXXXXXXXXXXXX`
3. In `components/AdBanner.jsx`, replace `ca-pub-XXXXXXXXXXXXXXXX`  
4. Replace `slot` values (`1111111111`, `2222222222`) with real ad unit slot IDs

Ad placements (2 units per page — within AdSense limits):
- Between "How It Works" and "Problem/Solution" sections
- Between the Chunk Tool and Testimonials

## 🔍 SEO Features

- ✅ Next.js Metadata API (title, description, og:, twitter:)
- ✅ JSON-LD structured data (WebApplication schema)
- ✅ Semantic HTML5 (section, article, main, header, footer, h1-h3)
- ✅ aria-labels and aria-labelledby for accessibility
- ✅ Responsive images + alt text
- ✅ Mobile-first layout

## 🔒 Privacy

All file processing is 100% client-side (browser). No files are sent to any server.  
The `lib/chunkFile.js` utility runs entirely in the user's browser using the FileReader API and Blob API.

## 🛠️ Adding Features (Future)

- `/app/blog/` — Add an SEO blog for organic traffic  
- `/app/privacy/page.js` — Privacy Policy page  
- `/app/terms/page.js` — Terms of Service page  
- Add `jszip` for downloading all chunks as a `.zip` archive  
- Add chunk preview modal with full text view  

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3 + Custom CSS
- **Fonts**: Google Fonts (Bricolage Grotesque + DM Sans)
- **Ads**: Google AdSense
- **Deployment**: Vercel (recommended)

## 🚀 Deploy to Vercel

```bash
npm install -g vercel
vercel
```
