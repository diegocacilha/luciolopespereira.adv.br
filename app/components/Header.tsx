// app/components/Header.tsx
import Link from "next/link"
import { dadosAdv } from "../lib/constants"

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl text-navy">
          {dadosAdv.nome}
        </Link>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-gray-600">
          <Link href="/areas" className="hover:text-navy transition-colors">Áreas</Link>
          <Link href="/equipe" className="hover:text-navy transition-colors">Equipe</Link>
          <Link href="/artigos" className="hover:text-navy transition-colors">Artigos</Link>
          <Link href="/contato" className="hover:text-navy transition-colors">Contato</Link>
        </nav>
        <Link href="/contato" className="bg-navy text-white px-6 py-2 text-sm hover:bg-gold hover:text-navy transition">
          Agendar Consulta
        </Link>
      </div>
    </header>
  )
}