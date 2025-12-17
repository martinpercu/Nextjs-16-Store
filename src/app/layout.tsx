// import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Header } from 'app/components/shared/Header'
import { Footer } from 'app/components/shared/Footer'
import '../sass/main.sass'
import '../sass/globals.sass'


const roboto = Roboto({
  weight: ["100", "300","500", "700"],
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  console.log('Hello from Layout')
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
