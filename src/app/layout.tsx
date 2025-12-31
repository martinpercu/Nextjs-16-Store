// import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Header } from 'app/components/shared/Header'
import { Footer } from 'app/components/shared/Footer'
import { Hero } from "app/components/home/Hero"
import { Description } from "app/components/home/Description"
import '../sass/main.sass'
import '../sass/globals.sass'


const roboto = Roboto({
  weight: ["100", "300","500", "700"],
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <Hero />
        <Description />

        {children}

        <Footer />

      </body>
    </html>
  );
}
