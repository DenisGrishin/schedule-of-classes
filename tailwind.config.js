/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightPurple: '#EEEEFF',
        purple: '#8D7FC7',
        whiteMain: '#FDFDFF',
        whiteMain: '#FDFDFF',
        textSidebar: '#434B74',
        textMain: '#323854',
        green: '#38c21f',
        greenBorder: '#BBE7B9',
        redColor: '#E12828',
        blue: '#008AFF',
        borderPurple: '#7362BC',
      },
    },
    screens: {
      smallMobile: '360px',
      // => @media (min-width: 640px) { ... }
      mobile: '430px',
      tablet: '768px',
      // => @media (min-width: 768px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
