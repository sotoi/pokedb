import {View,StyleSheet,Image,Text} from 'react-native';
import { useEffect } from 'react';
export default function Region({region,navigation}){
  useEffect(()=>{
  },[])
  return(
      <View >
      <Text style={styles.pokemonText}>{region.name}</Text>
      <Image style={styles.regionImage} source={{uri:region.image}}>
      </Image>


    </View>





  )
}

const styles = StyleSheet.create({
  regionImage:{
    position:'relative',
    width:'auto',
    height:200,
    borderRadius:10,
    opacity: .5,
    zIndex:1,

  },
  regionContainer:{
    position:'absolute',
  },
  pokemonText:{
    position:'relative',
    zIndex:2,
    left:140,
    top:120,
    color:'#D2D2D2',
    fontSize:30,
  },

})
