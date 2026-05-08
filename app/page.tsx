// app/page.tsx
import Link from "next/link"

const areas = [
  { titulo: "Direito Canábico", desc: "Assessoria regulatória para cannabis medicinal, autorizações na ANVISA, habeas corpus preventivo e compliance para associações e empresas do setor." },
  { titulo: "Direito Societário", desc: "Constituição de empresas, fusões, aquisições e governança corporativa." },
  { titulo: "Direito Tributário", desc: "Planejamento tributário, defesas administrativas e judiciais." },
  { titulo: "Contratos", desc: "Elaboração e revisão de contratos empresariais complexos." }
]

export default function Home() {
  return (
    <main>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gold">Desde 1998</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight mt-4">
              Soluções jurídicas estratégicas para sua empresa
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Atuamos com excelência técnica e visão de negócios para proteger e potencializar o patrimônio dos nossos clientes.
            </p>
            <Link href="/contato" className="inline-block mt-8 bg-navy text-white px-8 py-3 hover:bg-gold hover:text-navy transition">
              Fale com um especialista
            </Link>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80" 
            alt="Escritório de advocacia"
            className="w-full h-auto"
          />
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl">Áreas de Atuação</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {areas.map((area) => (
              <div key={area.titulo} className="bg-white p-8 border-t-4 border-gold">
                <h3 className="font-serif text-2xl">{area.titulo}</h3>
                <p className="mt-4 text-gray-600">{area.desc}</p>
                <Link href="/areas" className="inline-block mt-6 text-sm uppercase tracking-wider text-navy hover:text-gold">
                  Saiba mais →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-serif text-2xl md:text-3xl leading-relaxed">
            “A assessoria do escritório foi fundamental para a reestruturação societária da nossa empresa. Técnica e agilidade impecáveis.”
          </p>
          <p className="mt-6 text-gray-600">— Carlos M., CEO Indústria Têxtil</p>
        </div>
      </section>
    </main>
  )
}