import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import ThemeProvider from "@/providers/ThemeProvider";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "StockXHub",
  description: "A StockX Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexMono} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
