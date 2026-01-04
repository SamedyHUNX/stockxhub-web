import type { Metadata } from "next";
import { IBM_Plex_Sans_Condensed } from "next/font/google";
import ThemeProvider from "@/providers/ThemeProvider";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  variable: "--font-plex-m",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "StockXHub",
  description: "A StockXHub Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexSansCondensed} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#fff",
                color: "#000",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
