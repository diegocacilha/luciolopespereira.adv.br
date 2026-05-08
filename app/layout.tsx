// app/layout.tsx
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})
const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato'
})

export const metadata: Metadata = {
  title: "Lúcio Advocacia | Blumenau SC",
  description: "Escritório de advocacia especializado em direito empresarial e tributário",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${lato.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}