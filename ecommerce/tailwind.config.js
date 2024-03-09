/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],


theme: {
  extend:{
     colors:{
 primary:'#5f12d9',
    },
  },
},

  plugins: [],
};
