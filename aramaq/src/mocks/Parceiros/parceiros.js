import tectorno from '../../assets/parceiros/tectorno.jpg'
import colobri from '../../assets/parceiros/colibri.png';
import aratorno from '../../assets/parceiros/aratorno.jpg';
import hidraulicMaster from '../../assets/parceiros/hidraulicmaster.jpg';
import pneumaticondor from '../../assets/parceiros/pneumaticondor.jpg';

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