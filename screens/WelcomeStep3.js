import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../constants/colors';
import CustomButton from '../components/CustomButton';
import { useState } from 'react';

const WelcomeStep3 = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const changeIndex = (val) => {
        setSelectedIndex(val);
    }

    const nextPage = () => {
        if (selectedIndex !== 0)
            navigation.navigate('WelcomeStep4');
    }

    return (
        <View style={styles.container}>
            <View style={styles.description}>
                <Text style={styles.title}>I plan to practice ...</Text>
                <Text style={styles.subTitle}>Your selections will shape a personalized experience just for you</Text>
                <View style={styles.options}>
                    <CustomButton
                        title="5-10 min/day"
                        subText="Quick daily practice"
                        textColor="black"
                        bgColor={colors.whiteColor}
                        borderWidth={1.5}
                        borderColor={selectedIndex === 1 ? colors.primaryColor : colors.borderColor}
                        marginBottom={12}
                        justify='start'
                        onPress={() => {
                            changeIndex(1);
                        }}
                    />
                    <CustomButton
                        title="20-30 min/day"
                        subText="Steady progress"
                        textColor="black"
                        bgColor={colors.whiteColor}
                        borderWidth={1.5}
                        borderColor={selectedIndex === 2 ? colors.primaryColor : colors.borderColor}
                        marginBottom={12}
                        justify='start'
                        onPress={() => {
                            changeIndex(2);
                        }}
                    />
                    <CustomButton
                        title="1 hour or more/day"
                        subText="Master language"
                        textColor="black"
                        bgColor={colors.whiteColor}
                        borderWidth={1.5}
                        borderColor={selectedIndex === 3 ? colors.primaryColor : colors.borderColor}
                        marginBottom={12}
                        justify='start'
                        onPress={() => {
                            changeIndex(3);
                        }}
                    />
                </View>
            </View>
            <View style={styles.buttonDiv}>
                <CustomButton title="Continue" onPress={nextPage} textColor={colors.whiteColor} bgColor={colors.primaryColor} borderColor={colors.primaryDarkColor} marginBottom={12} disabled={selectedIndex !== 0 ? false : true} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgColor,
        flex: 1,
        justifyContent: 'space-between',
    },
    description: {
        padding: 16,
    },
    title: {
        fontFamily: 'Lato',
        fontSize: 20,
        lineHeight: 28,
        color: colors.gray800,
        marginBottom: 8,
    },
    subTitle: {
        fontFamily: 'Lato',
        fontSize: 14,
        lineHeight: 20,
        color: colors.gray600,
    },
    icon: {
        marginRight: 12,
    },
    options: {
        marginTop: 40,
    },
    buttonDiv: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: colors.borderColor,
    },
});

export default WelcomeStep3;