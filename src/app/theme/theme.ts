'use client';

import { Klee_One, Noto_Sans_JP } from "next/font/google";
import { createTheme, PaletteColorOptions } from "@mui/material/styles";
import Button, { ButtonPropsColorOverrides } from "@mui/material/Button";
import { ChipProps as MuiChipProps } from "@mui/material/Chip";

import '@fontsource/klee-one/400.css';
import '@fontsource/klee-one/600.css';
import '@fontsource/noto-sans-jp/300.css';
import '@fontsource/noto-sans-jp/400.css';
import '@fontsource/noto-sans-jp/500.css';
import '@fontsource/noto-sans-jp/700.css';


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
  interface Palette {
    outline: PaletteColorOptions;
    gachared: PaletteColorOptions;
    gachablue: PaletteColorOptions;
    gachagreen: PaletteColorOptions;
    gachayellow: PaletteColorOptions;
  }
  interface PaletteOptions {
    outline: PaletteColorOptions;
    gachared: PaletteColorOptions;
    gachablue: PaletteColorOptions;
    gachagreen: PaletteColorOptions;
    gachayellow: PaletteColorOptions;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    outline: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    gachared: true;
  }
}

// interface ChipProps extends MuiChipProps {
//   color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'gachared' | 'gachablue' | 'gachayellow' | 'gachagreen';
// }

const { palette } = createTheme();
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
    },
    outline: palette.augmentColor({
      color: {
        main: 'rgba(168, 168, 168, 0.25)'
      }
    }),
    gachared: palette.augmentColor({
      color: {
        main: '#E6392D'
      }
    }),
    gachablue: palette.augmentColor({
      color: {
        main: '#0084CB'
      }
    }),
    gachagreen: palette.augmentColor({
      color: {
        main: '#82BA1B'
      }
    }),
    gachayellow: palette.augmentColor({
      color: {
        main: '#F9B300'
      }
    }),
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