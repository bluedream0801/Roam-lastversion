import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import FriendListCard from '../../components/cards/FriendListCard';
import { friendsList } from '../../assets/data/friendsList';

const Suggestions = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={friendsList}
                renderItem={({ item }) => <FriendListCard showAddBtn={true} avatar={item?.avatar} name={item?.name} username={item?.username} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Suggestions;
