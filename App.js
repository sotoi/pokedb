
import { StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import {PokContext} from './PokContext.js'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Library from './components/Library.js'
import Browse from './components/Browse.js'
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons'
import { LogBox } from 'react-native';
import Regions from './components/Regions.js';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
const Tab= createBottomTabNavigator();
export default function App() {

  const [allPokemon, setAllPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  let getAllPokemon =()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1030')
      .then((response)=>{
        setAllPokemon(response.data.results);

      })
  }
  useEffect (() =>{
    getAllPokemon()
    setFilteredPokemon(allPokemon);
  },[])
  return (

    <PokContext.Provider value={{allPokemon, filteredPokemon, setFilteredPokemon}}>
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0
        },
        tabBarInactiveBackgroundColor:'#1F1F1F',
        tabBarActiveBackgroundColor:'#1F1F1F',
      }}
        initialRouteName="Regions">

         <Tab.Screen name='Regions' component={Regions}
        options={{ tabBarIcon: () => (
          <Ionicons name="map-sharp" size={24} color='#D2D2D2' />
         ),
          title: 'Regions', headerTintColor:'#D2D2D2', headerStyle:{backgroundColor:'#1F1F1F' }}}></Tab.Screen>
         {/* <Tab.Screen name='Library' component={Library}
        options={{ tabBarIcon: () => (
         <Ionicons name="book" size={24} color='#D2D2D2' />
        ),title: 'Library', headerTintColor:'#D2D2D2', headerStyle:{backgroundColor:'#1F1F1F' }}}></Tab.Screen> */}
        <Tab.Screen name='Browse' component={Browse}
        options={{ tabBarIcon: () => (
          <Ionicons name="search" size={24} color='#D2D2D2' />
         ),
          title: 'Browse', headerTintColor:'#D2D2D2', headerStyle:{backgroundColor:'#1F1F1F' }}}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    </PokContext.Provider>

  );
}

const styles = StyleSheet.create({
  drawerStyle:{
    backgroundColor: '#1F1F1F',
    width: 240,
  },
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
