//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Title1 from '../texts/Title1';
import Typography from '../texts/Typography';
import IconButton from '../buttons/IconButton';
import { COLORS } from '../../theme/colors';

// create a component
const ProfileHeader = ({ avatar, name, age, onAvatarPress, onHeartPress }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={onAvatarPress}>
                    <Image source={{ uri: avatar }} style={styles.avatar} />
                </TouchableOpacity>

                <View style={{ marginLeft: 12 }}>
                    <Title1>{name}</Title1>
                    <Typography weight={'regular'} size={12}>
                        {age} years old
                    </Typography>
                </View>
            </View>

            <IconButton icon="Heart" backgroundColor={COLORS?.peachYellow} onPress={onHeartPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avatar: {
        width: 62,
        height: 62,
        borderRadius: 35,
    },
});

export default ProfileHeader;
