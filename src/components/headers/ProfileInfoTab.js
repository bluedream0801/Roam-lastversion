//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icons } from '../../assets';
import Typography from '../texts/Typography';
import { COLORS } from '../../theme/colors';

// create a component
const ProfileInfoTab = ({ active, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => onPress('photos')}
                style={[styles.btnCon, { borderBlockColor: active == 'photos' ? COLORS.black : COLORS.gray.dark }]}>
                <Icons.LayoutGrid width={24} height={24} stroke={active == 'photos' ? COLORS.black : COLORS.gray.dark} />
                <Typography weight={'medium'} color={active == 'photos' ? COLORS.black : COLORS.gray.dark}>
                    Photos
                </Typography>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onPress('prompt')}
                style={[styles.btnCon, { borderBlockColor: active == 'prompt' ? COLORS.black : COLORS.gray.dark }]}>
                <Icons.SparkleStar width={24} height={24} stroke={active == 'prompt' ? COLORS.black : COLORS.gray.dark} />
                <Typography weight={'medium'} color={active == 'prompt' ? COLORS.black : COLORS.gray.dark}>
                    Prompt
                </Typography>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onPress('plan')}
                style={[styles.btnCon, { borderBlockColor: active == 'plan' ? COLORS.black : COLORS.gray.dark }]}>
                <Icons.Calendar width={24} height={24} stroke={active == 'plan' ? COLORS.black : COLORS.gray.dark} />
                <Typography weight={'medium'} color={active == 'plan' ? COLORS.black : COLORS.gray.dark}>
                    Plan
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
export default ProfileInfoTab;
