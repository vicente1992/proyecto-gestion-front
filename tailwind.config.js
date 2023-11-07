/** @type {import('tailwindcss').Config} */

const colors = {
  // DaisyUI
  'base-100': '#ffffff',
  primary: '#005154',
  secondary: '#4d8587',
  accent: '#ffdca8',
  neutral: '#282b30',
  info: '#0597e1',
  success: '#49a271',
  warning: '#fcf282',
  error: '#ff5e5c',

  // Custom
  ground: '#ffffff',
  bloom: '#282b30',
  smoke: '#e8f0f0',
  soot: '#798586',
};
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{ light: colors }]
  },
  theme: {
    extend: { colors }
  }
}

