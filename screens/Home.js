import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { COLORS, images } from "../constants";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello There Home Page </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  profileStyle: {
    padding: 0,
    margin: 0,
    backgroundColor: COLORS.primary,
    height: 160,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    backgroundColor: "white",
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  textStyle: {
    color: "white",
    fontSize: 14,
    marginVertical: 15,
  },
  drawerContent: {
    padding: 0,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  itemIcon: {
    marginRight: 20,
    marginLeft: 20,
  },
  itemText: {
    color: "black",
    fontSize: 18,
  },
  itemBorderTop: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  drawerNavStyle: {
    padding: 0,
    margin: 0,
  },
});
