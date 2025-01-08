import React from 'react';
import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native';
import CustomProgressBar from './CustomProgressBar';
import colors from '../constants/colors';

const GoalComponent = ({ tCount, fCount, bgColor, borderColor }) => {
    const styles = StyleSheet.create({
        root: {
            width: '100%',
            paddingBottom: 6,
            backgroundColor: borderColor,
            borderRadius: 12,
        },
        container: {
            backgroundColor: bgColor,
            borderRadius: 12,
            // padding: 8,
            width: '100%',
        },
        header: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 12,
            alignItems: 'center',
            paddingBottom: 6,
        },
        headerMain: {
            fontSize: 16,
            lineHeight: 24,
            fontWeight: 800,
            color: colors.whiteColor,
        },
        headerStatus: {
            color: colors.whiteColor,
            fontSize: 14,
            lineHeight: 20,
        },
        content: {
            backgroundColor: colors.whiteColor,
            padding: 12,
            borderRadius: 12,
        },
        row: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 12,
        },
        rowMain: {
            fontSize: 16,
            lineHeight: 24,
            fontWeight: 800,
            color: colors.gray800,
        },
        rowDetail: {
            fontSize: 14,
            lineHeight: 16,
            fontWeight: 500,
            alignItems: 'center',
            justifyContent: 'center',
        },
        arrowIcon: {
            height: 10,
        },
        imageContainer: {
            padding: 8,
        }
    });

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/mask.png')} resizeMode='cover' style={styles.imageContainer}>
                    <View style={styles.header}>
                        <Text style={styles.headerMain}>Next Goal</Text>
                        <Text style={styles.headerStatus}>{fCount}/{tCount} Completed</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.row}>
                            <Text style={styles.rowMain}>Complete {tCount} lessons today</Text>
                            <Text style={styles.rowDetail}>Details <Image source={require('../assets/arrow-right.png')} style={styles.arrowIcon} /> </Text>
                        </View>
                        <CustomProgressBar percent={`${fCount * 100 / tCount}%`} description={`${fCount + '/' + tCount}`} icon={<Image source={require('../assets/tropy.png')} />}/>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
};

export default GoalComponent;