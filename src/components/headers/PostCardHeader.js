//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import Title1 from '../texts/Title1';
import Typography from '../texts/Typography';
import IconButton from '../buttons/IconButton';

// create a component
const PostCardHeader = ({ avatar, postedBy, postedTime }) => {
    return (
        <View style={styles.userInfoBox}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: avatar }} style={styles.avatar} />

                <View style={{ marginLeft: 12 }}>
                    <Title1>{postedBy}</Title1>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Typography weight={'medium'} size={12} style={{ marginRight: 8 }}>
                    {postedTime}
                </Typography>

                <IconButton icon={'DotsHorizontal'} backgroundColor={COLORS.peachYellow} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    userInfoBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 30,
        backgroundColor: COLORS.gray.dark,
    }
});

//make this component available to the app
export default PostCardHeader;
