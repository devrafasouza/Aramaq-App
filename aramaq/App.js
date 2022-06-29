import React from 'react';
import { 
  StatusBar, 
  SafeAreaView 
} from 'react-native';

import Servicos from './src/screens/Servicos/';
import mock from './src/mocks/servicos.js';

export default function App() {

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <Servicos {...mock} />
    </SafeAreaView>
  );
}


/* import React from 'react';
import { 
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Parceiros from './src/screens/Parceiros';


function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Parceiros />
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App; */
