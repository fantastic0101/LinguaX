import { Text, View, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';
import CustomButton from '../../components/CustomButton';
import LearningTile from '../../components/LearningTile';
import colors from '../../constants/colors';

const LearningScreen = ({ navigation }) => {
    const items = [
        { index: 0, letterArab: 'ث', letterEng: 'th' },
        { index: 1, letterArab: 'ث', letterEng: 'th' },
        { index: 2, letterArab: 'ث', letterEng: 'th' },
        { index: 3, letterArab: 'ث', letterEng: 'th' },
        { index: 4, letterArab: 'ث', letterEng: 'th' },
        { index: 5, letterArab: 'ث', letterEng: 'th' },
        { index: 6, letterArab: 'ث', letterEng: 'th' },
        { index: 7, letterArab: 'ث', letterEng: 'th' },
        { index: 8, letterArab: 'ث', letterEng: 'th' },
        { index: 9, letterArab: 'ث', letterEng: 'th' },
        { index: 10, letterArab: 'ث', letterEng: 'th' },
        { index: 11, letterArab: 'ث', letterEng: 'th' },
    ]
    const numColumns = 4;

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.header}>
                        <View style={styles.headerContent}>
                            <Image source={require('../../assets/clock-icon.png')} />
                            <Text style={styles.time}>
                                Trail time: 30:00
                            </Text>
                        </View>
                        <Text style={styles.title}>Learning</Text>
                    </View>
                    <View style={styles.items}>
                        <Text style={styles.itemTitle}>Let's Learn the Arabic Letters!</Text>
                        <Text style={styles.itemSubTitle}>Master the Arabic Alphabet</Text>
                        <CustomButton disabled={true} title='Learn the Script' locked={true} />
                        <FlatList
                            data={items}
                            keyExtractor={(item) => item.index.toString()}
                            renderItem={({ item }) => (
                                <LearningTile key={item.index} arab={item.letterArab} eng={item.letterEng} />
                            )}
                            numColumns={numColumns}
                            columnWrapperStyle={styles.row}
                            contentContainerStyle={styles.itemList}
                        />
                    </View>
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
    row: {
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    content: {
        flex: 1,
        marginVertical: 12,
    },
    items: {
        padding: 16,
    },
    itemList: {
        marginTop: 24,
    },
    scrollView: {
        flex: 1,
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
    itemTitle: {
        fontSize: 20,
        lineHeight: 28,
        fontWeight: 900,
        color: colors.gray800,
        textAlign: 'center',
    },
    itemSubTitle: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 500,
        color: colors.gray600,
        textAlign: 'center',
        paddingTop: 4,
        marginBottom: 16,
    }
});

export default LearningScreen;