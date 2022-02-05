import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, ImageBackground, Text, TouchableOpacity } from "react-native";
import { images, COLORS } from "../constants";
import { useFonts, Quicksand_700Bold } from "@expo-google-fonts/quicksand";
import AppLoading from "expo-app-loading";

const BeforeSplash = ({ navigation }) => {
  const [dateNow, setDateNow] = useState("");
  const [verseOfTheDay, setVerseOfTheDay] = useState("");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Our Functions
  const getRandomVerseWithShortLength = async () => {
    try {
      const response = await fetch(
        "https://labs.bible.org/api/?passage=random&type=json"
      );
      const json = await response.json();
      console.log(json[0].text);
      return json[0].text;
    } catch (error) {
      console.error(error);
    }
  }
  const getRandpmVerse = async () => {
    let times = 0;
    let returnValue = await getRandomVerseWithShortLength();
    if (returnValue.length < 90 || times === 10) {
      setVerseOfTheDay(returnValue)
      console.log("*****************", returnValue)
      return returnValue
    } else {
      times = times + 1;
      console.log("*****************", returnValue)
      getRandpmVerse();

    }



  };
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth();
    setDateNow(date + " " + monthNames[month]);
  };
  let [fontsLoaded] = useFonts({
    Quicksand_700Bold,
    'Quicksand': require("../assets/fonts/Quicksand.ttf"),
    'SegoeBold': require("../assets/fonts/SegoeBold.ttf"),
  });
  console.log("Before Splash Screen");
  const handleNextButtonClick = () => {
    navigation.navigate("Splash");
  }
  useEffect(() => {
    getCurrentDate();
    getRandpmVerse();
    console.log(dateNow);
  }, []);
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={images.splashBg}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.textContainer}>
            <Text style={styles.dateText}>{dateNow}</Text>
            <Text style={styles.verseText}>
              {verseOfTheDay}
            </Text>
          </View>
          <Image
            style={styles.jesus}
            source={images.jesusPng}
            resizeMode="contain"
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.nextBtn}
              onPress={handleNextButtonClick}>
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
};

export default BeforeSplash;

const styles = StyleSheet.create({
  buttonsContainer: {
    marginBottom: 80,
    justifyContent: "center",
    alignItems: 'center'
  },
  nextBtn: {


  },
  btnText: {
    backgroundColor: '#D5A331',
    color: "white",
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 1,
    // borderRadius: 10,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "transparent",
    marginVertical: 10,
    fontWeight: "600",
    width: 300,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    position: "relative",

  },
  textContainer: {
    paddingTop: 100,
    paddingRight: 25,
    paddingLeft: 25,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  jesus: {
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: [{ translateX: -150 }, { translateY: -230 }],
    // transform: [{ translateY: -200 }],
    width: 300,
    height: 460,
  },
  dateText: {
    marginBottom: 15,
    color: "#000",
    fontSize: 36,
    textAlign: "center",
    fontFamily: "SegoeBold",
  },
  verseText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Quicksand",
  },
});
