// import React from 'react';
// import { Text } from 'react-native'
// const BibleSerch = () => {
//     return <Text>Hellllllo </Text>;
// };

// export default BibleSerch;

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BibleSerch = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text style={{ color: 'red', fontSize: 25 }}>Hello Rami</Text>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            ><Text style={{ color: 'green', fontSize: 25 }}>Back</Text></TouchableOpacity>
        </View>
    );
};

export default BibleSerch;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

