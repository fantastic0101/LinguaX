import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

const TileItem = ({ selected, title, subText, type, bgColor, onPress, values, dropDownShow, onItemSelect }) => {
    const [value, setValue] = useState('');

    const changeValue = (val) => {
        setValue(val);
        onItemSelect();
    }

    const styles = StyleSheet.create({
        root: {
            backgroundColor: selected ? bgColor : colors.borderColor,
            width: '100%',
            paddingBottom: 4,
            borderRadius: 12,
            borderWidth: selected ? 1.5 : 0,
            borderColor: selected ? bgColor : 'transparent', // Use 'transparent' instead of 'none'
            position: 'relative', // Ensure the root container is positioned relatively
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: !selected ? bgColor : colors.whiteColor,
            width: '100%',
            paddingVertical: 12,
            borderRadius: 12,
            position: 'relative', // Ensure position is explicitly set
        },
        containerNormal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: !selected ? bgColor : colors.whiteColor,
            width: '100%',
            paddingVertical: 12,
            borderRadius: 12,
            position: 'relative', // Add a position for consistency
        },
        textContent: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: !selected ? bgColor : colors.whiteColor,
        },
        title: {
            fontFamily: 'Lato',
            fontSize: 16,
            lineHeight: 24,
            color: selected ? bgColor : colors.whiteColor,
            fontWeight: '700',
            marginBottom: 4,
        },
        subText: {
            fontFamily: 'Lato',
            fontSize: 14,
            lineHeight: 20,
            color: selected ? bgColor : colors.whiteColor,
        },
        imageDiv: {
            marginLeft: 12,
        },
        dropDown: {
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 999,
            backgroundColor: colors.whiteColor,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 5,
        },
        dropDownItem: {
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderBottomWidth: 1,
            borderBottomColor: colors.borderColor,
            color: colors.gray800,
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'Lato',
            fontWeight: 500,
        },
        selectedValue: {
            position: 'absolute',
            top: '105%',
            left: '50%',
            width: 'auto',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            color: colors.whiteColor,
            backgroundColor: bgColor,
            transform: [
                { translateX: '-40%' },
                { translateY: '-50%' },
            ],
            paddingVertical: 3,
            paddingHorizontal: 8,
            borderRadius: 100,
        },
    });

    return (
        <TouchableOpacity onPress={onPress} style={[{ width: '100%' }]}>
            {
                type === "normal" ? (
                    <View style={styles.root}>
                        <View style={styles.containerNormal}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.subText}>{subText}</Text>
                        </View>
                    </View>
                ) : (
                    <View style={styles.root}>
                        <View style={styles.container}>
                            <View style={styles.textContent}>
                                <Text style={styles.title}>{title}</Text>
                                <Text style={styles.subText}>{subText}</Text>
                            </View>
                            <View style={styles.imageDiv}>
                                <Icon name="arrow-circle-down" size={16} color={selected ? bgColor : "white"} />
                            </View>
                        </View>
                        {value && selected && <View style={styles.selectedValue}>
                            <Text style={styles.selectedValue}>{value}</Text>
                        </View>}
                        {dropDownShow && <View style={styles.dropDown}>
                            {values.map((item, index) => {
                                return <TouchableOpacity key={index} onPress={() => changeValue(item)}>
                                    <View style={styles.dropDownItem}>
                                        <Text>{item}</Text>
                                    </View>
                                </TouchableOpacity>
                            })}
                        </View>}
                    </View>
                )
            }
        </TouchableOpacity>
    );
};

export default TileItem;