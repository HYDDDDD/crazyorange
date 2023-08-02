const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        'header-height': 'var(--header-height)',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        // Base Container
        '.container': {
          margin: '0 auto',
          maxWidth: '1280px',
          '@media (max-width: 1280px)': {
            maxWidth: '100%',
          },
        },
      })
    }),
  ],
}
