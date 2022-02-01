import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { icons } from "../../constants";
import BtnModel from "./BtnModel";
import QuestionModel from "./QuestionModel";

const QuizQuestion = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={[styles.borderBox2, styles.shadow]}
                    onPress={() => console.log("clicked !!")}
                >
                    <Text style={styles.title1}>30</Text>
                    <Text style={styles.title2}>Dec</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.borderBox1, styles.shadow]}
                    onPress={() => console.log("clicked !!")}
                >
                    <Image
                        style={styles.trophy}
                        source={icons.trophy}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            {/* Card */}
            <View style={{}}>
                <QuestionModel
                    header="Question 1/5"
                    body="The book of Philippians is addressed to _______."
                />
            </View>
            {/* BtnModel */}
            <View style={styles.btns}>
                <BtnModel title="1. Bishops" />
                <BtnModel title="2. Deacons" />
                <BtnModel title="3. All the saints" />
                <BtnModel title="4. All of the above" />
            </View>
        </SafeAreaView>
    );
};

export default QuizQuestion;

const styles = StyleSheet.create({
    container: {
        // justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        height: "100%",
        paddingVertical: 30,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        width: "100%",
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    borderBox1: {
        borderColor: "#36bf49",
        borderWidth: 1.5,
        borderRadius: 8,
        padding: 6,
        backgroundColor: "white",
    },
    borderBox2: {
        borderColor: "#36bf49",
        borderWidth: 1.5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    trophy: {
        width: 35,
        height: 35,
    },
    img1: {
        width: 300,
        height: 250,
    },
    title1: {
        textAlign: "center",
        fontSize: 20,
        color: "white",
        backgroundColor: "#36bf49",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    title2: {
        textAlign: "center",
        fontSize: 20,
        color: "black",
        fontWeight: "600",
        backgroundColor: "white",
        padding: 10,
    },
    title3: {
        textAlign: "center",
        fontSize: 26,
        color: "black",
        fontWeight: "600",
    },
    title4: {
        textAlign: "center",
        fontSize: 26,
        color: "white",
        fontWeight: "bold",
        paddingHorizontal: 100,
        paddingVertical: 12,
    },
    submit: {
        backgroundColor: "#36bf49",
        borderRadius: 50,
        width: "100%",
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

    btns: {
        width: "100%",
        paddingHorizontal: 20,
    },
});
