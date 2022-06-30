import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Servicos from '../screens/Servicos/';


import Parceiros from '../screens/Parceiros'

const Tab = createMaterialBottomTabNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
    <Tab.Navigator >
      <Tab.Screen name={'Home'} component={Parceiros}/>
      <Tab.Screen name={'Servicos'} component={Servicos} />
    </Tab.Navigator>
{/*         <Parceiros />
    <Servicos {...mock} /> */}
  </NavigationContainer>
  )
}