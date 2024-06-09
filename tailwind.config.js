/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    colors: {
    'blanco': '#f4f4eb',
    'amarillo': '#ffd00d',
    'fuxia' : '#ff0d5f',
    'negro' : '#333333',
    'rosa': '#feade7',
    'white' : '#ffffff',
    'black' : '#101010',
    
  },
  
    extend: {
      fontFamily: {
        effra_cc: ['effra-cc', 'sans-serif'],
      },
      backgroundImage:{
        'contact': "url('assets/img/contacto/fondocontacto.png')",
      }
    },
  },
  plugins: [],
}