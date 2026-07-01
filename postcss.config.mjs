export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 1,
      features: {
        "color-function": { preserve: false },
        "oklab-function": { preserve: false },
        "oklch-function": { preserve: false },
      },
    },
  },
}
