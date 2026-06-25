// frontend/src/services/api.js

const BASE_URL = import.meta.env.VITE_API_URL || '[/api](/api)';

export const fetchAdvogados = async () => {
  const resposta = await fetch(`${BASE_URL}/advogados/`);
  if (!resposta.ok) throw new Error('Erro ao buscar equipe');
  return resposta.json();
};

export const fetchEscritorio = async () => {
  const resposta = await fetch(`${BASE_URL}/escritorio/`);
  if (!resposta.ok) throw new Error('Erro ao buscar contatos');
  return resposta.json();
};

export const fetchTextos = async () => {
  const resposta = await fetch(`${BASE_URL}/textos/`);
  if (!resposta.ok) throw new Error('Erro ao buscar textos');
  return resposta.json();
};

export const fetchAreasAtuacao = async () => {
  const resposta = await fetch(`${BASE_URL}/areas-atuacao/`);
  if (!resposta.ok) throw new Error('Erro ao buscar áreas de atuação');
  return resposta.json();
};

export const fetchImagensSite = async () => {
  const resposta = await fetch(`${BASE_URL}/imagens/`);
  if (!resposta.ok) throw new Error('Erro ao buscar imagens do site');
  return resposta.json();
};

export const categoriasLeis = [
  { id: 'constituicao', nome: 'Constituição Federal' },
  { id: 'codigo_penal', nome: 'Código Penal' },
  { id: 'codigo_adm', nome: 'Direito Administrativo' },
  { id: 'trabalhista', nome: 'Direito do Trabalho' },
  { id: 'etica_oab', nome: 'Ética OAB' },
  { id: 'especializado', nome: 'Direito Especializado' },
  { id: 'publico', nome: 'Direito Público' },
  { id: 'tributario', nome: 'Direito Tributário' },
  { id: 'humanidades', nome: 'Humanidades' }
];

export const getLeis = async () => {
  try {
    const response = await fetch(`${BASE_URL}/leis/`);
    if (!response.ok) {
      throw new Error('Erro na resposta da rede');
    }
    const data = await response.json();
    return data.results ? data.results : data;
    
  } catch (error) {
    console.error("Erro ao buscar leis na API:", error);
    return [];
  }
};
