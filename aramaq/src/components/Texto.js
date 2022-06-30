import React from 'react';
import { 
  Text,
  StyleSheet
} from 'react-native';

export default function Texto({ children, style }) {
  let estilo = styles.texto;

  if(style?.fontWeight === 'bold') {
    estilo = styles.textoNegrito;
  }

  return (
    <Text style={[estilo, style]}>{ children }</Text>
  )

}

const styles = StyleSheet.create({
  texto: {
    fontFamily: 'Montserrat-Regular',

  },
  textoNegrito: {
    fontFamily: 'Montserrat-Bold',
  }
});