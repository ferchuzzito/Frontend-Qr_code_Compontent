/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontSize: {
      'xs': ['0.75rem', {
        lineHeight: '1rem',
      }],
      'title': ['1.25rem', {
        lineHeight: '1.25rem',
        fontWeight: '700',
      }],
      'paragraph': ['0.938rem', {
        lineHeight: '1.25rem',
        fontWeight: '400',
      }],
    },
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      White: "hsl(0, 0%, 100%)",
      LightGray: "hsl(212, 45%, 89%)",
      DarkBlue: "hsl(218, 44%, 22%)",
      GrayishBlue: "hsl(220, 15%, 55%)",
      blue: "hsl(228, 45%, 44%)",
    },
    fontFamily: {
      Outfit: ["Outfit", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
