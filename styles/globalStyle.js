import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
   dark: {
      primary: '#0A0910',
      secondary: '#0A0910',
      accent: '#FF2F29',
      text: '#FFFFFF',
      gradient: `linear-gradient(to right, #FF2F29, #0A0910 )`,
      gradient2: `linear-gradient(to bottom, rgba(10, 9, 16, 0.9), rgba(10, 9, 16, 0.99) )`,
      gradient3: `linear-gradient(to bottom, rgba(10, 9, 16, 0.3), rgba(10, 9, 16, 1) )`,
      neutral: '#11101c',
      neutral2: '#11101c',
      neutral3: 'rgba(255, 255, 255, 0.15)',
   },

   light: {
      primary: '#FFFFFF',
      secondary: '#F4F4F4',
      accent: '#FF2F29',
      text: '#0A0910',
      gradient: `linear-gradient(to right, #FF2F29,#FFFFFF )`,
      gradient2: `linear-gradient(to bottom, rgba(255,255,255, 0.9) ,rgba(255,255,255, 0.99) )`,
      gradient3: `linear-gradient(to bottom, rgba(255,255,255, 0.3) ,rgba(255,255,255, 1) )`,
      neutral: '#EAEAEA',
      neutral2: '#333',
      neutral3: 'rgba(0, 0, 0, 0.15)',
   },
};

const variables = {
   fonts: {
      // primary: `'Comfortaa', cursive`,
      // secondary: `'Comfortaa', cursive`,
      primary: `'Alegreya', serif`,
      secondary: `'Lato', sans-serif`,
   },
   weights: {
      normal: 400,
      semiBold: 600,
      bold: 700,
   },
   sizes: {
      xsmall: '12px',
      small: '14px',
      normal: '16px',
      medium: '18px',
      large: '20px',
      xlarge: '24px',
   },
   headings: {
      xsmall: '16px',
      small: '18px',
      normal: '20px',
      medium: '24px',
      large: '30px',
      xlarge: '40px',
      xxlarge: '48px',
   },
   roundings: {
      small: '2px',
      medium: '8px',
      large: '16px',
   },
   misc: {
      spacing: '2px',
      transitionEase: 'all 0.2s linear',
      transitionEase1: 'all 0.5s ease-in-out',
      shadow: '5px 5px 20px 0 rgb(0 0 0 / 6%)',
   },
};

const breakpoints = {
   mobile: 400,
   phablet: 550,
   tablet: 768,
   desktop: 1024,
   hd: 1280,
};

const dimensions = {
   headerHeight: {
      mobile: '75px',
      desktop: '80px',
   },
   containerWidth: {
      mobile: 95,
      desktop: 85,
   },
   cartWidthDesktop: '400px',
   maxWidth: '1600px',
};

const GlobalStyle = createGlobalStyle`
   *, ::before, ::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
   }

   html {
      position: relative;
   }

   body {
      font-family: ${variables.fonts.secondary};
      font-weight: ${variables.weights.normal};
      max-width: ${dimensions.maxWidth};
      background: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.text};
      line-height: 1.6;
      overflow-x: hidden;
   }
   
   main {
      min-height:calc(100vh - ${dimensions.headerHeight.mobile}); 
      
      @media screen and (min-width:${breakpoints.desktop}px) {
         min-height:calc(100vh - ${dimensions.headerHeight.desktop}px);
      }
   }

   img {
      width: 100%;
   }
   
   h1, h2, h3, h4, h5, h6 {
      font-family: ${variables.fonts.primary};
      font-weight: ${variables.weights.normal};
      margin-bottom: ${variables.sizes.normal};
   }

   h1 {
         @media screen and (min-width:${breakpoints.desktop}px) {
         font-size: ${variables.headings.xlarge}
      }
   }

   h2 {
         @media screen and (min-width:${breakpoints.desktop}px) {
         font-size: ${variables.headings.large}
      }
   }

   h3 {
         @media screen and (min-width:${breakpoints.desktop}px) {
         font-size: ${variables.headings.medium}
      }
   }

   h4 {
         @media screen and (min-width:${breakpoints.desktop}px) {
         font-size: ${variables.headings.normal}
      }
   }
   
   p {
      margin-bottom: ${variables.sizes.normal};
   }

   a {
      text-decoration: none;
      color:${(props) => props.theme.text}
   }

   ul {
      list-style:none;
   }
   
   section {
      padding: 3rem 0;
      
      @media screen and (min-width:${breakpoints.desktop}px) {
         padding: 5rem 0;
      }
   }
   
   .btn {
      cursor: pointer;
      display: inline-block;
     font-family: ${variables.fonts.secondary};
     font-weight: ${variables.weights.normal};
      background: ${(props) => props.theme.accent}; 
      color: white; 
      border-radius: ${variables.roundings.medium};
      border: none;
      outline: none;
      transition: ${variables.misc.transitionEase};
      padding: 0.75rem 1rem;
      
      &:hover {
         background: ${(props) => props.theme.text}; 
         color: ${(props) => props.theme.primary}; 
         
         
      }

      @media screen and (min-width:${breakpoints.desktop}px) {
         padding: 1rem 2rem;
      }
   }
   
   .small-btn {
      background: none;
      outline: none;
      border: none;
      cursor: pointer;
      font-size: 2rem;
   }

   
   
`;
const ThemeContext = ({ children, darkMode }) => (
   <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      {children}
   </ThemeProvider>
);

export { GlobalStyle, ThemeContext, variables, breakpoints, dimensions };
