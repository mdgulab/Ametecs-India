// tailwind.config.js
module.exports = {
  darkMode: "class", // <<< keep your existing dark-mode setup
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Override Tailwind's "blue" scale so existing classes map to your new color.
        blue: {
          50:  '#e9f4f7',
          100: '#cfe9ef',
          200: '#a9d8e0',
          300: '#82c6d0',
          400: '#4daec0',
          500: '#1a97b0',
          600: '#006699', // <-- your primary color
          700: '#005580',
          800: '#004466',
          900: '#00334d',
        },
        // Optional: provide a named primary for direct use (bg-primary, text-primary)
        primary: {
          DEFAULT: '#006699',
          600: '#006699',
        },
      },
    },
  },
  plugins: [],
};
