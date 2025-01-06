import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../constants/colors';
import CustomButton from '../components/CustomButton';
import TileItem from '../components/TileItem';
import { useState } from 'react';

const WelcomeStep4 = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [dropDownIndex, setDropDownIndex] = useState(-1);

    const items = [
        {index: 0, title: "MSA", subText: "العربية الفصحى", bgColor: colors.lightPurpleColor, type: "normal" },
        {index: 1, title: "MSA", subText: "العربية الفصحى", bgColor: colors.lightBlueColor, type: "normal" },
        {index: 2, title: "MSA", subText: "العربية الفصحى", bgColor: colors.lightSkyColor, type: "normal" },
        {index: 3, title: "MSA", subText: "العربية الفصحى", bgColor: colors.lightGreen2Color, type: "normal" },
        {index: 4, title: "MSA", subText: "العربية الفصحى", bgColor: colors.lightGreenColor, type: "normal" },
        {index: 5, title: "MSA", subText: "العربية الفصحى", bgColor: colors.lightYellowColor, type: "normal" },
        {index: 6, title: "MSA", subText: "العربية الفصحى", bgColor: colors.lightOrangeColor, type: "normal" },
        {index: 7, title: "MSA", subText: "العربية الفصحى", bgColor: colors.lightRedColor, type: "dropdown", values: ['Palestinian', 'Syrian', 'Lebanese', 'Jordanian'] },
    ];

    const rows = [];
    for (let i = 0; i < items.length; i += 2) {
        rows.push(items.slice(i, i + 2));
    }

    const changeIndex = (val, type) => {
        console.log(val);
        if(type === "normal") {
            setSelectedIndex(val);
            setDropDownIndex(-1);
        }
        else {
            setDropDownIndex(val);
        }
    }

    const nextPage = () => {
        if (selectedIndex !== -1)
            navigation.navigate('Awesome');
    }

    return (
        <View style={styles.container}>
            <View style={styles.description}>
                <Text style={styles.title}>Choose Your Dialect</Text>
                <Text style={styles.subTitle}>Arabic dialects vary widely but share a common origin</Text>
                <View
                    style={styles.items}
                >
                    {rows.map((row, rowIndex) => (
                        <View style={styles.row} key={rowIndex}>
                            {row.map((item, colIndex) => (
                                <View style={styles.column} key={colIndex}>
                                    <TileItem
                                        title={item.title}
                                        subText={item.subText}
                                        bgColor={item.bgColor}
                                        selected={item.index === selectedIndex}
                                        type={item.type}
                                        onPress={() => changeIndex(item.index, item.type)}
                                        values={item.values}
                                        dropDownShow={item.index === dropDownIndex}
                                        onItemSelect={() => changeIndex(item.index, 'normal')}
                                    />
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </View>
            <View style={styles.buttonDiv}>
                <CustomButton title="Continue" onPress={nextPage} textColor={colors.whiteColor} bgColor={colors.primaryColor} borderColor={colors.primaryDarkColor} marginBottom={12} disabled={selectedIndex !== -1 ? false : true} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgColor,
        flex: 1,
        justifyContent: 'space-between',
    },
    description: {
        padding: 16,
    },
    title: {
        fontFamily: 'Lato',
        fontSize: 20,
        lineHeight: 28,
        color: colors.gray800,
        marginBottom: 8,
    },
    subTitle: {
        fontFamily: 'Lato',
        fontSize: 14,
        lineHeight: 20,
        color: colors.gray600,
    },
    icon: {
        marginRight: 12,
    },
    options: {
        marginTop: 40,
    },
    buttonDiv: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: colors.borderColor,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        overflow: 'visible',
    },
    column: {
        flex: 1,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
    },
    items: {
        marginTop: 40,
    },
});

export default WelcomeStep4;