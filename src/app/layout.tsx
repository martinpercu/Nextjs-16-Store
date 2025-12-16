// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from 'app/components/shared/Header'
import { Footer } from 'app/components/shared/Footer'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "NEXT Js - Store",
//   description: "This is store description in layout global",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  console.log('Hello from Layout')
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />

        {children}

        <Footer />

      </body>
    </html>
  );
}
