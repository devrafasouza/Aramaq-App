import React from 'react';
import { 
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Texto from '../../../components/Texto.js';
export default function Bottom({ botao }) {
  return (
    <>
      <TouchableOpacity style={styles.botao} >
        <Texto style={styles.textoBotao}>{ botao }</Texto>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  botao:{
    marginTop: 16,
    backgroundColor: '#075e54',
    paddingVertical: 16,
    borderRadius: 6,
    marginHorizontal: 16,

  },
  textoBotao: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold'
  },
})