import {ScrollView,View,StyleSheet,Text,Image} from 'react-native';
import { useEffect } from 'react';

export default function RegionInfo({route,navigation}){
  const {region} = route.params;
  useEffect(()=>{
  },[])
  return(
    <View style={styles.container}>
       <ScrollView style={styles.contrast}>
      <Image style ={ styles.imageContainer} source={{uri:region.image}}></Image>
      <Text style={styles.pokemonText}>{region.name}</Text>
      <Text style={styles.descriptionText}>Profesor: {region.professor}</Text>
      <Text style={styles.descriptionText}>{region.description}</Text>
    </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  contrast:{
    marginTop:20,
    alignSelf:'center',
    width:'92%',
    borderRadius:10
  },
  imageContainer: {
    borderRadius:10,
    height:300,
    width:'auto',
  },
  container: {
    flex:1,
    backgroundColor: '#121212',
  },
  pokemonText:{
    alignSelf:'center',
    color:'#D2D2D2',
    fontSize:30,
  },
  descriptionText:{
    alignSelf:'center',
    color:'#D2D2D2',
    fontSize:18,

  }

})