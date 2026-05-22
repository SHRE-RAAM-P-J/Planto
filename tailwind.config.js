/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#0D1B0E',
          100: '#0D1B0E',
          200: '#132015',
          300: '#1A2B1C',
          400: '#223324',
          500: '#2C3E2E',
        },
        green: {
          primary: '#4CAF50',
          light:   '#6ECB63',
          bright:  '#8BC34A',
          muted:   '#3D7A41',
          pale:    '#C8E6C9',
        },
        cream:  '#F5F0E8',
        offwhite: '#E8F5E9',
      },
      borderRadius: {
        'card': '56px',
        '4xl':  '2rem',
        '5xl':  '2.5rem',
      },
      boxShadow: {
        'card': '0 8px 40px rgba(0,0,0,0.4)',
        'glow': '0 0 32px rgba(76,175,80,0.25)',
        'btn':  '0 4px 20px rgba(76,175,80,0.4)',
      },
      backgroundImage: {
        'radial-green': 'radial-gradient(ellipse 60% 60% at 60% 40%, rgba(76,175,80,0.18) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
