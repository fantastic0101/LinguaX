import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Colors from '../constants/colors';
import CustomButton from '../components/CustomButton';

const WelcomeScreen = ({ navigation }) => {
    const nextPage = () => {
        navigation.navigate('WelcomeStep1');
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageDiv}>
                <Image source={require('../assets/welcome.png')} />
                <Text style={styles.title}>Welcome to LinguaX</Text>
                <Text style={styles.description}>Answer 4 quick questions to help us{'\n'}tailor your learning experience just for you</Text>
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

export default WelcomeScreen;
