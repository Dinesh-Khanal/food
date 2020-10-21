import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    searchApi("pasta");
  }, []);

  const searchApi = async (term) => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term,
        location: "Dallas",
      },
    });
    setResult(response.data.businesses);
  };

  return (
    <View>
      <SearchBar onSearch={searchApi} />
      <ResultList result={result} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    fontSize: 20,
  },
});
export default SearchScreen;
