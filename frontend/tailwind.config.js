/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      /* =========================
         FONTS
      ========================= */
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      /* =========================
         BRAND COLORS (IEN LOGO BASED)
      ========================= */
      colors: {

        /* NAVY SYSTEM */
        navy: {
          50:  '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#050b18',   // 🔥 Deeper, richer navy
        },

        /* GOLD SYSTEM (Champagne / Premium) */
        gold: {
          50:  '#fdfaf2',
          100: '#f9f2e6',
          200: '#f1e2cc',
          300: '#e8d1b0',
          400: '#dfc195',
          500: '#d4b483',   // 🔥 Premium Champagne Gold
          600: '#c2a372',
          700: '#a68a5f',
          800: '#8a714d',
          900: '#6e593c',
        },

        /* SUPPORT COLORS */
        primary: {
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },

        accent: {
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },

      },

      /* =========================
         BACKGROUNDS
      ========================= */
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-navy': 'linear-gradient(135deg, #0B2C5F, #17365c)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37, #b9962f)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },

      /* =========================
         SHADOW SYSTEM (TECH LOOK)
      ========================= */
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212,175,55,0.35)',
        'navy-glow': '0 0 40px rgba(11,44,95,0.4)',
        'glass': '0 8px 30px rgba(0,0,0,0.15)',
      },

      /* =========================
         BLUR SYSTEM (TECH UI)
      ========================= */
      backdropBlur: {
        xs: '2px',
      },

      /* =========================
         ANIMATIONS
      ========================= */
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },

    },
  },

  plugins: [],
}
