//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../../theme/colors';
import SimpleInput from '../../../../components/inputs/SimpleInput';
import Heading2 from '../../../../components/texts/Heading2';
import IconButton from '../../../../components/buttons/IconButton';
import SimpleButton from '../../../../components/buttons/SimpleButton';
import { useNavigation } from '@react-navigation/native';
import Typography from '../../../../components/texts/Typography';

// create a component
const Gender = () => {
    const navigation = useNavigation();

    const [gender, setGender] = useState('male');

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Heading2>What's your gender?</Heading2>

                <View style={{ height: 20 }} />

                <CustomRadioBtn label={'Male'} onPress={() => setGender('male')} active={gender == 'male'} />

                <CustomRadioBtn label={'Female'} onPress={() => setGender('female')} active={gender == 'female'} />

                <CustomRadioBtn label={'Other'} onPress={() => setGender('other')} active={gender == 'other'} />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <IconButton onPress={() => navigation.goBack()} icon={'ArrowLeft'} label={'Back'} style={{ height: 48 }} />

                <SimpleButton onPress={() => navigation.navigate('ZipCode')} label={`Next`} style={{ height: 48, marginLeft: 15 }} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 15,
    },
});

//make this component available to the app
export default Gender;

const CustomRadioBtn = ({ label, active, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.5}
            style={{ backgroundColor: active ? COLORS.peachYellow : COLORS.gray.light, marginTop: 7, padding: 15, borderRadius: 10 }}>
            <Typography weight={'medium'} color={COLORS.black}>
                {label}
            </Typography>
        </TouchableOpacity>
    );
};
