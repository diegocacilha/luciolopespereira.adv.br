// Representa uma área de atuação
export interface AreaAtuacao {
  titulo: string;
  descricao: string;
  slug?: string;         // para gerar links amigáveis (/areas/direito-cannabico)
  icone?: string;        // nome de um ícone, se usar biblioteca de ícones
}

// Representa o advogado (página "Sobre")
export interface Advogado {
  nome: string;
  oab: string;           // exemplo: "OAB/SP 123.456"
  foto: string;          // caminho da imagem (ex: "/images/advogado.jpg")
  bio: string;           // biografia completa
  resumo?: string;       // texto curto para cards
  especialidades: string[]; // lista de áreas de atuação
  email: string;
  telefone: string;
  endereco?: {
    rua: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  redesSociais?: {
    linkedin?: string;
    instagram?: string;
  };
}

// Opcional: tipo para os dados de contato do site (evita repetição)
export interface DadosContato {
  telefone: string;
  email: string;
  endereco: string;
  atendimento: string;
  oab: string;
  nome: string;

}