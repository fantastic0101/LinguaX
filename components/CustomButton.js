import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const CustomButton = ({ title, onPress, textColor, bgColor, borderColor, borderWidth, marginBottom, icon }) => {
    return (
        <View style={[{backgroundColor: borderColor, paddingBottom: 4, borderRadius: 12, marginBottom: marginBottom}]}>
            <TouchableOpacity style={[styles.button, { backgroundColor: bgColor, borderColor: borderColor, borderWidth: borderWidth }]} onPress={onPress}>
                {icon}
                <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        borderRadius: 12,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 24,
        fontFamily: 'Lato',
    },
});

export default CustomButton;