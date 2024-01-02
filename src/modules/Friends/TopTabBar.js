//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Typography from '../../components/texts/Typography';
import { COLORS } from '../../theme/colors';

// create a component
const TopTabBar = ({ active, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => onPress('suggestions')}
                style={[styles.btnCon, { borderBlockColor: active == 'suggestions' ? COLORS.black : COLORS.gray.dark }]}>
                <Typography weight={'medium'} color={active == 'suggestions' ? COLORS.black : COLORS.gray.dark}>
                    Suggestions
                </Typography>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onPress('myFriends')}
                style={[styles.btnCon, { borderBlockColor: active == 'myFriends' ? COLORS.black : COLORS.gray.dark }]}>
                <Typography weight={'medium'} color={active == 'myFriends' ? COLORS.black : COLORS.gray.dark}>
                    My Friends
                </Typography>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onPress('requests')}
                style={[styles.btnCon, { borderBlockColor: active == 'requests' ? COLORS.black : COLORS.gray.dark }]}>
                <Typography weight={'medium'} color={active == 'requests' ? COLORS.black : COLORS.gray.dark}>
                    Requests
                </Typography>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        flexWrap: 'wrap',
        gap: 4,
    },
    btnCon: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        flexWrap: 'nowrap',
        gap: 8,
        borderBottomWidth: 1,
        borderBlockColor: COLORS.black,
    },
});

//make this component available to the app
export default TopTabBar;
