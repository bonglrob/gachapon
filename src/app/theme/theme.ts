'use client';

import { Klee_One, Noto_Sans_JP } from "next/font/google";
import { createTheme, styled } from "@mui/material/styles";

import '@fontsource/klee-one/400.css';
import '@fontsource/klee-one/600.css';
import '@fontsource/noto-sans-jp/300.css';
import '@fontsource/noto-sans-jp/400.css';
import '@fontsource/noto-sans-jp/500.css';
import '@fontsource/noto-sans-jp/700.css';
import { dark, light } from "@mui/material/styles/createPalette";


const noto = Noto_Sans_JP({ subsets: ['latin'] });
const klee = Klee_One({ 
  weight: ['400', '600'],
  subsets: ['latin'],
});


declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}


const theme = createTheme({
  palette: {
    primary: {
      main: '#904a42'
    },
    secondary: {
      main: '#775652'
    },
    error: {
      main: '#ba1a1a'
    }
  },
  typography: {
    h1: {fontFamily: klee.style.fontFamily},
    h2: {fontFamily: klee.style.fontFamily},
    h3: {fontFamily: klee.style.fontFamily},
    h4: {fontFamily: klee.style.fontFamily},
    h5: {fontFamily: klee.style.fontFamily},
    h6: {fontFamily: klee.style.fontFamily},
    subtitle1: {fontFamily: klee.style.fontFamily},
    subtitle2: {fontFamily: klee.style.fontFamily},
    body1: {fontFamily: noto.style.fontFamily},
    body2: {fontFamily: noto.style.fontFamily},
    button: {fontFamily: noto.style.fontFamily},
    caption: {fontFamily: noto.style.fontFamily},
    overline: {fontFamily: noto.style.fontFamily},
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    }
  }
});

theme.typography.h4 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('tablet')]: {
    fontSize: '2.4rem',
  },
};

export default theme;