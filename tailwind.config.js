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
        White: "hsl(0, 0%, 100%)",
        PaleBlue: "hsl(221, 100%, 96%)",
        LightLavender: "hsl(241, 100%, 89%)",
        DarkGrayBlue: "hsl(224, 30%, 27%)",
        LightRed: "hsl(0, 100%, 67%)",
        OrangeyYellow: "hsl(39, 100%, 56%)",
        GreenTeal: "hsl(166, 100%, 37%)",
        CobaltBlue: "hsl(234, 85%, 45%)",
        GlassyRed: "hsla(0, 100%, 67%, 0.1)",
        GlassyOYellow: "hsla(39, 100%, 56%, 0.1)",
        GlassyTeal: "hsla(166, 100%, 37%, 0.1)",
        GlassyCobalt: "hsla(234, 85%, 45%, 0.1)",
        LightSlateBlueBg: "hsl(252, 100%, 67%)",
        LightRoyalBlueBg: "hsl(241, 81%, 54%)",
        VioletBlueCir: "hsla(256, 72%, 46%, 1)",
        PersianBlueCir: "hsla(241, 72%, 46%, 0)",
      }
    },
  },
  plugins: [],
}
