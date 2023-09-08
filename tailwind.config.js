/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      nunito: "nunito",
      poppins: "poppins",
      actor: "actor",
      cabinet: "cabinet",
      outfit: "outfit",
    },
    extend: {
      backgroundImage: {
        "services-bg": "url(/images/ourServicesBG.svg)",

        "auth-bg": "url(/images/auth-bg.svg)",
        "home-hs": "url(/images/land-hs.svg)",
        'whoarewebg': "url(/images/whoone.svg)",
        "left-stand": "url(/images/left-stand.svg)",
        "right-stand": "url(/images/right-stand.svg)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      nunito: "nunito",
      cabinet: "cabinet",
      outfit: "outfit",
    },
  },
  plugins: [],
};
