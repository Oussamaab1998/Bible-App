import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Header from './Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Mood = () => {
    return (
        <View style={styles.screen}>
            <Header title="Verse about mood" />
            <View style={styles.subContainer}>
                <View style={styles.question}>
                    <Text style={styles.questionText}>
                        How are you feeling today ?
                    </Text>
                </View>
                <View style={styles.optionsWrapper}>
                    <TouchableOpacity
                        style={styles.btnStyle}>
                        <Image
                            style={styles.imgIcon}
                            source={require('../../../assets/images/Smiling.png')}
                            resizeMethod='resize'
                            resizeMode="contain"
                        />
                        <Text style={styles.optionText}>Happy</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnStyle}>
                        <Image
                            style={styles.imgIcon}
                            source={require('../../../assets/images/Sad.png')}
                            resizeMethod='resize'
                            resizeMode="contain"
                        />
                        <Text style={styles.optionText}>Sad</Text>

                    </TouchableOpacity>



                    <TouchableOpacity
                        style={styles.btnStyle}>
                        <Image
                            style={styles.imgIcon}
                            source={require('../../../assets/images/Home.png')}
                            resizeMethod='resize'
                            resizeMode="contain"
                        />
                        <Text style={styles.optionText}>Life</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnStyle}>
                        <Image
                            style={styles.imgIcon}
                            source={require('../../../assets/images/Cross.png')}
                            resizeMethod='resize'
                            resizeMode="contain"
                        />
                        <Text style={styles.optionText}>Faith</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.fullWidthBtnStyle}>
                        <Image
                            style={styles.imgIcon}
                            source={require('../../../assets/images/Cross.png')}
                            resizeMethod='resize'
                            resizeMode="contain"
                        />
                        <Text style={styles.optionText}>Faith</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.bottomImageWrapper}>
                    <Image
                        style={styles.bottomImage}
                        source={require('../../../assets/images/sss.png')}
                        resizeMethod='resize'
                        resizeMode="contain"
                    />
                </View>
            </View>

        </View>
    );
};

export default Mood;

const styles = StyleSheet.create({
    bottomImageWrapper: {
        width: '100%',
        height: 250,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    bottomImage: {
        width: 200,
        height: 200
    },
    optionsWrapper: {
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionText: {
        fontSize: 20
    },
    btnStyle: {
        borderRadius: 8,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        height: 60,
        width: 140,
        marginHorizontal: 10,
        marginVertical: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 1.0,
        shadowRadius: 6,
        elevation: 9,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },


    fullWidthBtnStyle: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 15,
        height: 60,
        width: 240,
        marginHorizontal: 10,
        marginVertical: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 1.0,
        shadowRadius: 6,
        elevation: 9,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    imgIcon: {
        width: 30,
        height: 50,

    },
    screen: {
        flex: 1,
        backgroundColor: '#F0F0F0',

    },
    subContainer: {
        paddingHorizontal: 20,
        width: '100%',
    },
    question: {
        backgroundColor: '#fff',
        paddingRight: 15,
        paddingLeft: 25,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 20,
        marginBottom: 40,
        width: 280,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: "#000000",
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 1.0,
        shadowRadius: 2,

        elevation: 4,

    },
    questionText: {
        fontSize: 18
    },
});
