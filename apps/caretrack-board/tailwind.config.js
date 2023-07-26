const {createGlobPatternsForDependencies} = require('@nx/angular/tailwind');
const {join} = require('path');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      primary: colors.rose,
      secondary: colors.emerald,
      neutral: colors.slate,
      error: colors.red,
      gray : colors.gray,
      white: '#ffffff',
      black: '#000000',
    },

  },
  plugins: [],
};
