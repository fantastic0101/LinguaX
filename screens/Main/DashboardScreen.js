import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import GoalComponent from '../../components/GoalComponent';
import TextBadge from '../../components/TextBadge';
import ProcessItem from '../../components/ProcessItem';
import colors from '../../constants/colors';
import BottomNavigation from '../../components/BottomNavigation';

const DashboardScreen = ({ navigation }) => {
    const processItems = [
        { title: 'Learning', subTitle: '44 minutes', icon: <Image source={require('../../assets/clock.png')} />, iconColor: colors.blue100 },
        { title: 'Learning', subTitle: '44 minutes', icon: <Image source={require('../../assets/clock.png')} />, iconColor: colors.blue100 },
        { title: 'Learning', subTitle: '44 minutes', icon: <Image source={require('../../assets/clock.png')} />, iconColor: colors.blue100 },
        { title: 'Learning', subTitle: '44 minutes', icon: <Image source={require('../../assets/clock.png')} />, iconColor: colors.blue100 },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.header}>
                        <Image source={require('../../assets/d-logo.png')} />
                        <View style={styles.headerRight}>
                            <View style={styles.fires}>
                                <Image source={require('../../assets/fire.png')} />
                                <Text style={styles.fireCount}>12</Text>
                            </View>
                            <Image source={require('../../assets/setting-2.png')} />
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.greetings}>
                            <Text style={styles.gName}>Hi, Evelyn</Text>
                            <Text style={styles.gTitle}>Welcome back</Text>
                        </View>
                        <View style={styles.cards}>
                            <CustomButton title="30 days on streak" icon={<Image source={require('../../assets/star-06.png')} style={styles.starIcon} />} textColor={colors.whiteColor} bgColor={colors.lightGreenColor} borderColor={colors.darkGreenColor} justify='start' marginBottom={12} leftIcon={<Image source={require('../../assets/button.png')} />} bgImage={<Image source={require('../../assets/Isolation_Mode.png')} style={styles.cardImage} />} />
                        </View>
                        <GoalComponent tCount={3} fCount={2} bgColor={colors.primaryColor} borderColor={colors.primaryDarkColor} />
                        <View style={styles.row}>
                            <View style={styles.leftColumn}>
                                <View style={styles.columnContent}>
                                    <View style={styles.flexRow}>
                                        <TextBadge text='Tips' bgColor={colors.blue100} />
                                        <Image source={require('../../assets/light.png')} />
                                    </View>
                                    <Text style={styles.columnLeftTitle}>Arab culture</Text>
                                    <Text style={styles.columnLeftDescription}>In Arab culture, tea symbolizes hospitality. It is often served with light snacks to welcome guests.</Text>
                                </View>
                            </View>
                            <View style={styles.rightColumn}>
                                <View style={styles.columnContent}>
                                    <View style={styles.flexRow}>
                                        <TextBadge text='Quiz' bgColor={colors.purple100} />
                                        <Image source={require('../../assets/puzzle.png')} />
                                    </View>
                                    <Text style={styles.columnRightTitle}>كتاب</Text>
                                    <Text style={styles.columnRightSubText}>Guess the meaning!</Text>
                                    <CustomButton title="Reveal meaning" textColor={colors.whiteColor} bgColor={colors.primaryColor} borderColor={colors.primaryDarkColor} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.process}>
                            <Text style={styles.processTitle}>Today progress</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.processItems}>
                                {processItems.map((item, index) => {
                                    return <ProcessItem key={index} title={item.title} subTitle={item.subTitle} icon={item.icon} iconColor={item.iconColor} />
                                })}
                            </ScrollView>
                        </View>
                        <View style={styles.quote}>
                            <View style={styles.quotCircle1}></View>
                            <View style={styles.quotCircle2}></View>
                            <View style={styles.flexRow}>
                                <View style={styles.flexRow}>
                                    <Image source={require('../../assets/quote.png')} />
                                    <Text style={styles.quoteTitle}>Quote for the day</Text>
                                </View>
                                <Image source={require('../../assets/share-06.png')} />
                            </View>
                            <Text style={styles.quoteMain}>وَمَا نَيْلُ الْمَطَالِبِ بِالتَّمَنِّي وَلَكِنْ تُؤْخَذُ الدُّنْيَا غَلَبَا</Text>
                            <Text style={styles.quoteSub}>"Success is not achieved by mere wishes, but the world is taken by determination and effort."{'\n'}- Al Mutanabbi</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <BottomNavigation/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
        paddingTop: 16,
    },
    main: {
        // marginTop: 24,
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 10,
        paddingHorizontal: 16,
        borderBottomColor: colors.borderColor,
        borderBottomWidth: 1,
    },
    fires: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.orange4Color,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 100,
        marginRight: 8,
    },
    fireCount: {
        fontFamily: 'Lato',
        fontSize: 16,
        lineHeight: 24,
        color: colors.primaryColor,
        marginLeft: 4,
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    greetings: {

    },
    gTitle: {
        fontSize: 20,
        lineHeight: 28,
        fontWeight: 700,
    },
    gName: {
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 20,
    },
    cards: {
        paddingVertical: 20,
    },
    starIcon: {
        marginRight: 8,
    },
    cardImage: {
        position: 'absolute',
        right: 0,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 20,
        overflow: 'visible',
    },
    leftColumn: {
        flex: 1,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
        borderWidth: 1,
        borderBottomWidth: 6,
        borderColor: colors.borderColor,
        borderRadius: 12,
        alignSelf: 'stretch',
        backgroundColor: colors.whiteColor,
        padding: 12,
    },
    rightColumn: {
        flex: 1,
        marginLeft: 8,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
        borderWidth: 1,
        borderBottomWidth: 6,
        borderColor: colors.borderColor,
        borderRadius: 12,
        alignSelf: 'stretch',
        backgroundColor: colors.whiteColor,
        padding: 12,
    },
    columnLeftTitle: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 700,
        paddingVertical: 8,
        borderBottomColor: colors.borderColor,
        borderBottomWidth: 2,
        borderStyle: 'dashed',
    },
    columnLeftDescription: {
        fontSize: 14,
        lineHeight: 20,
        color: colors.gray500,
        marginTop: 8,
    },
    columnRightTitle: {
        fontSize: 24,
        lineHeight: 36,
        fontWeight: 800,
        paddingVertical: 8,
        borderBottomColor: colors.borderColor,
        borderBottomWidth: 2,
        borderStyle: 'dashed',
    },
    columnRightSubText: {
        fontSize: 14,
        lineHeight: 20,
        color: colors.gray500,
        marginVertical: 8,
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    process: {
        marginBottom: 20,
    },
    processTitle: {
        fontSize: 20,
        lineHeight: 28,
        fontWeight: 900,
        marginBottom: 12,
    },
    processItems: {
        flexDirection: 'row',
    },
    quote: {
        padding: 16,
        borderWidth: 1,
        borderBottomWidth: 6,
        borderColor: colors.borderColor,
        backgroundColor: colors.whiteColor,
        borderRadius: 12,
        overflow: 'hidden',
    },
    quoteTitle: {
        fontSize: 14,
        lineHeight: 20,
        color: colors.primaryColor,
        fontWeight: 700,
        paddingLeft: 8,
    },
    quoteMain: {
        paddingTop: 16,
        paddingBottom: 8,
        fontSize: 18,
        lineHeight: 24,
        fontWeight: 900,
        color: colors.gray800,
        borderBottomWidth: 2,
        borderStyle: 'dashed',
        borderBottomColor: colors.borderColor,
    },
    quoteSub: {
        marginTop: 8,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 400,
        fontStyle: 'italic',
        color: colors.gray700,
    },
    quotCircle1: {
        width: 110,
        height: 110,
        borderRadius: 200,
        backgroundColor: colors.orange4Color,
        position: 'absolute',
        left: -50,
        top: -60,
    },
    quotCircle2: {
        width: 107,
        height: 110,
        borderRadius: 200,
        backgroundColor: colors.orange4Color,
        position: 'absolute',
        left: '100%',
        top: '100%',
        transform:[
            { translateX: -45 },
            { translateY: -15 },
        ]
    },
});

export default DashboardScreen;