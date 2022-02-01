import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const BtnModel = (props) => {
    const { title } = props;
    return (
        <TouchableOpacity
            style={[styles.btn, styles.shadow]}
            onPress={() => console.log("Response Clicked !!")}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default BtnModel;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#eeeeee",
        borderRadius: 50,
        width: "100%",
        marginBottom: 20,
    },
    title: {
        color: "black",
        fontSize: 22,
        textAlign: "center",
        paddingVertical: 12,
    },
    shadow: {
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        shadowRadius: 2,

        elevation: 4,
    },
});