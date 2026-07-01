/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ✅ Force hex/rgb colors instead of oklch
      colors: {
        background: "#ffffff",        // white
        foreground: "#000000",        // black
        card: "#f9fafb",              // light gray
        "muted-foreground": "#6b7280" // gray-500
      },
    },
  },
  plugins: [],
}
