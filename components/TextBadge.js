import { Text, View, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const TextBadge = ({ bgColor, textColor, text }) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: bgColor,
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 8,
        },
        text: {
            color: textColor ? textColor : colors.whiteColor,
            fontSize: 12,
            lineHeight: 16,
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default TextBadge;