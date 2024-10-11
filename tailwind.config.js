/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      "bg-primary": "hsl(0, 0%, 98%)",
      "bg-secondary": "hsl(220, 16%, 96%)",
      "lime-green": "hsl(136, 65%, 51%)",
      "dark-blue": "hsl(233, 26%, 24%)",
      "bright-cyan": "hsl(192, 70%, 51%)",
      "grayish-blue": "hsl(233, 8%, 62%)",
      transparent: "transparent",
    },
  },
  plugins: [],
};

// ### Primary

// - Dark Blue: hsl(233, 26%, 24%)
// - Lime Green: hsl(136, 65%, 51%)
// - Bright Cyan: hsl(192, 70%, 51%)

// ### Neutral

// - Grayish Blue: hsl(233, 8%, 62%)
// - Light Grayish Blue: hsl(220, 16%, 96%)
// - Very Light Gray: hsl(0, 0%, 98%)
// - White: hsl(0, 0%, 100%)
