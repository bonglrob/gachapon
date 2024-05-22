'use client';

import { Klee_One, Noto_Sans_JP } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { Roboto } from 'next/font/google';

import '@fontsource/klee-one/400.css';
import '@fontsource/klee-one/600.css';
import '@fontsource/noto-sans-jp/300.css';
import '@fontsource/noto-sans-jp/400.css';
import '@fontsource/noto-sans-jp/500.css';
import '@fontsource/noto-sans-jp/700.css';
import { blue, red } from "@mui/material/colors";

const noto = Noto_Sans_JP({ subsets: ['latin'] });
const klee = Klee_One({ 
  weight: ['400', '600'],
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});


const theme = createTheme({
  palette: {
    primary: red,
    secondary: blue,
    error: red,
  },
  typography: {
    fontFamily: [
      klee.style.fontFamily, 
      noto.style.fontFamily
    ],
    h1: {fontFamily: klee.style.fontFamily},
    h2: {fontFamily: klee.style.fontFamily},
    h3: {fontFamily: klee.style.fontFamily},
    body1: {fontFamily: noto.style.fontFamily},
    body2: {fontFamily: noto.style.fontFamily},
  },
});

export default theme;

// include in Styles CSS 
// body {
//     font-family: 'Noto Sans JP', sans-serif;
//   }

// body {
//     font-family: 'Klee One', cursive;
//   }