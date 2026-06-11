// frontend/src/services/api.js

const BASE_URL = 'http://127.0.0.1:8000/api';

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
