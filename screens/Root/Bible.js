import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

const Bible = ({ navigation }) => {
  return (
    <View style={styles.text}>
      <View style={{
        flexDirection: "row", justifyContent: "space-between", shadowColor: "#000000",
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 1.0,
        shadowRadius: 6,
        elevation: 9,
      }}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <TouchableOpacity onPress={() => navigation.navigate('BookSearch')}>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginEnd: 16, color: '#8F8F8F' }}>Genesis 1</Text>
          </TouchableOpacity>
          <FontAwesome name="sort-down" color="#caccd1" size={24} />
        </View>

        <View style={{ flexDirection: "row" }}>
          <FontAwesome
            style={{ marginEnd: 20, marginTop: 2 }}
            name="search"
            color="#caccd1"
            size={24}
          />
          <Text
            style={{
              fontSize: 24,
              color: "#caccd1",
              justifyContent: "flex-end",
            }}>
            Aa
          </Text>
        </View>
      </View>

      <View style={styles.seperator} />

      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={{ fontSize: 18, marginTop: 20, lineHeight: 30 }}>
          <Text style={styles.indiceStyle}>1.</Text> In the beginning God created the heaven and the earth.{" "}
        </Text>
        <Text style={{ fontSize: 18, marginTop: 20, lineHeight: 30 }}>
          <Text style={styles.indiceStyle}>2.</Text> And the earth was without form, and void; and darkness was upon the
          face of the deep. And the Spirit of the God moved upon the face of the
          waters.
        </Text>
        <Text style={{ fontSize: 18, marginTop: 20, lineHeight: 30 }}>
          <Text style={styles.indiceStyle}>3.</Text> And God said, Let there be light: and there was light.{" "}
        </Text>
        <Text style={{ fontSize: 18, marginTop: 20, lineHeight: 30 }}>
          <Text style={styles.indiceStyle}>4.</Text> And God saw the light, that it was good: and God devided the light
          from the darkness.
        </Text>
        <Text style={{ fontSize: 18, marginTop: 20, lineHeight: 30 }}>
          <Text style={styles.indiceStyle}>5.</Text> And God called the light Day, and the darkness he called Night. And
          the evening and the morning were the first day.
        </Text>
        <Text style={{ fontSize: 18, marginTop: 20, lineHeight: 30 }}>
          <Text style={styles.indiceStyle}>6.</Text> And God said, Let there be a firmament in the midst of the waters,
          and let it devide the waters from the waters.
        </Text>
        <Text style={{ fontSize: 18, marginTop: 20, lineHeight: 30 }}>
          <Text style={styles.indiceStyle}>7.</Text> In the beginning God created the heaven and the earth.{" "}
        </Text>

      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  indiceStyle: {
    color: '#36BF49',
    fontWeight: 'bold',
    fontSize: 20
  },
  seperator: {
    width: "100%",
    height: 2,
    backgroundColor: "#f8f4f4",
    marginTop: 8,
  },
  text: {
    justifyContent: "flex-start",
    padding: 20,
    paddingTop: 40,
    marginTop: Platform.OS === "android" ? 0 : 44,
    backgroundColor: "#fff",
    height: "100%",
  },
});

export default Bible;