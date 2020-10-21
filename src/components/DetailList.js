import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const DetailList = ({ route }) => {
  const { id } = route.params;
  const [result, setResult] = useState(null);

  useEffect(() => {
    getResult(id);
  }, []);
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  //console.log(result);
  if (!result) {
    return null;
  }
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

export default DetailList;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
