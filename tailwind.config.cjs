/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte,html,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        header: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
