//import liraries
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProfileHeader from '../../../components/headers/ProfileHeader';
import FeedInfoCard from '../../../components/cards/FeedInfoCard';

// create a component
const InfoCardRight = ({ feed }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled contentContainerStyle={styles.container}>
            <ProfileHeader avatar={feed?.avatar} name={feed?.name} age={feed?.age} />

            {feed?.places?.map(item => (
                <FeedInfoCard key={item?.image} image={item?.image} title={item?.title} answer={item?.answer} />
            ))}
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
});

//make this component available to the app
export default InfoCardRight;
