import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Alert } from "react-native";
import { Provider } from "react-redux";
import AppMain from "./screens/AppMain";
import store from "./redux/createStore";

const App = () => {
    return (
        <Provider store={store}>

        </Provider>
    );
};


export default App;
