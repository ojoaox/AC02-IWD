/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx,tsx,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'serif'],
      },
    },
  },
  plugins: [tailwindScrollbar],
};
