//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors';

// create a component
const FillOther = () => {
    return (
        <View style={styles.container}>
            <Text>FillOther</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
});

//make this component available to the app
export default FillOther;
