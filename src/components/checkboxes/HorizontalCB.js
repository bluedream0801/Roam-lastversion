//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icons } from '../../assets';
import Typography from '../texts/Typography';
import { COLORS } from '../../theme/colors';

// create a component
const HorizontalCB = ({ label, checked = false, onPress = () => {} }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingRight: 10 }}>
            <Typography size={16} color={COLORS.black} weight={'regular'}>
                {label}
            </Typography>
            {checked ? <Icons.CBChecked width={24} height={24} /> : <Icons.CBUnChecked width={24} height={24} />}
        </TouchableOpacity>
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
export default HorizontalCB;
