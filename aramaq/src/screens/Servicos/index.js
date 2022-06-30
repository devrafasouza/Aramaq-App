import React, { useEffect, useState } from 'react';
import { 
  StyleSheet,
  View,
  FlatList
} from 'react-native';

import Top from '../../screens/Servicos/components/Top.js'
import Details from '../../screens/Servicos/components/Details.js';
import Item from './components/Item.js';
import Bottom from './components/Bottom.js';
import { 
  loadServicos, 
  loadTopServicos, 
  loadDetailsServicos, 
  loadBottomServicos 
} from '../../Services/loadingData.js';

export default function Servicos() {
  const [topInfo, setTopInfo] = useState({});
  const [servicosInfo, setServicosInfo] = useState([]);
  const [detailsInfo, setDetailsInfo] = useState({});
  const [bottomInfo, setBottomInfo] = useState({});

  useEffect(() => {
    setServicosInfo(loadServicos());
    setTopInfo(loadTopServicos());
    setDetailsInfo(loadDetailsServicos());
    setBottomInfo(loadBottomServicos());

  })
  return (
    <>
      <FlatList
        data={ servicosInfo.lista }
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return(
            <>
              <Top {...topInfo}/>
              <View style={styles.servicos}>
                <Details {...detailsInfo}/>
              </View>
            </>
          )
        }}
        ListFooterComponent={() => {
          return  <Bottom {...bottomInfo}/>
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

