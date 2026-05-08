// app/components/Footer.tsx

import { dadosAdv } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-xl">Lúcio Advocacia</h3>
          <p className="mt-4 text-white/70 text-sm">{dadosAdv.oab}</p>
        </div>
        <div className="text-sm text-white/70">
          <p>{ dadosAdv.endereco }</p>
          <p className="mt-2">{dadosAdv.telefone}</p>
        </div>
        <div className="text-sm text-white/70">
          <p>{dadosAdv.atendimento}</p>
          <p className="mt-4">© 2026 {dadosAdv.nome}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}