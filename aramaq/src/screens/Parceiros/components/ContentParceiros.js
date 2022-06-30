import React, { useState, useEffect } from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import Parceiro from './Parceiro';
import useParceiros from '../../../hooks/useParceiros.js';

export default function ContentParceiros({ top: Top}) {
  const [titulo, lista] = useParceiros();


  const TopList = () => {
    return (
      <>
        <Top />
        <Text style={styles.title}>{ titulo }</Text>
      </>
     
    )
  }

  return (
    <FlatList 
      data={lista}
      renderItem={({ item }) => <Parceiro {...item}/>}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopList}
    />
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontFamily: 'Montserrat-Bold',
    color: '#464646'
  }

})