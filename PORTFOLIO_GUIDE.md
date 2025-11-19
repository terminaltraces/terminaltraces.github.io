# Your Portfolio Site - Quick Guide

## 🎨 What's Been Built

Your portfolio site is now ready to showcase your work! Here's what's included:

### Pages
- **Home** - Intro with links to resume, projects, and recent blog posts
- **About** - Your professional bio and skills
- **Projects** - Showcase of your work (supports markdown)
- **Blog** - Writing section with 5 sample posts (supports MDX)
- **Experience** - Resume/CV with work history and skills
- **Contact** - Contact form and social links

### Features
✨ Cosmic "kawaii galaxy" theme with purple, pink, and gold colors
🌓 Dark/Light mode toggle (persists in localStorage)
📱 Fully responsive design
⚡ Lightning-fast performance (Astro's island architecture)
♿ Accessibility-first design (WCAG AA compliant)
📝 Markdown/MDX blog with syntax highlighting
🎨 Dynamic projects that you can add via markdown files

## 🚀 Getting Started

### Development
```bash
npm run dev
```
Visit http://localhost:3000

### Build for Production
```bash
npm run build
```

## 📝 Customizing Content

### 1. Update Your Info
- **Footer links**: Edit `src/components/Footer.astro` - change LinkedIn/GitHub URLs to your actual usernames
- **About page**: Edit `src/pages/about.astro` - replace placeholder text with your bio
- **Experience page**: Edit `src/pages/experience.astro` - add your real work history
- **Home intro**: Edit `src/pages/index.astro` - customize the introduction text

### 2. Add Blog Posts
Create new `.mdx` files in `src/content/blog/`:

Example: `src/content/blog/my-first-post.mdx`
```mdx
---
title: "My First Post"
description: "A brief description"
pubDate: 2024-11-19
tags: ["react", "astro"]
---

# Your blog post content here...

You can use **markdown** and even React components!
```

### 3. Add Projects
Create new `.md` files in `src/content/projects/`:

Example: `src/content/projects/awesome-app.md`
```markdown
---
title: "My Awesome App"
description: "An incredible app I built"
role: "Full Stack Developer"
image: "https://example.com/image.jpg"
startDate: 2024-01-01
endDate: 2024-06-30
tags: ["React", "Node.js"]
featured: true
---

# Project Details

Tell the story of your project...
```

Mark projects as `featured: true` to show them prominently on the projects page.

## 🎨 Theme Customization

### Colors
The theme uses three color families. Edit `tailwind.config.mjs`:

- **Galaxy**: Purple/blue tones (primary)
- **Nebula**: Pink/red tones (secondary)
- **Stardust**: Gold/yellow tones (accent)

All colors have 50-900 variants for different opacity levels.

### Fonts
Currently using system fonts for optimal performance. To add custom fonts:
1. Update `src/styles/global.css`
2. Add @font-face rules with preloading in `src/layouts/Layout.astro`

## 📬 Setting Up the Contact Form

The contact form currently sends to a placeholder. Set it up:

1. Visit [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Edit `src/components/ContactForm.jsx` line ~40:
   ```jsx
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
4. Save and test!

## 🚀 Deployment

### GitHub Pages
```bash
npm run build
git add .
git commit -m "Deploy portfolio"
git push origin main
```

Your site will be live at `https://terminaltraces.github.io`

### Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Astro - just click Deploy!

### Netlify
1. Same as Vercel - connect your GitHub repo
2. Netlify will automatically build with Astro

## 🎯 Performance Tips

- Images on the About page: Replace the emoji with your actual photo
- Blog post images: Add `image` field to frontmatter
- Project showcase: Replace placeholder images with your actual screenshots

## 📁 File Locations

Know where to find things:
- **Navigation**: `src/components/Navigation.astro`
- **Footer**: `src/components/Footer.astro`
- **Styling**: `src/styles/global.css` and `tailwind.config.mjs`
- **Theme colors**: `tailwind.config.mjs` (theme.extend.colors)
- **Layout wrapper**: `src/layouts/Layout.astro`

## 🧪 Testing

Before deploying:
1. Test light mode and dark mode
2. Test on mobile (Chrome DevTools)
3. Test keyboard navigation (Tab key)
4. Test blog and project pages load correctly
5. Test contact form submission

## 🎓 Further Customization

Explore these files to customize further:
- `astro.config.mjs` - Astro configuration
- `tailwind.config.mjs` - Tailwind CSS configuration
- `src/content/config.ts` - Content schema definitions
- `package.json` - Dependencies and scripts

## 📚 Learning Resources

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MDX](https://mdxjs.com)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)

## 💡 Quick Tips

1. **Dark mode toggle**: It's in the top right corner of the nav
2. **Mobile menu**: Navigation collapses on mobile with a hamburger menu
3. **Blog sorting**: Posts are automatically sorted by date (newest first)
4. **Project ordering**: Featured projects show first, then all others by date

## 🎉 You're All Set!

Your portfolio is ready to go. Customize it with your info, add your projects and blog posts, and deploy it! 

Good luck showcasing your work! ✨
