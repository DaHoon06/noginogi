import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#CCE4F0',
          1: '#99c9e2',
          2: '#66add3',
          4: '#3392c5',
        },
        light: {
          text: {
            DEFAULT: '#222222',
            1: '#ced4da',
            2: '#868e96',
            3: '#495057',
          },
        },
        dark: {
          text: {
            DEFAULT: '#ececec',
            1: '#d9d9d9',
            2: '#acacac',
            3: '#595959',
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
