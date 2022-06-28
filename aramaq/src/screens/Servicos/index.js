import React from 'react';
import { 
  StyleSheet,
  View,
  FlatList
} from 'react-native';

import Top from '../../screens/Servicos/components/Top.js';
import Details from '../../screens/Servicos/components/Details.js';
import Item from './components/Item.js';
import Bottom from './components/Bottom.js';

export default function Servicos({top, details, itens, bottom}) {
  return (
    <>
      <FlatList
        data={ itens.lista }
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return(
            <>
              <Top {...top}/>
              <View style={styles.servicos}>
                <Details {...details}/>
              </View>
            </>
          )
        }}
        ListFooterComponent={() => {
          return  <Bottom {...bottom}/>
        }}
      />
    </>
  )
}
const styles = StyleSheet.create({
  servicos: {
    paddingHorizontal: 16,
    paddingVerical: 8
  },
})

