// Site configuration and shared constants

export const siteConfig = {
  name: 'terminaltraces',
  tagline: 'Creative developer crafting beautiful digital experiences.',
  branding: '✨ terminaltraces',
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Writing' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
];

export const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
];

export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/terminaltraces',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/terminaltraces',
    icon: 'github',
  },
];

// Component configuration
export const recentPostsConfig = {
  maxPosts: 3,
  dateFormat: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
};
