module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["retro"],
  },
};
