import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import Texto from '../../../components/Texto.js';

export default function Item({item: { nome, imagem }}) {

    return (
      <View style={styles.item} key={ nome }>
        <Image style={styles.imagem}source={ imagem } />
        <Texto style={styles.nome}>{ nome }</Texto>
      </View>
    )
    
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: 'center'
  },
  imagem: {
    width: 66,
    height: 66
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646'
  }
})