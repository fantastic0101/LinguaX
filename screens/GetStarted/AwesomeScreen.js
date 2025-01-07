import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Colors from '../../constants/colors';
import CustomButton from '../../components/CustomButton';

const AwesomeScreen = ({ navigation }) => {
    const nextPage = () => {
        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageDiv}>
                <Image source={require('../../assets/create-profile.png')} />
                <Text style={styles.title}>Awesome</Text>
                <Text style={styles.description}>Let's study together! Create your profile now to save your progress and keep learning seamlessly</Text>
            </View>
            <View style={styles.buttonDiv}>
                <CustomButton onPress={nextPage} title="Create profile" textColor={Colors.whiteColor} bgColor={Colors.primaryColor} borderColor={Colors.primaryDarkColor} marginBottom={12} />
                <View style={{ paddingBottom: 10, marginTop: 12 }}>
                    <Text style={styles.forgotPassword}>Forgot password</Text>
                </View>
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
    forgotPassword: {
        fontFamily: 'Lato',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        color: Colors.primaryColor,
        textAlign: 'center',
    },
});

export default AwesomeScreen;
