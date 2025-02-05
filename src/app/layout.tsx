
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  ClerkProvider,
} from '@clerk/nextjs'



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <ClerkProvider>
  <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
</ClerkProvider>

    
  );
}
