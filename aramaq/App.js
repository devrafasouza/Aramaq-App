import React from 'react';
import { 
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import AppRoutes from './src/routes/AppRoutes.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <AppRoutes />
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

