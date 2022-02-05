import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Icons from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Header = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity

                onPress={() => navigation.goBack()}
            >
                <Icons.Ionicons name="chevron-back" size={26} color="#999999" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{props.title}</Text>
            <TouchableOpacity
                onPress={() => { console.log('Clock button') }}
            >
                <Icons.AntDesign name="clockcircleo" size={26} color="#999999" />
            </TouchableOpacity>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    headerTitle: {
        color: 'black',
        fontSize: 20,
        lineHeight: 27
    },
});

