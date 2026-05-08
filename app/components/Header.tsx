"use client";

import Link from "next/link";
import { useState } from "react";
import { dadosAdv } from "../lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl text-navy">
          {dadosAdv.nome}
        </Link>

        {/* Menu desktop (mantido exatamente como estava) */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-gray-600">
          <Link href="/areas" className="hover:text-navy transition-colors">Áreas</Link>
          <Link href="/equipe" className="hover:text-navy transition-colors">Equipe</Link>
          <Link href="/artigos" className="hover:text-navy transition-colors">Artigos</Link>
          <Link href="/contato" className="hover:text-navy transition-colors">Contato</Link>
        </nav>

        {/* Grupo direita (botão + hamburguer) */}
        <div className="flex items-center gap-3">
          {/* Botão Agendar Consulta (visível sempre, original) */}
          <Link
            href="/contato"
            className="bg-navy text-white px-6 py-2 text-sm hover:bg-gold hover:text-navy transition"
          >
            Agendar Consulta
          </Link>

          {/* Botão hamburguer (visível apenas mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-navy hover:text-gold transition-colors"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile (mesmo estilo visual do site) */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-sm uppercase tracking-wider text-gray-600">
            <Link href="/areas" onClick={() => setIsOpen(false)} className="hover:text-navy transition-colors">Áreas</Link>
            <Link href="/equipe" onClick={() => setIsOpen(false)} className="hover:text-navy transition-colors">Equipe</Link>
            <Link href="/artigos" onClick={() => setIsOpen(false)} className="hover:text-navy transition-colors">Artigos</Link>
            <Link href="/contato" onClick={() => setIsOpen(false)} className="hover:text-navy transition-colors">Contato</Link>
          </nav>
        </div>
      )}
    </header>
  );
}