import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import sound from '../app/lever.wav'


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
            <audio src={sound} controls>
              {/* src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3" */}
            </audio>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
