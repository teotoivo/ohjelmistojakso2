/** @type {import('tailwindcss').Config} */

/**
  ## Colors

### Primary

- Blue: hsl(246, 80%, 60%)

- Light red (work): hsl(15, 100%, 70%)
- Soft blue (play): hsl(195, 74%, 62%)
- Light red (study): hsl(348, 100%, 68%)
- Lime green (exercise): hsl(145, 58%, 55%)
- Violet (social): hsl(264, 64%, 52%)
- Soft orange (self care): hsl(43, 84%, 65%)

### Neutral

- Very dark blue: hsl(226, 43%, 10%)
- Dark blue: hsl(235, 46%, 20%)
- Desaturated blue: hsl(235, 45%, 61%)
- Pale Blue: hsl(236, 100%, 87%)

## Typography

### Body Copy

- Font size: 18px (card titles e.g. Work, Play)

### Font

- Family: [Rubik](https://fonts.google.com/specimen/Rubik)
- Weights: 300, 400, 500
 */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "hsl(246, 80%, 60%)",
        primaryLightRed: "hsl(15, 100%, 70%)",
        primarySoftBlue: "hsl(195, 74%, 62%)",
        primaryLightRed: "hsl(348, 100%, 68%)",
        primaryLimeGreen: "hsl(145, 58%, 55%)",
        primaryViolet: "hsl(264, 64%, 52%)",
        primarySoftOrange: "hsl(43, 84%, 65%)",
        neutralVeryDarkBlue: "hsl(226, 43%, 10%)",
        neutralDarkBlue: "hsl(235, 46%, 20%)",
        neutralDesaturatedBlue: "hsl(235, 45%, 61%)",
        neutralPaleBlue: "hsl(236, 100%, 87%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      fontSize: {
        body: "18px",
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
      },
      gridTemplateColumns: {
        grid: "repeat(4, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        grid: "repeat(2, minmax(0, fit-content))",
      },
    },
  },
  plugins: [],
};
