/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        primary: '#F40404',
      },
      maxWidth:{
        continer:'1144px',

      },
      fontFamily: {
        'pops': ['Poppins', 'sans-serif'],
        
      },
      backgroundImage: {
        'baner': "url('./assets/baner.png')",
        'p1': "url('./assets/p1.png')",
        'p2': "url('./assets/p-2.png')",
        'p3': "url('./assets/p-3.png')",
        'p4': "url('./assets/p-4.png')",
        's1': "url('./assets/s1.png')",
        's2': "url('./assets/s2.png')",
        's3': "url('./assets/s3.png')",
        'about': "url('./assets/about-c.png')",
        'red1': "url('./assets/redmore1.png')",
        'red2': "url('./assets/redmore2.png')",
        'red3': "url('./assets/redmore3.png')",
   

       
      }
    },
  },
  plugins: [],
}
