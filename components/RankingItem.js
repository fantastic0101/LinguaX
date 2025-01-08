import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

const RankingItem = ({ number, fName, lName, exp, onPress, selected }) => {
    let omitName = '';
    omitName = fName[0] + lName[0];
    if (!lName)
        omitName += fName[0];

    const styles = StyleSheet.create({
        container: {
            backgroundColor: selected ? colors.blue100 : colors.whiteColor,
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
            color: selected ? colors.whiteColor : colors.gray600,
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
            backgroundColor: colors.orange4Color,
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
            color: selected ? colors.whiteColor : colors.gray800,
            textAlign: 'center',
        },
        rank: {
            width: 32,
            alignItems: 'center',
            justifyContent: 'center',
        }
    });

    return (
        <TouchableOpacity onPress={onPress}>
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
        </TouchableOpacity>
    )
};

export default RankingItem;