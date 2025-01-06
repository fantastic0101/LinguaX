import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Colors from '../constants/colors';
import CustomButton from '../components/CustomButton';

const WelcomeUserScreen = ({ navigation }) => {
    const nextPage = () => {
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageDiv}>
                <Image source={require('../assets/well-done.png')} />
                <Text style={styles.title}>Welcome Amber</Text>
                <Text style={styles.description}>Your profile has been successfully created.{'\n'}
                    Let's start your learning journey</Text>
            </View>
            <View style={styles.buttonDiv}>
                <CustomButton onPress={nextPage} title="Continue" textColor={Colors.whiteColor} bgColor={Colors.primaryColor} borderColor={Colors.primaryDarkColor} marginBottom={12} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        justifyContent: 'space-between',
    },
    imageDiv: {
        marginTop: 24,
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontFamily: 'Lato',
        fontSize: 20,
        lineHeight: 28,
        fontWeight: 900,
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 8,
    },
    description: {
        fontFamily: 'Lato',
        lineHeight: 20,
        fontSize: 14,
        textAlign: 'center',
        color: Colors.gray600,
    },
    buttonDiv: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: Colors.borderColor,
    },
});

export default WelcomeUserScreen;
