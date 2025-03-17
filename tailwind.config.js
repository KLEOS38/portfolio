/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#1a365d', // Dark blue for primary branding
          800: '#2c5282',
          700: '#2b6cb0',
          600: '#3182ce',
          500: '#4299e1',
          400: '#63b3ed',
          300: '#90cdf4',
          200: '#bee3f8',
          100: '#ebf8ff',
        },
        gold: {
          900: '#744210',
          800: '#975a16',
          700: '#b7791f',
          600: '#d69e2e',
          500: '#ecc94b',
          400: '#f6e05e',
          300: '#faf089',
          200: '#fefcbf',
          100: '#fffff0',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#1a202c',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
} 