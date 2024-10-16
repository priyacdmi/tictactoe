/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Arrtic from './arrtictoe';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Mainpage from './Startpage';

const stack = createNativeStackNavigator();

function App () { 
  return(
    <>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name='start' component={Mainpage} />
          <stack.Screen name='tictac' component={Arrtic}/>
    
        </stack.Navigator>
      </NavigationContainer>
    </>
  )
}


export default App;
