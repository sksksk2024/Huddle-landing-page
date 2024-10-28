// tailwind.config.js
module.exports = {
  content: [
    "./*.html",  // Includes all HTML files in the root directory
    "./css/**/*.{css,js}", // This includes CSS and JS files in the 'css' folder
  ],
  theme: {
    extend: {
      screens: {
        '3xs': '0px',
        '2xs': '380px',
        'xs': '480px', // extra small screens
        'sm': '640px', // small screens
        'md': '768px', // medium screens
        'lg': '1024px', // large screens
        'xl': '1280px', // extra large screens
        '2xl': '1536px', // double extra large screens
      },
      colors: {
        primary: '#1da1f2',
        secondary: '#14171a',
        whitee: '#fff',
        violet: '#674baf',
        magenta: '#e882e8',
      },
      backgroundImage: {
        'main': "url('./images/illustration-mockups.svg')",
      },
      fontSize: {
        'sm': '0.1rem',
        'md': '1.4rem',
        'lg': '2rem',
      },
      fontWeight: {
        'normal': '400',
        'almost-bold': '600',
      },
      width: {
        'btn': '18rem',
        '50%': '50%',
      },
      height: {
        'btn': '4rem',
        'big': '80%',
      },
      padding: {
        'btn': '0.8rem',
      },
    },
  },
  plugins: [],
};