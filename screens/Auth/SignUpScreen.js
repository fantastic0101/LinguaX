import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';
import colors from '../../constants/colors';
import CustomButton from '../../components/CustomButton';
import { useState } from 'react';

const SignUpScreen = ({ navigation }) => {
    const [age, setAge] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);

    const [errors, setErrors] = useState({
        age: '',
        name: '',
        email: '',
        password: '',
    });

    const validateInputs = () => {
        let isValid = true;
        const newErrors = { age: '', name: '', email: '', password: '' };

        if (!age.trim()) {
            newErrors.age = 'Please enter your age.';
            isValid = false;
        }
        if (!name.trim()) {
            newErrors.name = 'Please enter your name.';
            isValid = false;
        }
        if (!email.trim()) {
            newErrors.email = 'Please enter your email.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Enter a valid email address.';
            isValid = false;
        }
        if (!password.trim()) {
            newErrors.password = 'Please enter your password.';
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleCreateProfile = () => {
        const isValid = validateInputs();

        if (isValid) {
            navigation.navigate('WelcomeUser');
        } else {
            console.log('Validation failed. Fix errors.');
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={styles.scrollView}
                >
                    <View style={styles.inputs}>
                        <TextInput
                            style={styles.input}
                            label="Age"
                            mode="outlined"
                            value={age}
                            onChangeText={(text) => setAge(text.replace(/[^0-9]/g, ''))}
                            keyboardType="numeric"
                            maxLength={3}
                        />
                        {errors.age ? <Text style={styles.errorText}>{errors.age}</Text> : null}

                        <TextInput
                            style={styles.input}
                            label="Name"
                            mode="outlined"
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                        {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

                        <TextInput
                            style={styles.input}
                            label="Email Address"
                            mode="outlined"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

                        <TextInput
                            style={styles.input}
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
                        />
                        {errors.password ? (
                            <Text style={styles.errorText}>{errors.password}</Text>
                        ) : null}
                    </View>

                    <View style={styles.buttonDiv}>
                        <CustomButton
                            title="Create profile"
                            textColor={colors.whiteColor}
                            bgColor={colors.primaryColor}
                            borderColor={colors.primaryDarkColor}
                            marginBottom={12}
                            onPress={handleCreateProfile}
                        />
                        <Text style={styles.description}>
                            By signing in to Duolingo, you agree to our{'\n'}
                            <Text style={styles.boldText}>Terms</Text> and{' '}
                            <Text style={styles.boldText}>Privacy Policy</Text>.
                        </Text>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
        justifyContent: 'space-between',
    },
    inputs: {
        padding: 16,
    },
    input: {
        marginBottom: 16,
    },
    errorText: {
        color: colors.errorColor,
        fontSize: 12,
        marginTop: -8,
        marginBottom: 8,
    },
    buttonDiv: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: colors.borderColor,
    },
    description: {
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
    },
    boldText: {
        fontWeight: '800',
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
});

export default SignUpScreen;