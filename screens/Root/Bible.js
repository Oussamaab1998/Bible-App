import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Bible = () => {
  return (
    <View style={styles.container} >
      <Text>Hello From The Bible Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    height: '100%',
  }
});

export default Bible;
