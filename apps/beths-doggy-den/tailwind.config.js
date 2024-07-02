const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const plugin = require('tailwindcss/plugin');

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    },
    '.transform-3d': {
      'transform-style': 'preserve-3d',
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.rotate-y-0': {
      transform: 'rotateY(0deg)',
    },
    '.transform-style-3d': {
      transformStyle: 'preserve-3d',
    },
    '.perspective-1000': {
      perspective: '1000px',
    },
  });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7bce98',
      },
    },
  },
  plugins: [backfaceVisibility],
};
