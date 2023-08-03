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
      colors: {
        // primary

        dark: {
          50: '#F7F7F7', // black-50
          200: '#C8C8C8', // black-200
          600: '#515151', // black-600
          900: '#0D0D0D', // black-900
        },

        success: {
          500: '#27AE60',
        },

        warning: {
          500: '#F2C94C',
        },

        error: {
          500: '#EB5757',
        },

        info: {
          100: '#DDECFC',
          400: '#2F80ED', // blue 1
          500: '#3C79E1',
        },

        // background
      },
      spacing: {
        'header-height': 'var(--header-height)',
      },
    },
  },

  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        // ทำให้มี space ซ้ายขวา
        '.main-space-x': {
          padding: `0px ${theme(`spacing.16`)}`,
          '@media (max-width: 1280px)': {
            padding: `0px ${theme(`spacing.12`)}`,
          },
          '@media (max-width: 768px)': {
            padding: `0px ${theme(`spacing.8`)}`,
          },
          '@media (max-width: 640px)': {
            padding: `0px ${theme(`spacing.4`)}`,
          },
        },

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
