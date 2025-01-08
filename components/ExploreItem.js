import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import CustomProgressBar from './CustomProgressBar';
import colors from '../constants/colors';

const ExploreItem = ({ fCount, tCount, type }) => {
    let percent = 0;
    if (fCount !== 0 && tCount !== 0)
        percent = fCount * 100 / tCount;

    return (
        <View style={styles.root}>
            {type === 'coming-soon' ?
                (
                    <ImageBackground source={require('../assets/mask-dark.png')} resizeMode='cover' style={styles.imageContainer}>
                        <View style={styles.row}>
                            <Text style={styles.tag}>المفردات<Image source={require('../assets/video-circle.png')} style={styles.tagIcon}/></Text>
                            <View style={styles.soon}>
                                <Text style={styles.soonTitle}>Coming soon</Text>
                            </View>
                        </View>
                        <Text style={styles.title}>Root Script</Text>
                        <Text style={styles.description}>Master Arabic letters, diacritics, and basic word formation.</Text>
                        <CustomProgressBar percent={`${percent}%`} description={`${fCount + '/' + tCount}`} icon={<Image source={require('../assets/tropy.png')} />} />
                    </ImageBackground>
                ) : (
                    <View style={styles.container}>
                        <View style={styles.row}>
                        <Text style={styles.tag}>المفردات<Image source={require('../assets/tick-circle.png')} style={styles.tagIcon}/></Text>
                            <Text style={styles.rowDetail}>DETAILS <Image source={require('../assets/arrow-right-active.png')} style={styles.arrowIcon}/></Text>
                        </View>
                        <Text style={styles.title}>Root Script</Text>
                        <Text style={styles.description}>Master Arabic letters, diacritics, and basic word formation.</Text>
                        <CustomProgressBar percent={`${percent}%`} description={`${fCount + '/' + tCount}`} icon={<Image source={require('../assets/tropy.png')} />} />
                    </View>
                )}
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        width: '100%',
        flex: 1,
        backgroundColor: colors.whiteColor,
        borderWidth: 1,
        borderBottomWidth: 6,
        borderColor: colors.borderColor,
        borderRadius: 12,
        marginBottom: 12,
    },
    container: {
        padding: 16,
    },
    imageContainer: {
        padding: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: colors.borderColor,
        borderStyle: 'dashed',
    },
    rowDetail: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: 500,
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.primaryColor
    },
    arrowIcon: {
        height: 10,
    },
    tag: {
        fontSize: 12,
        lineHeight: 16,
        color: colors.gray500,
        fontWeight: 600,
    },
    tagIcon: {
        marginRight: 12,
    },
    title: {
        fontSize: 20,
        lineHeight: 28,
        fontWeight: 900,
        paddingTop: 8,
        color: colors.gray700,
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        color: colors.gray500,
        paddingTop: 4,
        paddingBottom: 8,
    },
    soon: {
        paddingVertical: 2,
        paddingHorizontal: 30,
        backgroundColor: colors.primaryDarkColor,
        borderRadius: 10,
    },
    soonTitle: {
        color: colors.whiteColor,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: 600,
    }
});

export default ExploreItem;


