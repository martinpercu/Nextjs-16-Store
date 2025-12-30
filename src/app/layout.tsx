// import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Header } from 'app/components/shared/Header'
import { Footer } from 'app/components/shared/Footer'
import '../sass/globals.sass'


const roboto = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
