/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B3D2E', // Deep Forest Green
        secondary: '#1F3A5F', // Slate Blue
        accent: '#2BBBAD', // Teal
        neutral: {
          warm: '#F4F1EA', // Warm Neutral Background
          dark: '#1E2022', // Dark Grey Text
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
