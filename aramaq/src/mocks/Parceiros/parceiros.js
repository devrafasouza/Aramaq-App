import tectorno from '../../../assets/produtores/tectorno.jpg';
import colobri from '../../../assets/produtores/colibri.png';
import aratorno from '../../../assets/produtores/aratorno.jpg';
import hidraulicMaster from '../../../assets/produtores/hidraulicmaster.jpg';
import pneumaticondor from '../../../assets/produtores/pneumaticondor.jpg';

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const parceiros = {
  titulo: "Parceiros",
  lista: [
    {
      nome: "Tectorno",
      imagem: tectorno,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: "Colibri",
      imagem: colobri,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: "Aratorno",
      imagem: aratorno,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: "Hidraulic Master",
      imagem: hidraulicMaster,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: "Pneumatic Condor",
      imagem: pneumaticondor,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
    },
  ]
}

export default parceiros;