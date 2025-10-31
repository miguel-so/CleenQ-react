import { defaultSystem, createSystem, defineConfig } from '@chakra-ui/react'

// Custom theme with color tokens, typography, and fonts
// Create system by extending default system config
const system = createSystem(
  defaultSystem._config,
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
          heading: { value: 'Archivo Narrow, sans-serif' },
          body: { value: 'Poppins, sans-serif' },
        },
      },
      textStyles: {
        // LG Med, 18/Auto
        'lg-med': {
          fontSize: '18px',
          lineHeight: 'normal',
          fontWeight: 500,
        },
        // LG Bold, 18/Auto
        'lg-bold': {
          fontSize: '18px',
          lineHeight: 'normal',
          fontWeight: 700,
        },
        // H1, 70/100
        h1: {
          fontSize: '70px',
          lineHeight: '100%',
        },
        // XL Med, 24/150
        'xl-med': {
          fontSize: '24px',
          lineHeight: '150%',
          fontWeight: 500,
        },
        // Button Text, 18/Auto
        'button-text': {
          fontSize: '18px',
          lineHeight: 'normal',
        },
        // Sm Bold, 14/140
        'sm-bold': {
          fontSize: '14px',
          lineHeight: '140%',
          fontWeight: 700,
        },
        // LG Reg, 18/160
        'lg-reg': {
          fontSize: '18px',
          lineHeight: '160%',
          fontWeight: 400,
        },
        // H2, 50/110
        h2: {
          fontSize: '50px',
          lineHeight: '110%',
        },
        // LG Med, 18/160 (duplicate name, using different key)
        'lg-med-160': {
          fontSize: '18px',
          lineHeight: '160%',
          fontWeight: 500,
        },
        // H3, 30/110
        h3: {
          fontSize: '30px',
          lineHeight: '110%',
        },
        // H4, 24/110
        h4: {
          fontSize: '24px',
          lineHeight: '110%',
        },
        // MD Reg, 16/160
        'md-reg': {
          fontSize: '16px',
          lineHeight: '160%',
          fontWeight: 400,
        },
        // Button Text 2, 14/Auto
        'button-text-2': {
          fontSize: '14px',
          lineHeight: 'normal',
        },
        // H5, 36/110
        h5: {
          fontSize: '36px',
          lineHeight: '110%',
        },
        // Sm Reg, 14/Auto
        'sm-reg': {
          fontSize: '14px',
          lineHeight: 'normal',
          fontWeight: 400,
        },
        // LG Sm Bold, 18/160
        'lg-sm-bold': {
          fontSize: '18px',
          lineHeight: '160%',
          fontWeight: 700,
        },
      },
    },
  })
)

export default system

