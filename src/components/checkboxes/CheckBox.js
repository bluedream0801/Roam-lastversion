//import liraries
import React, { Component, memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icons } from '../../assets';
import Typography from '../texts/Typography';
import { COLORS } from '../../theme/colors';

// create a component
const CheckBox = ({ checked, onPress, disabled = false, label = '' }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            disabled={disabled}
            style={{ opacity: disabled ? 0.5 : 1, flexDirection: 'row', alignItems: 'center' }}
            onPress={onPress}>
            {checked ? <Icons.CBChecked width={24} height={24} /> : <Icons.CBUnChecked width={24} height={24} />}

            {label && (
                <Typography weight={'regular'} color={COLORS.black} size={16} style={{ marginLeft: 10 }}>
                    {label}
                </Typography>
            )}
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
export default memo(CheckBox);
