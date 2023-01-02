/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'query': { 'raw': '(max-width:1100px)' },
        'queryH': {'raw': '(max-width:1250px)'},
        'tablets': {'raw': "(max-width:1050px)"},
        "smalltablets": {'raw': "(max-width:750px)"},
        "mobile": {'raw': "(max-width:500px)"},
        "smallmobile": {'raw': "(max-width:330px)"}
      }
    },
  },
  plugins: [],
}
