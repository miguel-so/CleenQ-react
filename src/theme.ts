import {
  defaultConfig,
  createSystem,
  defineTextStyles,
  defineConfig,
} from '@chakra-ui/react';

export const textStyles = defineTextStyles({
  'lg-med': {
    value: {
      fontSize: '18px',
      lineHeight: 'normal',
      fontWeight: 500,
    },
  },
  'lg-bold': {
    value: {
      fontSize: '18px',
      lineHeight: 'normal',
      fontWeight: 700,
    },
  },
  h1: {
    value: {
      fontSize: '70px',
      lineHeight: '100%',
    },
  },
  'xl-med': {
    value: {
      fontSize: '24px',
      lineHeight: '150%',
      fontWeight: 500,
    },
  },
  'button-text': {
    value: {
      fontSize: '18px',
      lineHeight: 'normal',
    },
  },
  'sm-bold': {
    value: {
      fontSize: '14px',
      lineHeight: '140%',
      fontWeight: 700,
    },
  },
  'lg-reg': {
    value: {
      fontSize: '18px',
      lineHeight: '160%',
      fontWeight: 400,
    },
  },
  h2: {
    value: {
      fontSize: '50px',
      lineHeight: '110%',
    },
  },
  'lg-med-160': {
    value: {
      fontSize: '18px',
      lineHeight: '160%',
      fontWeight: 500,
    },
  },
  h3: {
    value: {
      fontSize: '30px',
      lineHeight: '110%',
    },
  },
  h4: {
    value: {
      fontSize: '24px',
      lineHeight: '110%',
    },
  },
  'md-reg': {
    value: {
      fontSize: '16px',
      lineHeight: '160%',
      fontWeight: 400,
    },
  },
  'button-text-2': {
    value: {
      fontSize: '14px',
      lineHeight: 'normal',
    },
  },
  h5: {
    value: {
      fontSize: '36px',
      lineHeight: '110%',
    },
  },
  'sm-reg': {
    value: {
      fontSize: '14px',
      lineHeight: 'normal',
      fontWeight: 400,
    },
  },
  'lg-sm-bold': {
    value: {
      fontSize: '18px',
      lineHeight: '160%',
      fontWeight: 700,
    },
  },
});

const system = createSystem(
  defaultConfig,
  defineConfig({
    globalCss: {
      body: {
        fontFamily: 'Poppins, sans-serif',
      },
    },
    theme: {
      tokens: {
        colors: {
          primary: {
            50: { value: '#e6f2ff' },
            100: { value: '#b3d9ff' },
            200: { value: '#80bfff' },
            300: { value: '#4da6ff' },
            400: { value: '#1a8cff' },
            500: { value: '#008AFE' },
            600: { value: '#0070cc' },
            700: { value: '#005699' },
            800: { value: '#003d66' },
            900: { value: '#002333' },
          },
          secondary: {
            50: { value: '#e8f9e0' },
            100: { value: '#c4f0b8' },
            200: { value: '#a0e790' },
            300: { value: '#7cde68' },
            400: { value: '#68d64e' },
            500: { value: '#52C90E' },
            600: { value: '#42a10b' },
            700: { value: '#317908' },
            800: { value: '#215106' },
            900: { value: '#102803' },
          },
          dark: { value: '#0D1319' },
          white: { value: '#FFFFFF' },
        },
        fonts: {
          heading: { value: 'Poppins, sans-serif' },
          body: { value: 'Poppins, sans-serif' },
        },
      },
      textStyles,
    },
  })
);

export default system;
