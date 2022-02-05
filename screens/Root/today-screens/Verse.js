import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, StatusBar, ScrollView, SafeAreaView, Dimensions } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const Verse = () => {
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView style={styles.scrollView}>

                {/* 
        <View style={styles.navIg}>
          <Text style={styles.navIgItem}>Verse</Text>
          <Text style={styles.navIgItem}>Devotion</Text>
          <Text style={styles.navIgItem}>Mood</Text>
        </View> */}
                <View style={styles.topCover}>
                    <Image
                        style={styles.coverImageTop}
                        source={require('../../../assets/images/rect.png')}
                        resizeMethod="resize"
                        resizeMode="cover"
                    />
                    <Image
                        style={styles.abosElips}
                        source={require('../../../assets/images/ellipse.png')}
                        resizeMethod="resize"
                        resizeMode="cover"
                    />
                    <View style={styles.flexContGreenTxtWrapper}>
                        <Text style={[styles.boldText, styles.colorWhite, styles.fs20]}>Philippians 4:19</Text>
                        <View style={styles.interBox}>
                            <Text style={[styles.boldText, styles.colorWhite, styles.fs22]}>BUT MY GOD</Text>
                            <Text style={[styles.colorWhite, styles.fs16]}>SHALL SUPPLY ALL YOUR NEED</Text>
                            <Text style={[styles.colorWhite, styles.fs16]}>ACCORDING TO HIS RICHES</Text>
                            <Text style={[styles.boldText, styles.colorWhite, styles.fs22]}>IN GLORY</Text>
                            <Text style={[styles.colorWhite, styles.fs16]}>BY CHRIST JESUS.</Text>
                        </View>
                    </View>
                    <View style={styles.shareIconsView}>
                        <Entypo name="share" size={24} color="white" /><Text style={styles.shareInfo}>25.5k</Text>
                        <AntDesign name="hearto" size={24} color="white" /><Text style={styles.shareInfo}>30.7k</Text>
                    </View>
                </View>
                <View style={styles.shadowBox}>
                    <View style={styles.shadowBoxTitle}>
                        <Image
                            style={styles.sunImg}
                            source={require('../../../assets/images/Sun.png')}

                        />
                        <Text style={[styles.fs20, styles.titleCard]}>Morning Prayer</Text>
                    </View>
                    <View style={styles.cardText}>
                        <Text style={{ color: ' rgba(138, 138, 138, 1)', lineHeight: 22, fontSize: 18, marginBottom: 10 }}>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt.</Text>
                        <Text><Text style={{ color: '#7E7E7E' }}>From : </Text><Text style={{ color: '#36BF49' }}>Philippians 4:19</Text></Text>
                    </View>
                </View>
                <View style={styles.shadowBox}>
                    <View style={styles.shadowBoxTitle}>
                        <Text style={[styles.fs20, styles.titleCard]}>Inspiration</Text>
                    </View>
                    <View style={styles.cardText}>
                        <Text style={{ color: ' rgba(138, 138, 138, 1)', lineHeight: 22, fontSize: 18, marginBottom: 10 }}>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt.</Text>
                        <Text style={{ color: ' rgba(138, 138, 138, 1)', lineHeight: 22, fontSize: 18, marginBottom: 10 }}>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt.</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.prayButton}
                    onPress={() => console.log('hello there')}
                >
                    <Text style={styles.prayButtonText}>Amen</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
};
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    prayButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    prayButton: {
        backgroundColor: '#36BF49',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    sunImg: {


    },
    titleCard: {
        lineHeight: 25,
        color: '#000',
        fontWeight: 'bold'
    },

    shadowBoxTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    shadowBox: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 15,
        marginTop: 10,
        marginVertical: 10,
        shadowColor: "#000000",

        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 1.0,
        shadowRadius: 2,

        elevation: 4,
    },
    abosElips: {
        position: 'absolute',
        top: 20,
        left: 20
    },
    shareIconsView: {
        flexDirection: 'row',
        color: '#fff',
        justifyContent: 'flex-end',
        marginTop: 40,
        marginRight: 25
    },
    shareInfo: {
        color: '#fff',
        marginHorizontal: 10,
        fontWeight: 'bold'
    },
    fs20: {
        fontSize: 20
    },
    fs22: {
        fontSize: 22,
        lineHeight: 35
    },
    fs16: {
        fontSize: 16,
    },
    navIg: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    navIgItem: {
        width: "33%",
        textAlign: 'center',

    },
    interBox: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    colorWhite: {
        color: '#fff'
    },
    flexContGreenTxtWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center',
        paddingTop: 25,

    },
    boldText: {
        fontWeight: 'bold'
    },

    topCover: {
        position: 'relative',
        width: '100%',
        height: 310,
        marginBottom: 10
    },
    coverImageTop: {
        position: 'absolute',
        height: '100%',
        top: 0,
        left: 0,
        width: '100%',
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        height: '100%',
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});

export default Verse;
