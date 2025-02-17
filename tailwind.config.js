const config = require('./config.json');
const matrix = config.Matrix;

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // Map your light theme colors:
      'light-background': matrix.light.background,
      'light-foreground': matrix.light.foreground,
      'light-yellow': matrix.light.yellow,
      'light-green': matrix.light.green,
      'light-gray': matrix.light.gray,
      'light-blue': matrix.light.blue,
      'light-red': matrix.light.red,
      // Map your dark theme colors:
      'dark-background': matrix.dark.background,
      'dark-foreground': matrix.dark.foreground,
      'dark-green': matrix.dark.green,
      'dark-gray': matrix.dark.gray,
      'dark-blue': matrix.dark.blue,
      'dark-red': matrix.dark.red,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
