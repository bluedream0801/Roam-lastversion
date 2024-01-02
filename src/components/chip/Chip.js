//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

// create a component
const Chip = ({ label, backgroundColor = '#fff5bb', color = COLORS.black, style }) => {
    return (
        <View style={[styles.container, { backgroundColor }, style]}>
            <Text style={{ fontSize: 14, color }}>{label}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
});

//make this component available to the app
export default Chip;
