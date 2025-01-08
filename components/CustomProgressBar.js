import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const CustomProgressBar = ({ percent, description, icon }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.process, { width: percent }]}>
                <View style={styles.insideProcess}>
                    {description && <Text style={styles.description}>{description}</Text>}
                </View>
            </View>
            {icon && (
                <View style={styles.imageIcon}>
                    {icon}
                </View>
            )}
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
    },
    description: {
        position: 'absolute',
        left: '70%',
        color: colors.primaryColor,
        fontSize: 14,
        lineHeight: 16,
        marginTop: -5,
    },
    imageIcon: {
        backgroundColor: colors.whiteColor,
        width: 28,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.borderColor,
        position: 'absolute',
        marginTop: -5,
        right: 0,
    }
});

export default CustomProgressBar;