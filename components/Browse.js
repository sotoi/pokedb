import { TextInput,StyleSheet, Text, View, Button } from 'react-native';
import BrowsePokemon from './BrowseComponents/BrowsePokemon.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetails from './BrowseComponents/PokemonDetails.js'
export default function Browse() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
      <Stack.Navigator initialRouteName="BrowsePokemon"  screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="BrowsePokemon" component={BrowsePokemon} />
      <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
    </Stack.Navigator>
</View>



  );
}
