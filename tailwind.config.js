module.exports = {
  content: ["./*.html", "./**/*.html", "./js/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#0da6f2",
        "primary-glow": "#0da6f2",
        "secondary": "#7a2df6",
        "background-light": "#f5f7f8",
        "background-dark": "#0B1114",
        "surface-dark": "#162228",
        "surface-glass": "rgba(22, 34, 40, 0.7)",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "1.5rem",
        "xl": "2.5rem",
        "full": "9999px"
      },
      boxShadow: {
        'neon': '0 0 10px rgba(13, 166, 242, 0.5), 0 0 20px rgba(13, 166, 242, 0.3)',
        'neon-hover': '0 0 15px rgba(13, 166, 242, 0.8), 0 0 30px rgba(13, 166, 242, 0.5)',
        'card-glow': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(13, 166, 242, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
