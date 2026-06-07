/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0f1e",
        surface: "#111827",
        card: "#1a2235",
        border: "#1e2d45",
        accent: "#3b82f6",
        danger: "#ef4444",
        warning: "#f59e0b",
        success: "#10b981",
        muted: "#6b7280",
        text: "#f1f5f9",
      }
    },
  },
  plugins: [],
}