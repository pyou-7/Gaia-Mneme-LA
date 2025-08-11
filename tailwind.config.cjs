/** Tailwind config for Gaia Mnémé */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0b0c',        // deep charcoal
        card: '#121217',      // card surface
        text: '#e8e9ee',
        muted: '#9aa3b2',
        brand: '#A3B18A',     // Soft Sage (primary)
        brand2: '#D9C79E',    // light platinum/champagne (accent)
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Fraunces', 'ui-serif'],
      },
      boxShadow: {
        soft: '0 10px 24px rgba(0,0,0,0.25)',
      },
      borderRadius: {
        xl2: '1rem',
      }
    },
  },
  plugins: [],
};