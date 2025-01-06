import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import Colors from '../constants/colors';
import CustomButton from '../components/CustomButton';

const SignInScreen = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={styles.scrollView}
                >
                    <View style={styles.inputDiv}>
                        <TextInput
                            label="Username or email"
                            mode="outlined"
                            value={id}
                            onChangeText={(text) => setId(text)}
                            style={[styles.input, { marginBottom: 16 }]}
                        />
                        <TextInput
                            label="Password"
                            mode="outlined"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={secureText}
                            right={
                                <TextInput.Icon
                                    icon={secureText ? 'eye-off' : 'eye'}
                                    onPress={() => setSecureText(!secureText)}
                                />
                            }
                            style={styles.input}
                        />
                        <View style={{ marginTop: 24 }}>
                            <CustomButton
                                title="Sign in"
                                textColor={Colors.whiteColor}
                                bgColor={Colors.primaryColor}
                                borderColor={Colors.primaryDarkColor}
                            />
                            <View style={{ paddingVertical: 10, marginTop: 12 }}>
                                <Text style={styles.forgotPassword}>Forgot password</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.socialDiv}>
                        <CustomButton
                            title="Sign in with Google"
                            textColor="black"
                            bgColor={Colors.whiteColor}
                            borderWidth={1.5}
                            borderColor={Colors.borderColor}
                            icon={
                                <Image
                                    source={require('../assets/logo-gg.png')}
                                    style={styles.icon}
                                />
                            }
                            marginBottom={12}
                        />
                        <CustomButton
                            title="Sign in with Facebook"
                            textColor="black"
                            bgColor={Colors.whiteColor}
                            borderWidth={1.5}
                            borderColor={Colors.borderColor}
                            icon={
                                <Image
                                    source={require('../assets/logo-fb.png')}
                                    style={styles.icon}
                                />
                            }
                            marginBottom={12}
                        />
                        <CustomButton
                            title="Sign in with Apple"
                            textColor="black"
                            bgColor={Colors.whiteColor}
                            borderWidth={1.5}
                            borderColor={Colors.borderColor}
                            icon={
                                <Image
                                    source={require('../assets/logo-apple.png')}
                                    style={styles.icon}
                                />
                            }
                            marginBottom={12}
                        />
                        <Text style={styles.description}>
                            By signing in to Duolingo, you agree to our{'\n'}
                            <Text style={styles.boldText}>Terms</Text> and{' '}
                            <Text style={styles.boldText}>Privacy Policy</Text>.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.bgColor,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    inputDiv: {
        marginBottom: 24,
    },
    input: {
        marginBottom: 16,
    },
    forgotPassword: {
        fontFamily: 'Lato',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        color: Colors.primaryColor,
        textAlign: 'center',
    },
    socialDiv: {
        marginTop: 32,
    },
    icon: {
        marginRight: 8,
    },
    description: {
        textAlign: 'center',
        marginTop: 24,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
    },
    boldText: {
        fontWeight: '800',
    },
});

export default SignInScreen;