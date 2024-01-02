//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { COLORS } from '../../theme/colors';
import { Icons } from '../../assets';
import { countryCode } from '../../assets/data/countryCode';
import Typography from '../texts/Typography';

// create a component
const PhoneInput = ({style}) => {
    return (
        <View style={{ flexDirection: 'row', ...style }}>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    borderRadius: 30,
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#d5d5d5',
                    height: 48,
                }}>
                <Image source={countryCode[0].flag} style={{ height: 20, width: 30, borderRadius: 5 }} />
                <Icons.ChevronDown width={24} height={24} stroke={COLORS.black} />
            </TouchableOpacity>

            <View
                style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    borderRadius: 30,
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#d5d5d5',
                    height: 48,
                    flex: 1,
                    marginLeft: 7,
                }}>
                <Typography weight={'regular'} style={{ paddingRight: 15, borderRightWidth: 1, borderColor: '#d5d5d5' }}>
                    +1
                </Typography>

                <TextInput keyboardType='decimal-pad' style={{ fontFamily: 'ClashDispaly-Regular', color: COLORS.gray.dark, flex: 1, padding: 0, paddingHorizontal: 10 }} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default PhoneInput;
