/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          // "primary": "#0081ff",
          "primary": "#61dafb",

          "secondary": "#00b9b6",

          "accent": "#00fd00",

          "neutral": "#17170c",

          "base-100": "#ffffff",

          "info": "#00dfff",

          "success": "#00d744",

          "warning": "#ab7700",

          "error": "#ff4d71",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
  // daisyUI config (optional - here are the default values)
  // themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  // themes: ["bumblebee"],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {

  //         "primary": "#00b2ff",

  //         "secondary": "#00a7ff",

  //         "accent": "#b80000",

  //         "neutral": "#050302",

  //         "base-100": "#3a2637",

  //         "info": "#00aeea",

  //         "success": "#00a260",

  //         "warning": "#dc3700",

  //         "error": "#ff8083",
  //       },
  //     },
  //   ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  //   darkTheme: "dark", // name of one of the included themes for dark mode
  //   base: true, // applies background color and foreground color for root element by default
  //   styled: true, // include daisyUI colors and design decisions for all components
  //   utils: true, // adds responsive and modifier utility classes
  //   prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
  //   logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  //   themeRoot: ":root", // The element that receives theme color CSS variables
  // },
}

