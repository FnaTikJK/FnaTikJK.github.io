import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {ChakraProvider} from "@chakra-ui/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yaskov Anton own page",
  description: "portoflio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <ChakraProvider>
          {children}
      </ChakraProvider>
      </body>
    </html>
  );
}
