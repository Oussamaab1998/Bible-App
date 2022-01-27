import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
const Me = () => {
  return (
    <View style={styles.container} >

      {/* The Top Cover Green Area  */}

      <View style={styles.topCoverBg}>
        <View style={styles.contentWrapper}>
          <View style={styles.coverTextStyle}>
            <Text style={styles.titleGreenArea}>Please Sign In</Text>
            <Text style={styles.textGreenArea}>Welcome to King James Bible</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.churchImage}
              source={require('../../assets/images/chruch.png')}
              resizeMethod="resize"
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      {/* The Top Cover Green Area  */}

      {/* The Shadow Under Top Cover Green Area  */}
      <View style={styles.shaDowBox}>
        <View style={styles.titleTextUnderGreenArea}>
          <Text style={styles.titleTextUnderGreenAreaText}>Time Connected With God</Text>
          <MaterialIcons name="navigate-next" size={28} color="#B7B7B7" />
        </View>

        <View style={styles.bottomOfShadow}>
          <View style={styles.prayImgWrapper}>
            <Image

              source={require('../../assets/images/pray.png')}
              resizeMethod="resize"
              resizeMode="contain"
            />
          </View>

          <View
            style={{

              backgroundColor: '#D8D8D8',
              width: 1,
              height: "100%",
            }}
          />
          <View style={styles.bibleImgWrapper}>
            <Image
              source={require('../../assets/images/bible.png')}
              resizeMethod="resize"
              resizeMode="contain"
            />
          </View>
        </View>
      </View>


      {/* The Shadow Under Top Cover Green Area  */}

      {/* The Pink Box Under The Shadow Box  */}


      <View style={styles.pinkBox}>
        <Image
          source={require('../../assets/images/shield.png')}
          resizeMethod="resize"
          resizeMode="contain"
        />
        <Text style={styles.textOfPinkBox}>Faith Achievement</Text>

      </View>
      {/* The Pink Box Under The Shadow Box  */}

      {/* The Marks Container  */}
      <View style={styles.marksContainer}>
        <Text style={{ fontWeight: 'bold', color: '#000' }}>Marks</Text>
        <View style={styles.marksSubContainer}>
          <View style={styles.marksCard}>
            <Image
              style={{ width: 35, height: 35 }}
              source={require('../../assets/images/marker.png')}
              resizeMethod="resize"
              resizeMode="contain"
            />
            <Text>Highlights</Text>
          </View>
          <View style={styles.marksCard}>
            <Image
              style={{ width: 35, height: 35 }}
              source={require('../../assets/images/spiral.png')}
              resizeMethod="resize"
              resizeMode="contain"
            />
            <Text>Notes</Text>
          </View>
          <View style={styles.marksCard}>
            <Image
              style={{ width: 35, height: 35 }}
              source={require('../../assets/images/bookmark.png')}
              resizeMethod="resize"
              resizeMode="contain"
            />
            <Text>BookMarks</Text>
          </View>
          <View style={styles.marksCard}>
            <View style={{
              padding: 10, backgroundColor: '#3958FF', width: 35, height: 35, justifyContent: "center", alignItems: 'center', borderRadius: 17.5
            }}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require('../../assets/images/heart.png')}
                resizeMethod="resize"
                resizeMode="cover"
              />
            </View>
            <Text>Favorites</Text>
          </View>
        </View>
      </View>
    </View >
  );
};
const styles = StyleSheet.create({

  /*Marks Style */
  marksContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginLeft: '10%',
    marginTop: 20,
    width: '80%',
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  marksSubContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  marksCard: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20
  },


  container: {
    height: '100%',
  },
  topCoverBg: {
    backgroundColor: '#36BF49',
    height: '30%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,

  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%'
  },
  coverTextStyle: {

    width: '70%',
  },
  titleGreenArea: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10
  },
  textGreenArea: {
    color: '#fff',
    fontSize: 16
  },
  imageWrapper: {
    backgroundColor: "#fff",
    padding: 20,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  churchImage: {
    height: 70,
    width: 70,
  },

  /* The Top Cover Green Area  */
  shaDowBox: {

    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginLeft: '10%',
    marginTop: '-10%',
    width: '80%',
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  titleTextUnderGreenArea: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    flexDirection: 'row'
  },
  titleTextUnderGreenAreaText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 10,
  },
  bottomOfShadow: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between'
  },
  bibleImgWrapper: {
    backgroundColor: '#ED9630',
    borderRadius: 10,

  },

  prayImgWrapper: {
    backgroundColor: '#9A30ED',
    borderRadius: 10,

  },
  pinkBox: {
    width: '80%',
    marginLeft: "10%",
    backgroundColor: '#FCE6D5',
    borderColor: '#ED9630',
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20
  },
  textOfPinkBox: {
    color: "#000",
    fontWeight: 'bold',
    marginLeft: 20
  }

});

export default Me;
