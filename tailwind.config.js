/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "foreground-element": "var(--foreground-element)",
        "foreground-element-2": "var(--foreground-element-2)",
        "primary-text": "var(--primary-text)",
        "secondary-text": "var(--secondary-text)",
        "special-text": "var(--special-text)",
      },
    },
  },
  plugins: [],
};
