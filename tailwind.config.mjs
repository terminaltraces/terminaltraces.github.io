/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        galaxy: {
          50: '#f8f4ff',
          100: '#f0e8ff',
          200: '#e0d0ff',
          300: '#d1b8ff',
          400: '#b890ff',
          500: '#a368ff',
          600: '#8b4fd9',
          700: '#6d37b0',
          800: '#4a2480',
          900: '#2a1450',
        },
        nebula: {
          50: '#fff5f7',
          100: '#ffebef',
          200: '#ffd6e0',
          300: '#ffc2d0',
          400: '#ff9db0',
          500: '#ff7890',
          600: '#e65c78',
          700: '#cc4460',
          800: '#b32c48',
          900: '#7a1a2f',
        },
        stardust: {
          50: '#fffbf0',
          100: '#fff7e6',
          200: '#ffedcc',
          300: '#ffe4b3',
          400: '#ffd480',
          500: '#ffc34d',
          600: '#ffb81a',
          700: '#cc9200',
          800: '#996d00',
          900: '#664700',
        },
      },
      backgroundImage: {
        'galaxy-gradient': 'linear-gradient(135deg, #2a1450 0%, #4a2480 25%, #6d37b0 50%, #4a2480 75%, #2a1450 100%)',
        'galaxy-radial': 'radial-gradient(circle at 20% 50%, rgba(163, 104, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 120, 144, 0.3) 0%, transparent 50%)',
        'nebula-glow': 'radial-gradient(circle, rgba(255, 120, 144, 0.2) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};
