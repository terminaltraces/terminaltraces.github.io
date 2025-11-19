import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme) => {
    const html = document.documentElement;
    if (newTheme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="p-2 rounded-full hover:bg-galaxy-100 dark:hover:bg-galaxy-800 transition-colors duration-200"
      title="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <svg
          className="w-6 h-6 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.415 0l.707.707a1 1 0 01-1.415 1.415l-.707-.707a1 1 0 010-1.415zm2.828 2.828a1 1 0 011.415 0l.707.707a1 1 0 01-1.415 1.415l-.707-.707a1 1 0 010-1.415zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm2.121-2.879a1 1 0 01-1.415 1.415l-.707-.707a1 1 0 011.415-1.415l.707.707zM5.75 13.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm6.183.183a1 1 0 00-1.414-1.414l-.707.707a1 1 0 101.414 1.414l.707-.707zM5 15.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zm2.121 2.121a1 1 0 01-1.415-1.415l.707-.707a1 1 0 011.415 1.415l-.707.707zM13 17.9a1 1 0 100-2h-1a1 1 0 100 2h1z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 text-galaxy-600"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}
