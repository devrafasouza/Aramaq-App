import parceiros from "../mocks/Parceiros/parceiros";
import top from "../mocks/Parceiros/top.js";

import servicos from "../mocks/Servicos/servico.js";
import topServicos from '../mocks/Servicos/top.js';
import detailsServicos from '../mocks/Servicos/details.js';
import bottomServicos from '../mocks/Servicos/bottom.js';

export const loadParceiros = () => {
  return parceiros;
}

export const loadTop = () => {
  return top;
}

export const loadServicos = () => {
  return servicos;
}

export const loadTopServicos = () => {
  return topServicos;
}

export const loadDetailsServicos = () => {
  return detailsServicos;
}

export const loadBottomServicos = () => {
  return bottomServicos;
}