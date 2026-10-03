# 🚀 Dakshitha DN - Personal Portfolio

A sleek, responsive, modern developer portfolio website built with **React**, **Vite**, and **Tailwind CSS**.

---

## ✨ Features

- **Personal Hero Section**: Dynamic introduction, availability status badge with pulse animation, fast social links, and key stats.
- **About Me**: Narrative overview with engineering pillars (Performance, Architecture, Modern Stack, Collaboration).
- **Interactive Skills Grid**: Categorized technologies (Frontend, Backend, Databases, Cloud & DevOps) with proficiency level tags and icons.
- **Featured Projects Showcase**: Filterable project gallery (All, Full Stack, Frontend, Backend) with live demo buttons, GitHub source links, and performance metrics.
- **Experience & Education Timeline**: Chronological milestones with key technical achievements.
- **Contact & Direct Reach Out**: Functional message form, quick "Copy Email" with instant clipboard feedback, and social links.
- **Single-Source Data Architecture**: All content is driven by [`src/data/portfolioData.js`](./src/data/portfolioData.js), making updates instant without touching layout code.

---

## 🛠️ Quick Start

### 1. Development Mode
To start the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Production Build
To create an optimized production build in the `dist/` directory:
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```

### 4. Code Quality & Linting
```bash
npm run lint
```

---

## 🎨 How to Customize Content

All text, links, projects, skills, and contact information can be updated in **one single file**:
👉 [`src/data/portfolioData.js`](./src/data/portfolioData.js)

- **Personal Info**: Name, title, tagline, location, bio, and resume link.
- **Socials**: GitHub, LinkedIn, Email, Twitter/X profile URLs.
- **Skills**: Add or remove technologies and proficiency tags (`Expert`, `Advanced`, `Intermediate`).
- **Projects**: Add project titles, descriptions, live demo links, repository URLs, and tags.
- **Work Experience & Education**: Add company roles, dates, and bulleted highlights.

---

## 🌐 Deployment

This portfolio is ready for 1-click deployment on modern web hosts:

### Vercel
1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Click **Deploy**!

### Netlify
1. Connect your repository in [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy**!
