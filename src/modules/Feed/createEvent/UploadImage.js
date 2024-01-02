//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../theme/colors';
import Heading2 from '../../../components/texts/Heading2';
import IconButton from '../../../components/buttons/IconButton';
import globalStyles from '../../../theme/globalStyles';
import { useNavigation } from '@react-navigation/native';
import Typography from '../../../components/texts/Typography';
import { Icons } from '../../../assets';
import SimpleButton from '../../../components/buttons/SimpleButton';

// create a component
const UploadImage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={globalStyles.headerContainer}>
                <Heading2>Upload image</Heading2>

                <IconButton icon={'Close'} onPress={() => navigation.goBack()} />
            </View>

            <View style={styles.innerContainer}>
                <Heading2>Show off a pick whose going</Heading2>

                <View style={styles.uploadBox}>
                    <Icons.Share height={42} width={42} stroke={COLORS.black} style={{ marginBottom: 7 }} />
                    <Typography weight={'medium'} size={16} color={COLORS.black}>
                        Select File to Upload
                    </Typography>
                </View>

                <SimpleButton disabled label={'Confirm'} style={{ flex: 0 }} />

                <TouchableOpacity onPress={() => navigation.navigate('EventFinal')}>
                    <Typography weight={'medium'} color={COLORS.black}>
                        Skip
                    </Typography>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    uploadBox: {
        width: '100%',
        height: 167,
        backgroundColor: COLORS.gray.light,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        flex: 1,
        flexWrap: 'nowrap',
        gap: 20,
    },
});

//make this component available to the app
export default UploadImage;
