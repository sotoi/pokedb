import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokRegion from "./RegionComponents/PokRegion";
import RegionInfo from "./RegionComponents/RegionInfo";
import PokemonDetails from "./BrowseComponents/PokemonDetails";
export default function Regions() {
  const Stack = createNativeStackNavigator();
  useEffect(()=>{

  }, [])

  return(
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
    <Stack.Navigator initialRouteName="Region"  screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Region" component={PokRegion} />
    <Stack.Screen name="RegionInfo" component={RegionInfo} />
    <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
  </Stack.Navigator>
</View>
)

}

