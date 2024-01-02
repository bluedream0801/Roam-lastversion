//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import Typography from '../texts/Typography';
import Title1 from '../texts/Title1';
import IconChip from '../chip/IconChip';
import PostCardHeader from '../headers/PostCardHeader';
import { COLORS } from '../../theme/colors';
import IconButton from '../buttons/IconButton';
import MutualFriendCard from './MutualFriendCard';
import { mutualFriend } from '../../assets/data/homeFeed';

// create a component
const PostCard2 = ({ avatar, postedBy, postImage, postedTime, title, description, distance }) => {
    return (
        <View style={styles.container}>
            <PostCardHeader avatar={avatar} postedBy={postedBy} postedTime={postedTime} />

            <ImageBackground source={{ uri: postImage }} style={styles.postImage}>
                <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                    <IconButton icon={'Share'} backgroundColor={COLORS.peachYellow} style={{ marginBottom: 10, alignSelf: 'center' }} />

                    <MutualFriendCard
                        list={mutualFriend}
                        listItemStyle={{
                            backgroundColor: 'gray',
                            width: 40,
                            height: 40,
                            borderRadius: 30,
                        }}
                    />
                </View>
            </ImageBackground>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 1, flexWrap: 'nowrap', gap: 8 }}>
                    <Title1>{title}</Title1>
                    <Typography weight={'medium'}>{description}</Typography>
                </View>

                <IconButton icon="Heart" backgroundColor={COLORS.tyrianPurple} color={COLORS.white} />
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 10 }}>
                <IconChip style={{ backgroundColor: COLORS.papayaWhip }} color={COLORS.black} icon={'MarkerPin'} label={'4 mi'} />
                <IconChip style={{ backgroundColor: COLORS.papayaWhip }} color={COLORS.black} icon={'MarkerPin'} label={'Sept 15'} />
                <IconChip
                    style={{ backgroundColor: COLORS.papayaWhip }}
                    color={COLORS.black}
                    icon={'Calendar'}
                    label={'8:00 pm - 11:00 pm'}
                />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    postImage: {
        width: '100%',
        aspectRatio: 0.9,
        borderRadius: 35,
        overflow: 'hidden',
        marginVertical: 10,
        backgroundColor: COLORS?.gray?.medium,
    },
});

//make this component available to the app
export default PostCard2;
