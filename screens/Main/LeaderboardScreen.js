import { Text, View, Image, StyleSheet } from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';
import colors from '../../constants/colors';
import RankingItem from '../../components/RankingItem';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';

const LeaderboardScreen = ({ navigation }) => {
    const data = [
        { number: 1, fName: 'John', lName: 'Powell', exp: 400 },
        { number: 2, fName: 'John', lName: 'Powell', exp: 400 },
        { number: 3, fName: 'John', lName: 'Powell', exp: 400 },
        { number: 4, fName: 'John', lName: 'Powell', exp: 400 },
        { number: 5, fName: 'John', lName: 'Powell', exp: 400 },
        { number: 6, fName: 'John', lName: 'Powell', exp: 400 },
        { number: 7, fName: 'John', lName: 'Powell', exp: 400 },
        { number: 8, fName: 'John', lName: 'Powell', exp: 400 },
        { number: 9, fName: 'John', lName: 'Powell', exp: 400 },
        { number: 10, fName: 'John', lName: 'Powell', exp: 400 },
        { number: 11, fName: 'John', lName: 'Powell', exp: 400 },
        { number: 12, fName: 'John', lName: 'Powell', exp: 400 },
    ];
    const [index, setIndex] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Image source={require('../../assets/clock-icon.png')} />
                        <Text style={styles.time}>
                            Trail time: 30:00
                        </Text>
                    </View>
                    <Text style={styles.title}>Gold League</Text>
                </View>
                <View style={styles.subHeader}>
                    <View style={styles.medals}>
                        <Image source={require('../../assets/bronze.png')} />
                        <Image source={require('../../assets/silver.png')} />
                        <Image source={require('../../assets/gold.png')} />
                        <Image source={require('../../assets/lock-medal.png')} />
                        <Image source={require('../../assets/lock-medal.png')} />
                    </View>
                    <View style={styles.timeInfo}>
                        <View style={styles.subDiv1}>
                            <Text style={styles.subTitle}>TIME LEFT</Text>
                            <View>
                                <Image />
                                <Text style={styles.hours}>22 hours</Text>
                            </View>
                        </View>
                        <View style={styles.subDiv2}>
                            <Text style={styles.subTitle}>TODAY</Text>
                            <View>
                                <Image />
                                <Text style={styles.places}>3 places</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    {data.map((item) => {
                        return <RankingItem onPress={() => setIndex(item.number)} key={item.number} number={item.number} fName={item.fName} lName={item.lName} exp={item.exp} selected={index === item.number} />;
                    })}
                </ScrollView>
            </View>
            <BottomNavigation navigation={navigation} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
    },
    content: {
        flex: 1,
        marginTop: 16,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor,
    },
    time: {
        color: colors.primaryColor,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: 400,
        paddingLeft: 4,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: colors.orangeTransColor,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: 800,
        color: colors.gray800,
        textAlign: 'center',
        paddingTop: 4,
        paddingBottom: 12,
    },
    subHeader: {
        paddingHorizontal: 16,
        marginVertical: 16,
    },
    medals: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    timeInfo: {
        backgroundColor: colors.whiteColor,
        borderWidth: 1,
        borderBottomWidth: 6,
        paddingHorizontal: 16,
        borderColor: colors.borderColor,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    subTitle: {
        fontSize: 12,
        lineHeight: 16,
        color: colors.gray400,
        fontWeight: 700,
        textAlign: 'center',
    },
    hours: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.primaryColor,
        fontWeight: 900,
        textAlign: 'center',
        paddingTop: 4,
    },
    places: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.blue100,
        fontWeight: 900,
        textAlign: 'center',
        paddingTop: 4,
    },
    subDiv1: {
        width: '50%',
        borderRightColor: colors.borderColor,
        borderRightWidth: 1,
        paddingVertical: 8,
    },
    subDiv2: {
        width: '50%',
        paddingVertical: 8,
    },
});

export default LeaderboardScreen;