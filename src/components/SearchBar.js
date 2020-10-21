import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name="search" style={styles.searchIcon} />
      <TextInput
        placeholder="search"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        value={term}
        onChangeText={(newTerm) => setTerm(newTerm)}
        onEndEditing={() => onSearch(term)}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#f0ddfd",
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 5,
    height: 50,
    flexDirection: "row",
  },
  searchIcon: {
    fontSize: 35,
    color: "black",
    alignSelf: "center",
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
  },
});
