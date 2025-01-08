import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setIndex } from '../redux/navigationSlice';
import colors from '../constants/colors';

const BottomNavigation = ({ navigation }) => {
    const items = [
        { index: 0, title: 'Home', icon: <Image source={require('../assets/home.png')} />, activeIcon: <Image source={require('../assets/home-active.png')} />, navigate: 'Dashboard' },
        { index: 1, title: 'Explore', icon: <Image source={require('../assets/element-plus.png')} />, activeIcon: <Image source={require('../assets/element-plus-active.png')} />, navigate: 'Explore' },
        { index: 2, title: 'Learning', icon: <Image source={require('../assets/global.png')} />, activeIcon: <Image source={require('../assets/global-active.png')} />, navigate: 'Learning' },
        { index: 3, title: 'Leaderboard', icon: <Image source={require('../assets/graph.png')} />, activeIcon: <Image source={require('../assets/graph-active.png')} />, navigate: 'Leaderboard' },
        { index: 4, title: 'You', icon: <Image source={require('../assets/avatar.png')} />, activeIcon: <Image source={require('../assets/avatar.png')} />, navigate: 'Profile' },
    ];
    const dispatch = useDispatch();
    const index = useSelector((state) => state.navigation.index);

    const changePage = (val, url) => {
        dispatch(setIndex(val));
        navigation.navigate(url);
    }

    return (
        <View style={styles.container}>
            {items.map((item, i) => {
                return (
                    <TouchableOpacity key={i} onPress={() => changePage(i, item.navigate)}>
                        <View style={styles.item}>
                            {i === index ? <View style={styles.mark}></View> : <View style={styles.space}></View>}
                            {i === index ? item.activeIcon : item.icon}
                            <Text style={i === index ? styles.activeTitle : styles.title}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.gray50,
        paddingHorizontal: 16,
        paddingBottom: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
        borderTopWidth: 2,
        borderTopColor: colors.borderColor,
    },
    activeTitle: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: 500,
        color: colors.primaryColor,
        marginTop: 4,
    },
    title: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: 500,
        color: colors.gray500,
        marginTop: 4,
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    mark: {
        width: 8,
        height: 8,
        borderRadius: 12,
        backgroundColor: colors.primaryColor,
        top: -3,
    },
    space: {
        width: 8,
        height: 8,
        borderRadius: 12,
        backgroundColor: colors.gray50,
        top: -3,
    }
});

export default BottomNavigation;