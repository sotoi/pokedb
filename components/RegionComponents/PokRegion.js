import { useEffect } from "react"
import RegionData from "../helpers/RegionData"
import Region from "./Region"
import { FlatList, View,Text, StyleSheet,Pressable } from "react-native"
export default function PokRegion({navigation}){
  const renderItem = (region) => (

    <Pressable onPress={() => {navigation.navigate('RegionInfo',{region:region.item})}}>

      <Region region={region.item} />
      </Pressable>
  );
  return(
    <View style={styles.container}>
      <View style={styles.contrast} >
      <FlatList
        data={RegionData}
        renderItem={renderItem}
        keyExtractor={region=>region.name}
        removeClippedSubviews={true} // Unmount components when outside of window
        initialNumToRender={8} // Reduce initial render amount
        maxToRenderPerBatch={5} // Reduce number in each render batch
        updateCellsBatchingPeriod={100} // Increase time between renders
        windowSize={10} // Reduce the window size
        />

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  contrast:{
    alignSelf:'center',
    width:'92%',
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

})
