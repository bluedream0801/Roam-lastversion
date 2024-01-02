//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

// create a component
const Typography = ({ children, weight, color = COLORS.gray.dark, size = 14, style, ...others }) => {
    let fontWeight = {
        light: 'ClashDisplay-Light',
        regular: 'ClashDisplay-Regular',
        medium: 'ClashDisplay-Medium',
        semiBold: 'ClashDisplay-Semibold',
        bold: 'ClashDisplay-Bold',
    };

    const styles = StyleSheet.create({
        text: {
            fontSize: 12,
            fontFamily: 'ClashDisplay-Semibold',
            lineHeight: 16,
            fontFamily: fontWeight[weight],
            color,
            fontSize: size,
            ...style,
        },
    });

    return <Text style={styles.text} {...others}>{children}</Text>;
};

export default Typography;
