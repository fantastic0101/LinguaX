import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import colors from '../constants/colors';

const CustomButton = ({ title, subText, onPress, textColor, bgColor, borderColor, borderWidth, marginBottom, icon, justify, disabled, bgImage, leftIcon, locked }) => {
    return (
        <View style={[{ backgroundColor: disabled === true ? colors.borderColor : borderColor, paddingBottom: 4, borderRadius: 12, marginBottom: marginBottom }]}>
            <TouchableOpacity style={[styles.button, { backgroundColor: disabled === true ? colors.borderColor : bgColor, borderColor: disabled === true ? colors.borderColor : borderColor, borderWidth: borderWidth, justifyContent: justify ? justify : 'center' }]} onPress={onPress}>
                <View style={styles.content}>
                    {bgImage}
                    {icon}
                    <Text style={[styles.buttonText, { color: disabled === true ? colors.gray400 : textColor }]}>{title}</Text>
                    {locked && <View style={styles.lockIcon}><Image source={require('../assets/lock-circle.png')} /></View>}
                    {subText && (
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={styles.subText}>{subText}</Text>
                        </View>
                    )}
                    {leftIcon && (
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            {leftIcon}
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 24,
        fontFamily: 'Lato',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    subText: {
        fontFamily: 'Lato',
        fontSize: 14,
        lineHeight: 20,
        color: colors.gray500,
        textAlign: 'right',
    },
    lockIcon: {
        paddingLeft: 8,
    }
});

export default CustomButton;