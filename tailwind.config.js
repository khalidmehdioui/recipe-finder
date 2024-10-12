/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008B8B',   
        secondary: '#008B8B', 
        accent: '#008B8B',    
        dark: '#008B8B'      
      },
    },
  },
  plugins: [], 
};

