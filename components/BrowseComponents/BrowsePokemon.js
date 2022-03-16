import { TextInput,StyleSheet, Text, View, Button } from 'react-native';
import React, {useEffect,useState, useContext} from 'react';
import Search from './Search.js';
import PokemonList from './PokemonList.js';
import {PokContext} from '../../PokContext.js'


export default function BrowsePokemon({navigation}) {
  const {allPokemon, filteredPokemon,setFilteredPokemon}= useContext(PokContext);

  const  onChangeHandler = (pokeList) => {
    setFilteredPokemon(pokeList)
  }

  useEffect(()=>{
  },[])
  return (
    allPokemon!==undefined?
    <View style={styles.container}>
      <Search allPokemon={allPokemon} onChangeHandler={onChangeHandler} />
      <View>
        {filteredPokemon.length? <PokemonList navigation={navigation} pokemonData ={filteredPokemon}/>:
        <Text style={styles.pokeText}> Zero results found...</Text>}
      </View>
    </View>: <Text style={styles.pokeText}>'Loading..'</Text>
  );
}
const styles = StyleSheet.create({
  pokeText:{
    fontSize:20,
    alignSelf:'center',
    color:'#D2D2D2'
  },

  container: {
    flex:1,
    backgroundColor: '#121212',
  },

})