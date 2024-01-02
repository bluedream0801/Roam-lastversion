import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

const Title1 = ({ children, size = 16 }) => {
    return <Text style={[styles.title, { fontSize: size }]}>{children}</Text>;
};

const styles = StyleSheet.create({
    title: { fontSize: 16, fontFamily: 'ClashDisplay-Semibold', lineHeight: 24, color: COLORS.black },
});

export default Title1;
