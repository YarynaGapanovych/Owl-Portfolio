const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emperor: "#4f474d",
        "emperor-muted": "#4f474d4c",
        test: "#803c1a",
      },
    },
  },
};

export default config;
