//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import Typography from '../texts/Typography';
import { Icons } from '../../assets';

// create a component
const IconChip = ({ icon, label, style, color = '#fff' }) => {
    let Icon = Icons[icon];

    return (
        <View style={[styles.container, style]}>
            <Icon height={16} width={16} stroke={color} style={{ marginRight: 5 }} />
            <Typography weight={'medium'} size={12} color={color}>
                {label}
            </Typography>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.red,
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 5,
        alignItems: 'center',
        borderRadius: 20,
    },
});

//make this component available to the app
export default IconChip;
