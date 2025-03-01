/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/{App,app,Error,error}.vue",
    "./src/{components,layouts,pages,composables,plugins}/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        
      },
      fontFamily: {
        
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
