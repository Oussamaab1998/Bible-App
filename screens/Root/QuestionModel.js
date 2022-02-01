import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { icons } from "../../constants";
const QuestionModel = (props) => {
    const { header, body } = props;
    return (
        <View style={[styles.card, styles.shadow]}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardTitle1}>{header}</Text>
                <TouchableOpacity onPress={() => console.log("Sound !!!")}>
                    <Image
                        style={styles.sound}
                        source={icons.sound}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle2}>{body}</Text>
            </View>
        </View>
    );
};

export default QuestionModel;

const styles = StyleSheet.create({
    //   card
    card: {
        width: "100%",
        marginBottom: 30,
        paddingHorizontal: 15,
    },
    cardHeader: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: "#36bf49",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 1,
        borderColor: "#36bf49",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cardBody: {
        padding: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 1,
        borderColor: "#36bf49",
    },
    cardTitle1: {
        color: "white",
        fontSize: 18,
    },
    cardTitle2: {
        color: "black",
        fontSize: 18,
    },
    sound: {
        width: 20,
        height: 20,
    },
    shadow: {
        shadowColor: "#36bf49",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        shadowRadius: 2,
        elevation: 4,
    },
});