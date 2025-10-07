import React, {useEffect, useState} from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default function Search({allPokemon,onChangeHandler}) {
  const [search, setSearch] = useState("");
  useEffect(()=>{

      let test =allPokemon.filter((pokObj)=>{if(pokObj.name.includes(search.toLowerCase())){
        return pokObj
      }})
      onChangeHandler(test);

    },[search])
  const updateSearch = (search) => {
    setSearch(search);
  }
  return (
    <View >
       <TextInput
        style={styles.searchBar}
        placeholder="Search Pokemon..."
        placeholderTextColor="#999"
        onChangeText={setSearch}
        value={search}
      />

      </View>

  );
}

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    backgroundColor: '#1E1E1E',
    borderRadius: 20,
    paddingHorizontal: 15,
    margin: 10,
    color: '#D2D2D2',
    fontSize: 16,
  }
})

