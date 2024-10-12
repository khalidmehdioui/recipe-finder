/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#58D68D',   
        secondary: '#58D68D', 
        accent: '#A5A58D',    
        dark: '#6B705C'      
      },
    },
  },
  plugins: [], 
};

