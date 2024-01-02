//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../../theme/colors';
import Typography from '../texts/Typography';

// create a component
const SimpleInput = ({ label, placeholder, style, ...others }) => {
    return (
        <View style={style}>
            <Typography color={COLORS.black} weight={'regular'} style={{ marginLeft: 20 }}>
                {label}
            </Typography>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={COLORS.gray.dark}
                {...others}
                style={{
                    fontFamily: 'ClashDisplay-Regular',
                    color: COLORS.black,
                    borderWidth: 1,
                    borderColor: '#d5d5d5',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 30,
                    marginTop: 5,
                }}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
});

//make this component available to the app
export default SimpleInput;
