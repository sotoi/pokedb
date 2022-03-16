import axios from 'axios';
import { useEffect, useState } from 'react';
import {Text, View, Image, StyleSheet,ScrollView, FlatList,Pressable} from 'react-native';
import Evolutions from '../helpers/Evolutions';
import PokemonTypes from '../helpers/PokemonTypes';
export default function PokemonDetails({route, navigation}){
  const [evolutions, setEvolutions] = useState([])
  const {species,description} = route.params;
  useEffect(()=> {
     axios.get(description.data.evolution_chain.url).then(chain=>setEvolutions(Evolutions(chain.data)))
     const unsubscribe = navigation.addListener('beforeRemove', e => {
      e.preventDefault(); // Prevent default action
      unsubscribe() // Unsubscribe the event on first call to prevent infinite loop
      navigation.navigate('BrowsePokemon') // Navigate to your desired screen
    });
  },[])
  const renderItem = (pokemon) => (
    <Pressable onPress={() => axios.get(pokemon.item.url).then((res)=> {
      axios.get(res.data.species.url).then(result=>{navigation.push('PokemonDetails', {species:res, description:result})})
    }) }>
      <View>

        <Image style={styles.sprite} source={{uri:pokemon.item.photo}}/>

      </View>
      </Pressable>
  );
  const loadEvolutions =()=>{

    if(evolutions.length!==0){
      return(<FlatList
        data={evolutions}
        horizontal
        renderItem={renderItem}
        keyExtractor={item=>item.species_name}
        removeClippedSubviews={true} // Unmount components when outside of window
        initialNumToRender={20} // Reduce initial render amount
        maxToRenderPerBatch={5} // Reduce number in each render batch
        updateCellsBatchingPeriod={100} // Increase time between renders
        windowSize={10} // Reduce the window size
         />)
    } else {
      return(<Text>Loading evolutions...</Text>)
    }

  }
  return(

    <View style= {styles.container}>
      <ScrollView style= {styles.contrast}>
      {/* Image */}
      <Image style= {styles.pokemonImage} source={{uri:species.data.sprites.other["official-artwork"].front_default}}/>
      {/* Types */}
      <Text style= {styles.pokemonText}> {species.data.forms[0].name}</Text>
      <View style={styles.typesContainer}>
        {species.data.types.map((type,i)=><Text key={i} style={[styles.type,{backgroundColor:PokemonTypes[type.type.name]}]}>{type.type.name}</Text>)}
      </View>
      {/* Name And description */}

       <Text style= {styles.descriptionText} >{description.data[`flavor_text_entries`].find(el=>el.language.name==='en').flavor_text.replace(/\n/g,' ')}</Text>
       <View>
         {species.data.stats.map((stat, i)=>{
           return(
             <View style={styles.graphContainer} key={i}>
               <View style={{width:110,alignItems:'flex-start'}}>
               <Text style={styles.stats}>{stat.stat.name}</Text>
               </View>
               <View style={styles.barContainer}>
               <Text style={[styles.bar,{width:(200*stat.base_stat)/255}]}>{stat.base_stat}</Text>
               </View>
              </View>
           )
         })}
       </View>
       {loadEvolutions()}




       </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
  pokemonImage : {
    height:300,
    width:300,
    marginBottom:20,
    resizeMode: 'contain',
    alignSelf:'center'
  },
  contrast:{
    marginTop:20,
    alignSelf:'center',
    width:'92%',
    backgroundColor:'#1E1E1E',
    borderRadius:10
  },
  container: {
    flex:1,
    backgroundColor: '#121212',
  },
  pokemonText:{
    textTransform:'capitalize',
    alignSelf:'center',
    color:'#D2D2D2',
    fontSize:30,
  },
  descriptionText:{
    padding:20,
    alignSelf:'center',
    color:'#D2D2D2',
    fontSize:18,
    marginBottom:10

  },
  typesContainer:{
    flexDirection:'row',
    alignSelf:'center',
  },
  type:{
    borderRadius:5,
    padding:4,
    margin:8,
    color:'white',
    textAlign:'center',
    fontSize:16,
    width:80,
  },
  graphContainer:{
    justifyContent:'center',
    flexDirection:'row',
  },
  barContainer:{
    backgroundColor:'#664B86',
    width:200,
    borderRadius:20,
    height:18,
    marginBottom:10
  },
  bar:{
    backgroundColor:'#BB86FC',
    textAlign:'center',
    alignItems:'center',
    color:'white',
    fontWeight:'bold',
    borderRadius:20,
  },
  stats:{
    color:'#D2D2D2',
    marginRight: 6,
    textAlign:'right',
  },
  sprite:{
    width:180,
    height:180,
  }
})
