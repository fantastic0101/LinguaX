import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const CustomProgressBar = ({ percent }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.process, {width: percent}]}>
                <View style={styles.insideProcess}></View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 16,
        backgroundColor: colors.borderColor,
        borderRadius: 100,
    },
    process: {
        height: 16,
        backgroundColor: colors.lightGreenColor,
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        paddingVertical: 6,
        paddingHorizontal: 8,
    },
    insideProcess: {
        width: '100%',
        backgroundColor: '#FFFFFF4D',
        height: 4,
        borderRadius: 100,
    }
});

export default CustomProgressBar;