import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '0 0% 4%',
        foreground: '0 0% 98%',
        card: '240 5% 8%',
        'card-foreground': '0 0% 98%',
        popover: '240 5% 8%',
        'popover-foreground': '0 0% 98%',
        primary: '262 83% 58%',
        'primary-foreground': '0 0% 100%',
        secondary: '240 4% 16%',
        'secondary-foreground': '0 0% 98%',
        muted: '240 4% 16%',
        'muted-foreground': '240 5% 65%',
        accent: '262 83% 58%',
        'accent-foreground': '0 0% 100%',
        destructive: '0 84% 60%',
        'destructive-foreground': '0 0% 98%',
        border: '240 4% 16%',
        input: '240 4% 16%',
        ring: '262 83% 58%',
        cinema: {
          black: '#0a0a0f',
          charcoal: '#151519',
          'dark-gray': '#1e1e24',
          'mid-gray': '#2d2d35',
          violet: '#8b5cf6',
          'violet-muted': '#6d28d9',
          silver: '#e5e7eb',
        },
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.375rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
        shimmer: 'shimmer 2s infinite linear',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cinema':
          'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(109, 40, 217, 0.05) 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
