// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-xl">Lúcio Advocacia</h3>
          <p className="mt-4 text-white/70 text-sm">OAB/SC 12345</p>
        </div>
        <div className="text-sm text-white/70">
          <p>Rua XV de Novembro, 1234 - Sala 501</p>
          <p>Blumenau, SC - 89010-001</p>
          <p className="mt-2">(47) 3333-4444</p>
        </div>
        <div className="text-sm text-white/70">
          <p>Atendimento: Seg a Sex, 9h às 18h</p>
          <p className="mt-4">© 2026 Lúcio Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}