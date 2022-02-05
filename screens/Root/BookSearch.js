import { StyleSheet, Text, View, StatusBar, Dimensions, FlatList, TextInput } from "react-native";
import React from "react";

import {
    MaterialCommunityIcons,
    FontAwesome,
    Ionicons,
    Feather,
    MaterialIcons,
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const data = [
    { id: '1', title: 'Genesis' },
    { id: '2', title: 'Exodus' },
    { id: '3', title: 'Livicticus' },
    { id: '4', title: 'Numbers' },
    { id: '5', title: 'Judges' },
];

export default function BookSearch() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#62a24b" barStyle="light-content" />

            <View style={styles.appBar}>
                <Ionicons
                    style={{ marginStart: 16, marginTop: 10 }}
                    name="arrow-back"
                    color="#fff"
                    size={24}
                />

                <Text
                    style={{
                        marginStart: 16,
                        marginTop: 12,
                        fontSize: 18,
                        color: "#fff",
                    }}
                >
                    Choose a book
                </Text>

                <MaterialCommunityIcons
                    style={{ marginStart: 16, marginTop: 10 }}
                    name="sort-alphabetical-ascending"
                    color="#fff"
                    size={24}
                />

                <MaterialIcons
                    style={{ marginStart: 16, marginTop: 10 }}
                    name="access-time"
                    color="#fff"
                    size={24}
                />
            </View>

            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            marginStart: 30,
                            marginTop: 20,
                            fontSize: 20,
                            fontWeight: "bold",
                        }}
                    >
                        Book
                    </Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            textAlignVertical: "center",
                            textAlign: "center",
                            marginTop: 20,
                            fontSize: 20,
                            color: "gray",
                        }}
                    >
                        Chapter
                    </Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            textAlign: "right",
                            marginEnd: 30,
                            marginTop: 20,
                            fontSize: 20,
                            color: "gray",
                        }}
                    >
                        Verse
                    </Text>
                </View>
            </View>

            {/* SearchBar  */}

            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.listItemText}>{item.title}</Text>
                    </View>
                )}
            />

            <View style={styles.circleShapeView}>
                <Feather
                    style={{ marginTop: 15, marginStart: 15 }}
                    name="check"
                    color="#fff"
                    size={32}
                />
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    appBar: {
        flexDirection: "row",
        backgroundColor: "#6fbc56",
        width: width.Dimensions,
        height: Platform.OS === "android" ? 48 : 44,
    },
    circleShapeView: {
        position: "absolute",
        right: 30,
        bottom: 30,
        width: 60,
        height: 60,
        borderRadius: 150 / 2,
        backgroundColor: '#6fbc56',
        elevation: 3
    },
    container: {
        flex: 1,
    },
    listItem: {
        marginTop: 10,

        padding: 20,
        backgroundColor: '#fff',
        width: '100%'
    },
    listItemText: {
        fontSize: 18
    },
});