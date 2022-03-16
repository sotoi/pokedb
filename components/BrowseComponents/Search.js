import React, {useEffect, useState} from "react";
import { StyleSheet, View,  } from "react-native";
import { SearchBar } from 'react-native-elements';

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
       <SearchBar
        placeholder="Search Pokemon..."
        onChangeText={updateSearch}
        value={search}
      />

      </View>

  );
}

const styles = StyleSheet.create({


})

