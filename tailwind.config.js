const plugin = require('flowbite/plugin');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      keyframes: {
        slideFromLeft: {
          '0%': { opacity: 0, transform: 'translateX(-20%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideFromRight: {
          '0%': { opacity: 0, transform: 'translateX(20%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        slideFromLeft: 'slideFromLeft 0.5s ease-out',
        slideFromRight: 'slideFromRight 0.5s ease-out',
        'scroll-x': 'scrollX 20s linear infinite',
      },
    },
  },
  plugins: [plugin],
  darkMode: 'class',
};
