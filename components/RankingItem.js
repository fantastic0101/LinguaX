import { Text, View, StyleSheet, Image } from 'react-native';
import colors from '../constants/colors';

const RankingItem = ({ number, fName, lName, exp }) => {
    let omitName = '';
    omitName = fName[0] + lName[0];
    if (!lName)
        omitName += fName[0];

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <View style={styles.rank}>
                    {number === 1 && <Image source={require('../assets/gold-medal.png')} />}
                    {number === 2 && <Image source={require('../assets/silver-medal.png')} />}
                    {number === 3 && <Image source={require('../assets/bronze-medal.png')} />}
                    {number > 3 && <Text style={[styles.mainFont]}>{number}</Text>}
                </View>
                <View style={styles.omitContainer}>
                    <Text style={styles.omitName}>{omitName}</Text>
                </View>
                <Text style={styles.mainFont}>{fName + ' ' + lName}</Text>
            </View>
            <View>
                <Text style={styles.exp}>{exp} AP</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.whiteColor,
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    exp: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 700,
        color: colors.gray600,
        textAlign: 'right',
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    omitContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.orangeTransColor,
        marginHorizontal: 12,
    },
    omitName: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.primaryColor,
        fontWeight: 700,
        textAlign: 'center',
    },
    mainFont: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 700,
        color: colors.gray800,
        textAlign: 'center',
    },
    rank: {
        width: 32,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default RankingItem;