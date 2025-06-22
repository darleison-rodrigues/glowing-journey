/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-slate-blue': '#F0F4F8', // Primary Background
        'pure-white': '#FFFFFF',       // Secondary Background / Card background
        'dark-charcoal': '#1A202C',    // Primary Text
        'medium-gray': '#4A5568',      // Secondary Text
        'electric-blue': '#007BFF',    // Accent 1 - Primary CTAs, Highlights
        'amethyst-purple': '#8A2BE2',  // Accent 2 - Secondary Highlights
        'luminous-pink': '#FC72C1',    // NEW: Pinkish Accent
        'light-gray-border': '#CBD5E0',// Borders, Dividers
        'success-green': '#28A745',
        'error-red': '#DC3545',
      },
      boxShadow: {
        'smooth': '0 4px 12px rgba(0, 0, 0, 0.08)', // Subtle, modern shadow
        'lg-smooth': '0 10px 25px rgba(0, 0, 0, 0.1)', // More pronounced shadow
      },
      keyframes: { // For simple animations
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blob: { // For the hero section's abstract shapes
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        slideDown: 'slideDown 0.3s ease-out forwards',
        blob: 'blob 7s infinite cubic-bezier(0.6, 0.01, 0.2, 1)',
      },
    },
  },
  plugins: [],
}