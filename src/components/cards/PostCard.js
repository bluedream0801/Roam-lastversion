//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Title1 from '../texts/Title1';
import { COLORS } from '../../theme/colors';
import Typography from '../texts/Typography';
import IconChip from '../chip/IconChip';
import PostCardHeader from '../headers/PostCardHeader';

// create a component
const PostCard = ({ avatar, postedBy, postImage, postedTime, title, description, distance }) => {
    return (
        <View style={styles.container}>
            <PostCardHeader avatar={avatar} postedBy={postedBy} postedTime={postedTime} />

            <Image source={{ uri: postImage }} style={styles.postImage} />

            <View style={{ paddingVertical: 8, flexWrap: 'nowrap', gap: 8, padding: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Title1>{title}</Title1>

                    <IconChip icon={'MarkerPin'} label={distance} />
                </View>

                <Typography weight={'medium'}>{description}</Typography>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    postImage: {
        width: '100%',
        aspectRatio: 1.25,
        borderRadius: 24,
        marginVertical: 10,
        backgroundColor: COLORS?.gray?.medium,
    },
});

//make this component available to the app
export default PostCard;
