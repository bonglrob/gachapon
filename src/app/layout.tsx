import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

export const metadata: Metadata = {
  title: "Gachapon",
  description: "Roll a random capsule!",
  icons: [ { url: '/img/favicon.ico', href: '/img/favicon.ico'} ]
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
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
