# Keshav Agrawal — Portfolio

A modern, minimalist portfolio website for a Java Full Stack Developer fresher.

Built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## ✨ Design

- Warm off-white background (`#F8F7F4`) — inspired by Linear, Vercel, Notion
- Clean white cards with soft shadows
- Indigo accent (`#6366F1`)
- Inter font — clean, professional, readable
- Scroll-reveal animations via Framer Motion
- Fully responsive — mobile, tablet, desktop

---

## 📁 Project Structure

```
keshav-portfolio/
├── public/
│   └── favicon.svg          # SVG favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky nav with scroll detection + mobile menu
│   │   ├── Hero.jsx          # Full-height hero with CTA buttons
│   │   ├── About.jsx         # Bio + highlight cards
│   │   ├── Skills.jsx        # Tech skills as color-coded chips
│   │   ├── Projects.jsx      # Featured project card + 3-col project grid
│   │   ├── Experience.jsx    # Work experience cards
│   │   ├── Education.jsx     # Timeline layout for education
│   │   ├── Certifications.jsx# Certification cards
│   │   ├── AdditionalInfo.jsx# Strengths + spoken languages
│   │   ├── Contact.jsx       # Contact link cards
│   │   ├── Footer.jsx        # Simple footer
│   │   ├── FadeIn.jsx        # Reusable scroll-reveal wrapper
│   │   └── SectionHeader.jsx # Reusable section heading component
│   ├── App.jsx               # Root component, assembles all sections
│   ├── main.jsx              # React DOM entry point
│   └── index.css             # Tailwind base + global styles
├── index.html                # HTML shell with Inter font + meta tags
├── vite.config.js            # Vite config with React plugin
├── tailwind.config.js        # Tailwind config with custom colors + font
├── postcss.config.js         # PostCSS with Tailwind + Autoprefixer
├── vercel.json               # SPA rewrite rule for Vercel deployment
├── .gitignore
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+ 
- npm v9+

### Install & Run

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/keshav-portfolio.git
cd keshav-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

The site runs at `http://localhost:5173`

### Build for Production

```bash
npm run build       # outputs to /dist
npm run preview     # preview the production build locally
```

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| react | ^18.3.0 | UI framework |
| react-dom | ^18.3.0 | DOM renderer |
| framer-motion | ^11.0.0 | Scroll-reveal & hover animations |
| lucide-react | ^0.383.0 | Icon set |
| vite | ^5.3.0 | Build tool & dev server |
| @vitejs/plugin-react | ^4.3.0 | React Fast Refresh |
| tailwindcss | ^3.4.4 | Utility-first CSS |
| autoprefixer | ^10.4.19 | CSS vendor prefixes |
| postcss | ^8.4.38 | CSS processing |

---

## ☁️ Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Vercel auto-detects Vite — click **Deploy**

The `vercel.json` handles SPA routing automatically.

---

## 🛠️ Customisation

All content is in the component data files — no CMS or config file needed.

| What to change | Where |
|---|---|
| Name, tagline, hero text | `src/components/Hero.jsx` |
| About bio | `src/components/About.jsx` |
| Skills | `src/components/Skills.jsx` — edit the `skillGroups` array |
| Projects | `src/components/Projects.jsx` — edit `featuredProject` and `otherProjects` |
| Experience | `src/components/Experience.jsx` — edit the `experiences` array |
| Education | `src/components/Education.jsx` — edit the `education` array |
| Certifications | `src/components/Certifications.jsx` — edit the `certifications` array |
| Contact links | `src/components/Contact.jsx` — edit the `contacts` array |
| Accent color | `tailwind.config.js` → `theme.extend.colors.indigo` |
| Background color | `index.css` → `body { background-color }` and `App.jsx` → `bg-[#F8F7F4]` |

### Adding your resume PDF

Drop your `resume.pdf` into the `/public` folder.  
The **Download Resume** button in `Hero.jsx` already points to `/resume.pdf`.

---

## 📄 License

MIT — free to use, fork, and adapt.
