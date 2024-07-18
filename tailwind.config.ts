import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: '#FAFAFA',
      purple: '#855FB1',
      lightpurple: '#D9B8FF',
      teal: '#4D96A9',
      black: '#28283D',
      gray: '#87879D',
      lightblue: '#8FE3F9'
    },
    fontFamily: {
      'redhat': 'Red Hat'
    },
    fontSize: {
      headingxl: '64px',
      headingm: '40px',
      body: '18px',
      overline: '16px',
    },
    lineHeight: {
      headingxl: '64px',
      headingm: '44px',
      body: '26px',
      overline: '26px',
    },
    letterSpacing: {
      overline: '4px'
    },

    extend: {

    },
  },
  plugins: [],
};
export default config;
