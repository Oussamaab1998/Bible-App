import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Today = () => {
  return (
    <View style={styles.container} >
      <Text>Hello From The Today Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    height: '100%',
  }
});

export default Today;
