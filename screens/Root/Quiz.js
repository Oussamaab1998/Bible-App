import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Quiz = () => {
  return (
    <View style={styles.container} >
      <Text>Hello From The Quiz Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    height: '100%',
  }
});

export default Quiz;
