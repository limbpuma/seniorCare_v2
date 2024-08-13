/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: '#161616', 
        white: '#ffffff',
        "light-gray": '#bababa', 
        "gray-blue": '#bfd2d7', 
        "soft-blue": '#5a8bba', 
        "deep-blue": '#084487', 
        "soft-beige": '#ffedcc', 
        "soft-orange": '#F1C097',
        primary: '#084487', 
        accent: '#FFDAA3',
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'medium': '0 5px 15px rgba(0, 0, 0, 0.15)',
        'hard': '0 10px 20px rgba(0, 0, 0, 0.2)'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      borderRadius: {
        'xl': '1rem'
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
        'opacity': 'opacity'
      },
      opacity: {
        '85': '0.85',
        '80': '0.80',
      },
    },
    fontFamily: {
      'ag-h1': ['Montserrat', 'sans-serif'],
      'ag-h2': ['Montserrat', 'sans-serif'],
      'ag-h3': ['Montserrat', 'sans-serif'],
      'ag-h4': ['Montserrat', 'sans-serif'],
      'ag-h5': ['Montserrat', 'sans-serif'],
      'ag-h6': ['Montserrat', 'sans-serif'],
      'ag-sub-heading': ['Montserrat', 'sans-serif'],
      'ag-button-text': ['Montserrat', 'sans-serif'],
      'ag-body-text': ['Montserrat', 'sans-serif'],
      'ag-testimonial-text': ['Montserrat', 'sans-serif'],
      'ag-list-text': ['Montserrat', 'sans-serif'],
      'ag-404-text': ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      'ag-h1': ['128px', { fontWeight: '700', lineHeight: 'auto' }], // Bold
      'ag-h2': ['64px', { fontWeight: '700', lineHeight: '74px' }], // Bold
      'ag-h3': ['48px', { fontWeight: '700', lineHeight: '58px' }], // Bold
      'ag-h4': ['36px', { fontWeight: '700', lineHeight: '46px' }], // Bold
      'ag-h5': ['24px', { fontWeight: '700', lineHeight: '34px' }], // Bold
      'ag-h6': ['28px', { fontWeight: '700', lineHeight: '28px' }], // Bold
      'ag-sub-heading': ['18px', { fontWeight: '500', lineHeight: 'auto' }], // Medium
      'ag-button-text': ['16px', { fontWeight: '600', lineHeight: 'auto' }], // Semibold
      'ag-body-text': ['16px', { fontWeight: '500', lineHeight: '26px' }], // Medium
      'ag-testimonial-text': ['21px', { fontWeight: '600', fontStyle: 'italic', lineHeight: '31px' }], // Semibold Italic
      'ag-list-text': ['16px', { fontWeight: '500', lineHeight: '46px' }], // Medium
      'ag-404-text': ['269px', { fontWeight: '700', lineHeight: 'auto' }], // Bold
    },
  },
    
  
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
  ],
};


