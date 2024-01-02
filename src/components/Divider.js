//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

// create a component
const Divider = ({ stroke = 1, color = COLORS.gray.medium, style }) => {
    return <View style={{ width: '100%', height: stroke, backgroundColor: color, ...style }} />;
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Divider;
