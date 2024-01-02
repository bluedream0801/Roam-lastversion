import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { friendsList } from '../../assets/data/friendsList';
import FriendListCard from '../../components/cards/FriendListCard';
import { COLORS } from '../../theme/colors';

const Requests = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={friendsList}
                renderItem={({ item }) => <FriendListCard showAcceptBtn={true} avatar={item?.avatar} name={item?.name} username={item?.username} />}
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

export default Requests;
