import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Estrela from './Estrela';

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);

  const RenderStars = () => {
    const listStars = [];
    for (let i = 0; i < 5; i++) {
      listStars.push(
        <Estrela
          key={i} 
          onPress={() => setQuantidade(i + 1)}
          desabilitada={!editavel}
          preenchida={i < quantidade}
          grande={grande}
        />
      );
    }

    return listStars;
  }

  return (
    <View style={styles.stars}>
      <RenderStars />
    </View>
  )
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
    marginRight: 2
  }
});
