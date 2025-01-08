import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';
import colors from '../../constants/colors';
import ExploreItem from '../../components/ExploreItem';

const ExploreScreen = ({ navigation }) => {
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
                        <Text style={styles.title}>Explore Modules</Text>
                    </View>
                    <View style={styles.items}>
                        <ExploreItem fCount={0} tCount={10} type='active' />
                        <ExploreItem fCount={3} tCount={10} type='active' />
                        <ExploreItem fCount={7} tCount={16} type='active' />
                        <ExploreItem fCount={16} tCount={16} type='active' />
                        <ExploreItem fCount={0} tCount={16} type='coming-soon' />
                        <ExploreItem fCount={0} tCount={10} type='coming-soon' />
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
    content: {
        flex: 1,
        marginVertical: 12,
    },
    items: {
        paddingHorizontal: 16,
        paddingVertical: 20,
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
    }
});

export default ExploreScreen;