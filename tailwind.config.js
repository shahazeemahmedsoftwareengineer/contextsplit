/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          peach:    "#FDF0ED",
          lavender: "#F4EFFF",
          purple:   "#8B5CF6",
          charcoal: "#1A1A1A",
          yellow:   "#FDE047",
          blue:     "#60A5FA",
          gray:     "#F7F7F8",
          muted:    "#6B7280",
        },
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "sans-serif"],
        body:    ["'DM Sans'", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(139,92,246,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        card:  "0 4px 24px rgba(0,0,0,0.06)",
        hero:  "0 32px 80px rgba(139,92,246,0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.7" },
        },
      },
      animation: {
        "fade-up":    "fade-up 0.6s ease-out both",
        "fade-up-d1": "fade-up 0.6s 0.1s ease-out both",
        "fade-up-d2": "fade-up 0.6s 0.2s ease-out both",
        "fade-up-d3": "fade-up 0.6s 0.3s ease-out both",
        "float":      "float 4s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
