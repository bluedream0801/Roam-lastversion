import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

const Heading1 = ({ children, size = 22, style }) => {
    const styles = StyleSheet.create({
        heading: {
            fontSize: size,
            fontFamily: 'ganos-Medium',
            lineHeight: 28,
            color: COLORS.black,
            ...style,
        },
    });

    return <Text style={styles.heading}>{children}</Text>;
};

export default Heading1;
