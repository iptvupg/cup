/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      maxWidth: {
        coreMaxWidth: '1280px',
      },
      screens: {
        xsm: '375px',
      },
      colors: {
        // Surface system (near-pure black canvas → barely lighter surfaces)
        canvas: '#0a0a0a',
        'surface-soft': '#121212',
        'surface-card': '#1a1a1a',
        'surface-elevated': '#242424',
        hairline: '#2a2a2a',
        'hairline-strong': '#3a3a3a',

        // Brand voltage — electric yellow
        primary: {
          DEFAULT: '#faff69',
          active: '#e6eb52',
          disabled: '#3a3a1f',
        },
        'ch-yellow': '#faff69',
        'on-yellow': '#0a0a0a',

        // Text
        body: '#cccccc',
        'body-strong': '#e6e6e6',
        muted: '#888888',
        'muted-soft': '#5a5a5a',

        // Semantic
        'accent-emerald': '#22c55e',
        'accent-rose': '#ef4444',
        'accent-blue': '#3b82f6',

        // Back-compat aliases retained for any legacy refs
        ink: {
          950: '#0a0a0a',
          900: '#121212',
          800: '#1a1a1a',
        },
        accent: '#faff69',
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '12px',
      },
      spacing: {
        section: '96px',
      },
      letterSpacing: {
        'display-xl': '-0.0347em', // ~-2.5px at 72px
        'display-lg': '-0.0357em',
        'display-md': '-0.0375em',
        'display-sm': '-0.0313em',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'Menlo', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 700ms cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fadeIn 900ms ease-out both',
        drift: 'drift 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
