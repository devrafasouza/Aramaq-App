import { useState, useEffect } from 'react';

import { loadParceiros } from '../Services/loadingData';

export default function useParceiros() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = loadParceiros();
    setTitulo(retorno.titulo)
    setLista(retorno.lista);
  }, []);

  return [titulo, lista]
}
