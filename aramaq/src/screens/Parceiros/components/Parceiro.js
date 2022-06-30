import React, { useReducer, useMemo } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Estrelas from '../../../components/Estrelas.js';

const distanciaEmMetros = (distancia) => {
  return `${distancia}m`;
}

export default function Parceiro({ nome, imagem, distancia, estrelas }) {
  const [select, invertSelect] = useReducer(
    (select) => !select,
    false
  );

  const distanciaTexto = useMemo(
    () => distanciaEmMetros(distancia),
    [distancia]

  );

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={invertSelect}
    > 
      <Image style={styles.image} source={ imagem } accessibilityLabel={ nome }/>
      <View style={styles.infoCard}>
        <View>
          <Text style={styles.name}>{ nome }</Text>
          <Estrelas 
            quantidade={ estrelas }
            editavel={select}
            grande={select}
          />
        </View>
        <Text style={styles.distance}>{ distanciaTexto }</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',

    // Android
    elevation: 4,

    // Ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16
  },
  infoCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: 'Montserrat-Bold'
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
    fontFamily: 'Montserrat-Bold'
  }
});