import {View,Text,Image,StyleSheet} from 'react-native';

export default function Pokemon({pokemon}){
  let url_string= pokemon.item.url.slice(34).replace('/','');
  return(
    <View style={styles.pokemonStyle}>
      <Text style={styles.pokemonText}>{pokemon.item.name}</Text>
      <Image style={styles.imgStyle} source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url_string}.png`
      }} />
    </View>
  )
};
const styles =StyleSheet.create({
  imgStyle:{
    width: 100,
    height: 100,
    marginRight:10,
    resizeMode: 'contain'
  },
  pokemonStyle: {
    alignContent: 'center',
    flexDirection:'row',
    backgroundColor:'#1E1E1E',
    justifyContent:'space-between',
    margin:10,
    height:110,
    borderRadius:10
  },
  pokemonText:{
    textTransform:'capitalize',
    marginLeft: 20,
    fontFamily:'sans-serif',
    alignSelf:'center',
    fontSize:18,
    color:'#D2D2D2'
  }
}
)