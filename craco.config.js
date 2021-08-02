/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  webpack: {
    alias: {
      '@icons': path.join(path.resolve(__dirname, './src/assets/icons.js')),
      '@assets': path.join(path.resolve(__dirname, './src/assets')),
      '@src': path.join(path.resolve(__dirname, './src')),
    },
  },
};
