import React from 'react';
import {
  Image,
  Dimensions,
  StyleSheet,
  View
} from 'react-native'

import Texto from '../../../components/Texto.js';
import topo from '../../../../assets/topo.jpg';

const width = Dimensions.get('screen').width;

export default function Topo({titulo}) {
  return (
    <>
      <Image style={styles.container} source={topo}  />
      <Texto style={styles.titulo}>{ titulo }</Texto>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 720 / 640 * width
  },
  titulo: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 30
  },
})