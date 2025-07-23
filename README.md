# terminaltraces.github.io

A modern Astro site for terminaltraces, featuring a beautiful cosmic-themed design with automatic deployment to GitHub Pages.

![Site Preview](https://github.com/user-attachments/assets/d8a989be-fcb1-4e8a-af6d-114e7bb01fab)

## 🚀 Features

- **Modern Astro Framework**: Built with Astro 4+ for optimal performance
- **Responsive Design**: Beautiful cosmic-themed UI that works on all devices
- **Multiple Pages**: Home, About, Work, Projects, Blog, and Contact pages
- **Blog Support**: Ready for content with MDX support
- **Tailwind CSS**: Styled with Tailwind for consistent design
- **React Integration**: Interactive components powered by React
- **Automatic Deployment**: Deploys to GitHub Pages on every push to main

## 🛠️ Quick Start

### Prerequisites
- Node.js 18 or higher
- npm

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/terminaltraces/terminaltraces.github.io.git
   cd terminaltraces.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### How it works:
1. **GitHub Actions Workflow**: `.github/workflows/deploy.yml` handles the deployment
2. **Build Process**: Uses the official Astro GitHub Action
3. **Static Generation**: Builds static files optimized for GitHub Pages
4. **Live Site**: Available at https://terminaltraces.github.io

### Manual Deployment
If needed, you can trigger deployment manually from the GitHub Actions tab.

## 📁 Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── content/        # Blog posts and content collections
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   └── styles/         # Global styles
├── public/             # Static assets
├── .github/workflows/  # GitHub Actions workflows
└── dist/               # Built site (generated)
```

## 🎨 Customization

- **Content**: Edit pages in `src/pages/`
- **Styling**: Modify Tailwind classes or global styles
- **Components**: Create/edit components in `src/components/`
- **Configuration**: Update `astro.config.mjs` for site settings

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT.md) - Detailed deployment information
- [Astro Documentation](https://docs.astro.build/) - Learn about Astro
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ☕ and ✨ using [Astro](https://astro.build/)