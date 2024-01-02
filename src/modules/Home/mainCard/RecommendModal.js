//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Typography from '../../../components/texts/Typography';
import { COLORS } from '../../../theme/colors';
import SimpleButton from '../../../components/buttons/SimpleButton';

// create a component
const RecommendModal = ({ onClose }) => {
    return (
        <View style={{ padding: 15, flexWrap: 'nowrap', gap: 15 }}>
            <Typography weight={'regular'} size={12} color={COLORS.black}>
                See a profile your friend would like? Send it your friend’s way!?
            </Typography>

            <SimpleButton label={'Send'} style={{ flex: 0 }} />

            <SimpleButton onPress={onClose} label={'Back'} style={{ flex: 0 }} color={COLORS.black} variant="outlined" />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default RecommendModal;
