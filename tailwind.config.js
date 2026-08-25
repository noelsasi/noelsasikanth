/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      // Every color maps to the CSS variable layer in index.css so the
      // light/dark inversion happens in one place, not per-utility.
      colors: {
        canvas: 'var(--canvas)',
        'surface-soft': 'var(--surface-soft)',
        'surface-strong': 'var(--surface-strong)',
        'surface-card': 'var(--surface-card)',
        band: 'var(--band)',
        'band-elevated': 'var(--band-elevated)',
        'on-band': 'var(--on-band)',
        'on-band-soft': 'var(--on-band-soft)',
        'band-hairline': 'var(--band-hairline)',
        ink: 'var(--ink)',
        body: 'var(--body)',
        muted: 'var(--muted)',
        'muted-soft': 'var(--muted-soft)',
        hairline: 'var(--hairline)',
        'hairline-soft': 'var(--hairline-soft)',
        accent: 'var(--accent)',
        'accent-active': 'var(--accent-active)',
        'accent-on': 'var(--accent-on)',
        'accent-bg': 'var(--accent-bg)',
        'accent-border': 'var(--accent-border)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      // Radius scale from DESIGN-coinbase.md. Pill for interactive,
      // 24px for containers, full for avatars. Sharp corners absent.
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        pill: '100px',
      },
      spacing: {
        section: '96px',
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
      },
      fontSize: {
        // Display scale, 80/64/52/44/36 stepped down for the web.
        'display-mega': ['clamp(2.75rem, 7vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-xl': ['clamp(2.25rem, 5.5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4.5vw, 3.25rem)', { lineHeight: '1.02', letterSpacing: '-0.018em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.09', letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(1.5rem, 2.8vw, 2.25rem)', { lineHeight: '1.11', letterSpacing: '-0.012em' }],
      },
    },
  },
  plugins: [],
}
