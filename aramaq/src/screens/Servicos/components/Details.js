import React from 'react';
import { 
  StyleSheet,
  View,
  Image
} from 'react-native';

import Texto from '../../../components/Texto.js';
export default function Details({ tituloConheca, icone, nomeEmpresa, descricao, titulo }) {
  return (
    <>
      <Texto style={styles.tituloConheca}>{ tituloConheca }</Texto>
      <View style={styles.containerEmpresaIcone}>
        <Image style={styles.icone} source={icone} />
        <Texto style={styles.nomeEmpresa}>{ nomeEmpresa }</Texto>
      </View>
      {/* <Texto style={styles.descricao}>Todos os nossos serviços são flexiveis para a sua necessidade!</Texto> */}
      <Texto style={styles.descricao}>{ descricao }</Texto>
      <Texto style={styles.titulo}>{ titulo }</Texto>
    </>
  )
}

const styles = StyleSheet.create({
  tituloConheca: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 42,
    marginBottom: 20,
    fontFamily: 'Montserrat-Bold'
  },
  containerEmpresaIcone: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nomeEmpresa: {
    marginLeft: 10,
    fontSize: 16,
    lineHeight: 26,
  },
  descricao: {
    color: '#a3a3a3',
    fontSize: 14,
    lineHeight: 26,
  },
  titulo: {
    color: '#464646',
    fontFamily: 'Montserrat-Bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  icone: {
    width: 50,
    height: 50
  }
})