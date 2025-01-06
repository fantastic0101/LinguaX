import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '../constants/colors';

const WelcomeScreen = () => {
    return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
    },
});

export default WelcomeScreen;
