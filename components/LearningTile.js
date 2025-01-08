import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import colors from '../constants/colors';

const LearningTile = ({arab, eng}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.arab}>{arab}</Text>
            <Text style={styles.eng}>{eng}</Text>
            <View style={styles.underline}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderBottomWidth: 6,
        borderColor: colors.borderColor,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: colors.whiteColor,
        borderRadius: 12,
        width: (Dimensions.get('window').width - 68) / 4,
    },
    arab: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 700,
        color: colors.gray800,
        paddingBottom: 2,
        textAlign: 'center',
    },
    eng: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 400,
        color: colors.gray500,
        textAlign: 'center',
    },
    underline: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.borderColor,
        marginTop: 8,
    }
});

export default LearningTile;