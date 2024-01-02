//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../../theme/colors';

// create a component
const UnderLineInput = ({ placeholder }) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} placeholderTextColor={'#d5d5d5'} style={{fontSize: 20, fontFamily: 'ClashDisplay-Regular', padding: 0}}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBlockColor: COLORS.black
    },
});

//make this component available to the app
export default UnderLineInput;
