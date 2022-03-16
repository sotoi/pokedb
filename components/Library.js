import { TextInput,StyleSheet, Text, View, Button } from 'react-native';
import React, {useEffect,useState} from 'react';
import axios from 'axios';
export default function Library() {
  let [searchTerm, setSearchTerm] = useState('');

  return(
    <View style={styles.container}>
      <Text>hi ewrewrewrew</Text>

    </View>
  )
};
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

})