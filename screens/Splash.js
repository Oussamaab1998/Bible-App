import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { images, COLORS } from "../constants";
import { useDispatch } from "react-redux";
import { ResetStates } from "../redux/User/user.actions";

var count = 0;

const Splash = ({ navigation }) => {
  console.log("Splash Screen");
  console.log("count =>", count);
  const dispatch = useDispatch();

  useEffect(() => {
    if (count == 0) {
      dispatch(ResetStates());
      count++;
    }
  }, [count]);

  const RedirectRegister = () => {
    console.log("RedirectRegister Clicked !!");
    navigation.navigate("Register");
  };

  const RedirectLogin = () => {
    console.log("RedirectLogin Clicked !!");
    navigation.navigate("Login");
  };

  const handleForget = () => {
    navigation.navigate("Recovery");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexContainer}>
        <Image style={styles.logo} source={images.logo} resizeMode="contain" />
        <View style={{ marginBottom: 100, }} >
          <TouchableOpacity onPress={RedirectRegister}>
            <Text style={styles.u_btn}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={RedirectLogin}>
            <Text style={styles.u_btn}>Sign In</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.already} onPress={handleForget}>
            <Text style={styles.label2}>Forget your Password?</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    color: COLORS.primary,
    backgroundColor: "#fff",
  },
  flexContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: 100,
  },
  betweenLogin: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  hline: {
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    width: 100,
  },
  p_btn: {
    backgroundColor: COLORS.redColor,
    color: "white",
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent",
    marginVertical: 10,
    fontWeight: "600",
    width: 300,
  },
  u_btn: {
    backgroundColor: COLORS.blueColor,
    color: "white",
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 35,
    // borderRadius: 10,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "transparent",
    marginVertical: 10,
    fontWeight: "600",
    width: 300,
  },
  label2: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.3,
    color: 'black',
    textDecorationStyle: "solid",
    textDecorationColor: COLORS.greyColor,
    marginBottom: 10,
    marginLeft: 10,
  },
  already: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
});
