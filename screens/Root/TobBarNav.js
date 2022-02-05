import React from 'react';
import { StyleSheet, Platform, StatusBar, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useFonts, Quicksand_700Bold } from "@expo-google-fonts/quicksand";
import { MaterialCommunityIcons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Me from './Me';
import Today from './Today';
import Verse from './today-screens/Verse';
import Devotion from './today-screens/Devotion';
import Mood from './today-screens/Mood';

const Tab = createMaterialTopTabNavigator();
const TobBarNav = () => {
    let [fontsLoaded] = useFonts({
        Quicksand_700Bold,
        Quicksand: require("../../assets/fonts/Quicksand.ttf"),
        SegoeBold: require("../../assets/fonts/SegoeBold.ttf"),
        SegoeSemibold: require("../../assets/fonts/SegoeSemibold.ttf"),
    });
    return (
        <View style={styles.container}>
            <Tab.Navigator
                backBehavior='history'
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        height: 80,
                        display: 'flex',
                        justifyContent: 'center',
                        shadowOpacity: 0,
                        elevation: 0,
                        // paddingBottom: Platform.OS === "android" ? StatusBar.currentHeight : 0,
                    },

                    tabBarLabelStyle: {
                        fontSize: 18,
                        fontFamily: 'SegoeBold'
                    },

                }}
            >
                <Tab.Screen
                    name="Verse"
                    component={Verse}
                    options={{
                        tabBarLabel: 'Verse',
                        tabBarStyle: {
                            height: 80,
                            display: 'flex',
                            justifyContent: 'center',
                            shadowOpacity: 0,
                            elevation: 0,
                        },
                        tabBarIndicatorStyle: {
                            backgroundColor: '#36BF49',
                            marginBottom: 10,
                            height: 3,
                            width: 80,
                            marginLeft: 25
                        }

                        // tabBarButton: (props) => <TabButtonForSpecialOne {...props} />
                    }}
                />
                <Tab.Screen
                    name="Devotion"
                    component={Devotion}
                    options={{
                        tabBarLabel: 'Devotion',
                        tabBarIndicatorStyle: {
                            backgroundColor: '#36BF49',
                            marginBottom: 10,
                            height: 3,
                            width: 80,
                            marginLeft: 25
                        }

                    }}
                />
                <Tab.Screen name="Mood" component={Mood} options={{
                    tabBarLabel: 'Mood', tabBarStyle: { display: 'none' }, tabBarIndicatorStyle: {
                        backgroundColor: '#36BF49',
                        marginBottom: 10,
                        height: 3,
                        width: 80,
                        marginLeft: 25,
                    }
                }} />
            </Tab.Navigator>
        </View>
    );
};

export default TobBarNav;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});