/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <--- This forces the toggle to work
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        android: "#3DDC84",
      },
    },
  },
  plugins: [],
};