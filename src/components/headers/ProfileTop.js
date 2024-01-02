//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Typography from '../texts/Typography';
import Title1 from '../texts/Title1';
import { COLORS } from '../../theme/colors';

// create a component
const ProfileTop = ({avatar, age, name}) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.avatarBox}>
                    <Image source={{ uri: avatar }} style={styles.avatar} />
                </View>

                <View style={{ marginLeft: 12 }}>
                    <Typography weight={'regular'} size={12}>
                        username
                    </Typography>
                    <Title1>{name}</Title1>
                    <Typography weight={'regular'} size={12}>
                        {age} years old
                    </Typography>
                </View>
            </View>
            <View>
                <Title1>234</Title1>
                <Typography weight={'regular'} size={12}>
                    Friends
                </Typography>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatarBox: { borderWidth: 2, borderColor: COLORS.green, borderRadius: 30, padding: 2 },
    avatar: { width: 52, height: 52, borderRadius: 30, backgroundColor: COLORS.gray.dark },
});

//make this component available to the app
export default ProfileTop;
