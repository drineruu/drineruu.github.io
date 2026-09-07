/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Metallic forest theme — British Racing / Hunter / Fern greens
        primary: {
          50: '#f3f7f2',
          100: '#e0ebe0',
          200: '#c0d5c0',
          300: '#8FBC8F', // sage — soft accents & tags
          400: '#7da86a', // light fern — readable text on dark
          500: '#4f7942', // Fern Green
          600: '#355e3b', // Hunter Green — primary CTAs
          700: '#2a4a2f', // deeper hover
          800: '#004225', // British Racing Green
          900: '#00331c',
          950: '#001a0f',
        },
        // Dark forest surfaces — tweak these hexes to lighten/darken the whole site
        surface: {
          950: '#0a100d',
          900: '#121a16', // page / header (body bg)
          800: '#1a2420', // cards / sections
          700: '#24332c', // inputs / elevated
          600: '#33453a', // borders / hover
          500: '#455a4c', // muted chrome
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
