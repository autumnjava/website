import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      body: ['Inter', 'system-ui', 'sans-serif', 'Arial'],
    },
    extend: {
      colors: {
        darkGreenGray: '#283618',
        lightGrayGreen: '#B7B7A4',
        lightGreen: '#88b779',
        accentGreen: '#7edc90',
      },
    },
  },
  plugins: [],
};
export default config;
