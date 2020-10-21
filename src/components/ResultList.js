import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ItemDetail from "./ItemDetail";

const ResultList = ({ result }) => {
  const getResultItems = (price) => {
    return result.filter((rslt) => rslt.price === price);
  };
  return (
    <View>
      <Text style={styles.title}>Cost Effective</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={getResultItems("$")}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => <ItemDetail rsltItem={item} />}
      />
      <Text style={styles.title}>Bit Pricer</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={getResultItems("$$")}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => <ItemDetail rsltItem={item} />}
      />
      <Text style={styles.title}>Big Splender</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={getResultItems("$$$")}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => <ItemDetail rsltItem={item} />}
      />
    </View>
  );
};

export default ResultList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 15,
  },
});
