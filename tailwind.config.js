/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0d0d12',
        surface: '#13131a',
        border: '#1e1e2a',
        accent: '#6366f1',
        violet: '#7c3aed',
        'text-primary': '#e8e8f0',
        'text-secondary': '#9090a8',
        'text-faint': '#5a5a72',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
