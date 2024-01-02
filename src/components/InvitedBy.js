//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';
import Typography from './texts/Typography';

// create a component
const InvitedBy = ({ avatar, name, days }) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Typography weight={'medium'} color={COLORS.darkGreen}>
                    Invited by
                </Typography>

                <Image source={{ uri: avatar }} style={styles.avatar} />

                <Typography weight={'medium'} color={COLORS.darkGreen}>
                    {name}
                </Typography>
            </View>

            <Typography weight={'medium'}>{days}</Typography>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 16,
        alignItems: 'center',
    },
    box: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        gap: 8,
        alignItems: 'center',
    },
    avatar: {
        width: 24,
        aspectRatio: 1,
        borderRadius: 15,
        backgroundColor: COLORS.gray.medium,
    },
});

//make this component available to the app
export default InvitedBy;
