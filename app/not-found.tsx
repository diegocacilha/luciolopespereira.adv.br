// app/not-found.tsx
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center">
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="font-serif text-6xl text-navy">404</h1>
        <h2 className="font-serif text-3xl text-navy mt-4">Página não encontrada</h2>
        <p className="mt-6 text-gray-600">
          O conteúdo que você busca não está disponível neste endereço.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 text-sm uppercase tracking-wider text-navy hover:text-gold"
        >
          Retornar à página inicial →
        </Link>
      </div>
    </main>
  )
}