//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import { COLORS } from '../../../../theme/colors';
import Heading2 from '../../../../components/texts/Heading2';

import Typography from '../../../../components/texts/Typography';
import PhoneInput from '../../../../components/inputs/PhoneInput';
import SimpleButton from '../../../../components/buttons/SimpleButton';
import Divider from '../../../../components/Divider';
import IconButton from '../../../../components/buttons/IconButton';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
// create a component
const PhoneNumber = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Heading2>Enter your mobile number</Heading2>

                <PhoneInput style={{ marginTop: 15 }} />

                <SimpleButton
                    onPress={() => navigation.navigate('Verification')}
                    label={'Next'}
                    style={{ flex: 0, height: 48, marginTop: 7 }}
                />

                <Typography color={COLORS.black} size={12} weight={'regular'} style={{ marginTop: 15 }}>
                    By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from App and its
                    affiliates to the number provided.
                </Typography>

                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginVertical: 30 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#d5d5d5' }} />
                    <Typography weight={'medium'} color={COLORS.black} size={16} style={{ marginHorizontal: 10 }}>
                        or
                    </Typography>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#d5d5d5' }} />
                </View>

                <IconButton icon={'AppleI'} label={'Continue with Apple'} style={{ height: 48 }} />

                <IconButton icon={'GoogleI'} label={'Continue with Google'} style={{ height: 48, marginTop: 7 }} />
            </View>

            <IconButton
                onPress={() => navigation.goBack()}
                icon={'ArrowLeft'}
                label={'Back'}
                style={{ alignSelf: 'flex-start', height: 48 }}
            />
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
export default PhoneNumber;
