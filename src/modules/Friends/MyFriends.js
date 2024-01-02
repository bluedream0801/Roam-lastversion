import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FriendListCard from '../../components/cards/FriendListCard';
import { friendsList } from '../../assets/data/friendsList';
import { COLORS } from '../../theme/colors';

const MyFriends = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={friendsList}
                renderItem={({ item }) => <FriendListCard avatar={item?.avatar} name={item?.name} username={item?.username} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
});

export default MyFriends;
