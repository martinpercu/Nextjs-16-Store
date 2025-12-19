import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXT Js - Store",
  description: "This is store description in layout global",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <nav>
            <ul>
              <Link href="/">
                <li>Home</li>              
              </Link>
              <Link href="/store">
                <li>Store</li>              
              </Link>
              <Link href="/store/categories">
                <li>Categories</li>              
              </Link>
              <Link href="/about">
                <li>About</li>              
              </Link>
            </ul>
          </nav>
        </header>

        {children}

      </body>
    </html>
  );
}
