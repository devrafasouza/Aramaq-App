import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';


import { loadTop } from '../../../Services/loadingData';
import logo from '../../../assets/logo.png';

export default function Top() {
  const [topInfo, setTopInfo] = useState({});

  useEffect(() => {
    setTopInfo(loadTop());

  })
 
  return (
    <View style={styles.containerPrincipal}>
        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={logo} />
        </View>
        <Text style={styles.textLogo}>Aramaq</Text>
      <Text style={styles.textBoasVindas}>{topInfo.boasVindas}</Text>
      <Text style={styles.textLegenda}>{topInfo.legenda}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerPrincipal: {
    backgroundColor: '#f6f6f6',
    padding: 16
  },
  containerLogoExterna: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerLogo: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  logo: {
    height: 40,
    width: 40,
    marginRight: 6
  },
  textLogo: {
    color: '#464646',
    fontSize: 14,
    fontFamily: 'FiraSans-Bold'
  },
  textBoasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontFamily: 'Montserrat-Bold',
    color: '#464646'
  },
  textLegenda: {
    fontSize: 16,
    lineHeight: 26,
    color: '#a3a3a3',
    fontFamily: 'Montserrat-Regular'

  }
})