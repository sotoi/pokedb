import axios from 'axios';
import Pokemon from './Pokemon.js';

import {Pressable,StyleSheet,FlatList,View} from "react-native" ;

export default function PokemonList({navigation, pokemonData}){
  const renderItem = (pokemon) => (

    <Pressable onPress={() => axios.get(pokemon.item.url).then((res)=> {
      axios.get(res.data.species.url).then(result=>{navigation.navigate('PokemonDetails',{species:res, description:result})})
    }) }>
      <Pokemon  pokemon={pokemon}  />
      </Pressable>
  );
  return(
    pokemonData.length!==0 &&
    <View >
       <FlatList
        data={pokemonData}
        renderItem={renderItem}
        keyExtractor={pokemon=>`${pokemon.name}-id`}
        removeClippedSubviews={true} // Unmount components when outside of window
        initialNumToRender={20} // Reduce initial render amount
        maxToRenderPerBatch={5} // Reduce number in each render batch
        updateCellsBatchingPeriod={100} // Increase time between renders
        windowSize={10} // Reduce the window size


        />
    </View>

  )
}


