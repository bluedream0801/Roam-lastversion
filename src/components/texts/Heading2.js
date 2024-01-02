import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

const Heading2 = ({ children, size = 24, color = COLORS.black, style }) => {
    const styles = StyleSheet.create({
        title: { fontFamily: 'ClashDisplay-Medium', lineHeight: 32, color, fontSize: size, ...style },
    });

    return <Text style={styles.title}>{children}</Text>;
};

export default Heading2;
