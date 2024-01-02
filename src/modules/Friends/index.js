import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../../theme/colors';
import TopTabBar from './TopTabBar';
import IconButton from '../../components/buttons/IconButton';
import Suggestions from './Suggestions';
import MyFriends from './MyFriends';
import Requests from './Requests';
import { useNavigation } from '@react-navigation/native';
import { Icons } from '../../assets';

const Friends = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('suggestions');

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <IconButton icon="ArrowLeft" onPress={() => navigation?.goBack()} />

                <View style={styles.searchBarContainer}>
                    <Icons.Search width={24} height={24} stroke={'#000'} />
                    <TextInput placeholder="Search friends" style={styles.searchInput} />
                </View>

                <IconButton icon="Message" />
            </View>

            <TopTabBar active={activeTab} onPress={val => setActiveTab(val)} />

            {activeTab == 'suggestions' ? <Suggestions /> : activeTab == 'myFriends' ? <MyFriends /> : <Requests />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    headerContainer: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchBarContainer: {
        backgroundColor: COLORS.white,
        flex: 1,
        overflow: 'hidden',
        borderRadius: 30,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#d5d5d5',
        height: 45,
    },
    searchInput: {
        color: COLORS.gray.dark,
        flex: 1,
        fontFamily: 'ClashDisplay-Medium',
        paddingVertical: 10,
        marginLeft: 7,
    },
});

export default Friends;
