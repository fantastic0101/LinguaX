import { Text, View, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const DashboardScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text>Home Screen</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
        padding: 16,
    },
    main: {
        marginTop: 24,
        flex: 1,
    },
});

export default DashboardScreen;