/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./resources/**/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.tsx",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

