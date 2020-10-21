import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ItemDetail = ({ rsltItem }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailList", { id: rsltItem.id })}
    >
      <View style={{ paddingLeft: 15 }}>
        <Image source={{ uri: rsltItem.image_url }} style={styles.image} />
        <Text>{rsltItem.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 6,
  },
});
