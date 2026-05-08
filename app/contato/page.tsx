// app/contato/page.tsx
import { dadosAdv } from "../lib/constants";
export default function Contato() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="font-serif text-5xl text-navy">Contato</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        Entre em contato para agendar uma consulta. Retornaremos em até 1 dia útil.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-12">
        <form className="bg-white p-8 border border-gray-200">
          <div className="grid gap-6">
            <input type="text" placeholder="Nome completo" className="border-b border-gray-300 py-3 focus:border-navy outline-none" />
            <input type="email" placeholder="E-mail" className="border-b border-gray-300 py-3 focus:border-navy outline-none" />
            <input type="tel" placeholder="Telefone" className="border-b border-gray-300 py-3 focus:border-navy outline-none" />
            <textarea placeholder="Mensagem" rows={4} className="border-b border-gray-300 py-3 focus:border-navy outline-none resize-none" />
            <button className="bg-navy text-white py-3 mt-4 hover:bg-gold hover:text-navy transition">
              Enviar Mensagem
            </button>
          </div>
        </form>

        <div className="text-gray-600">
          <h2 className="font-serif text-2xl text-navy">Escritório Blumenau</h2>
          <p className="mt-4">{dadosAdv.endereco}</p>
          <p className="mt-4">{dadosAdv.telefone}</p>
          <p>{dadosAdv.email}</p>
          <p className="mt-8 text-sm">Atendimento presencial mediante agendamento prévio, conforme Código de Ética da OAB.</p>
        </div>
      </div>
    </main>
  )
}