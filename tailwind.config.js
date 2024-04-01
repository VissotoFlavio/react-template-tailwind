/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '768px',
        lg: '1024px',
        '2lg': '1280px',
        xl: '1366px',
        '2xl': '1440px',
      },
    },
    screens: {
      sm: '390px',
      '2sm': '600px',
      md: '768px',
      lg: '1024px',
      '2lg': '1280px',
      xl: '1366px',
      '2xl': '1440px',
      '3xl': '1536px',
      '4xl': '1920px',
    },
    extend: {},
  },
  plugins: [],
};
