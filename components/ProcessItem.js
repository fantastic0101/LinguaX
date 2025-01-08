import { Text, View, StyleSheet, Image } from 'react-native';
import colors from '../constants/colors';

const ProcessItem = ({ title, subTitle, icon, iconColor }) => {
    const styles = StyleSheet.create({
        container: {
            padding: 8,
            borderWidth: 1,
            borderBottomWidth: 6,
            borderColor: colors.borderColor,
            backgroundColor: colors.whiteColor,
            borderRadius: 12,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'flex-start',
            marginRight: 12,
        },
        imageIcon: {
            padding: 4,
            backgroundColor: iconColor,
            borderRadius: 8,
        },
        textDiv: {
            marginLeft: 8,
        },
        title: {
            fontSize: 12,
            lineHeight: 16,
            color: colors.gray500,
        },
        subtTitle: {
            fontSize: 14,
            lineHeight: 20,
            color: colors.gray800,
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.imageIcon}>
                {icon}
            </View>
            <View style={styles.textDiv}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtTitle}>{subTitle}</Text>
            </View>
        </View>
    );
};

export default ProcessItem;