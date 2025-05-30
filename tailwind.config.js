// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          500: "#64748b",
          600: "#475569",
          800: "#1e293b",
        },
      },
    },
  },
};
