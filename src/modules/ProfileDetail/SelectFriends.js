//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, Dimensions, FlatList } from 'react-native';
import { COLORS } from '../../theme/colors';
import globalStyles from '../../theme/globalStyles';
import { Icons } from '../../assets';
import { friendsList } from '../../assets/data/friendsList';
import FriendListCard from '../../components/cards/FriendListCard';
import IconButton from '../../components/buttons/IconButton';
import Heading2 from '../../components/texts/Heading2';
import SimpleButton from '../../components/buttons/SimpleButton';

const { height, width } = Dimensions.get('window');
// create a component
const SelectFriends = ({ image, onClose }) => {
    const [showFriendsList, setShowFriendsList] = useState(false);

    const [newFriends, setNewFriends] = useState([]);

    return (
        <View style={styles.container}>
            <View style={globalStyles.headerContainer}>
                {newFriends?.length > 0 ? (
                    <>
                        <IconButton onPress={onClose} icon={'Close'} />
                        <Heading2>Add People</Heading2>
                        <SimpleButton onPress={onClose} label={'Done'} style={{flex: 0, paddingHorizontal: 20}} />
                    </>
                ) : (
                    <View style={styles.searchBarContainer}>
                        <Icons.Search width={24} height={24} stroke={'#000'} />
                        <TextInput onFocus={() => setShowFriendsList(true)} placeholder="Search firends" style={styles.searchInput} />
                    </View>
                )}
            </View>

            {showFriendsList && (
                <View style={{ height, width: '100%' }}>
                    <FlatList
                        data={friendsList}
                        renderItem={({ item }) => (
                            <FriendListCard
                                onPress={() => {
                                    setNewFriends([...newFriends, item]);
                                    setShowFriendsList(false);
                                }}
                                showCloseButton={false}
                                avatar={item?.avatar}
                                name={item?.name}
                                username={item?.username}
                            />
                        )}
                    />
                </View>
            )}

            <ScrollView contentContainerStyle={{ padding: 15 }}>
                <Image source={image} style={{ width: '100%', aspectRatio: 1, borderRadius: 10, backgroundColor: COLORS.gray.medium }} />

                <FlatList
                    data={newFriends}
                    renderItem={({ item }) => (
                        <FriendListCard
                            onCloseBtnPress={() => setNewFriends(newFriends?.filter(i => i?.username != item?.username))}
                            avatar={item?.avatar}
                            name={item?.name}
                            username={item?.username}
                        />
                    )}
                />
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    searchBarContainer: {
        backgroundColor: COLORS.white,
        flex: 1,
        overflow: 'hidden',
        borderRadius: 30,
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

//make this component available to the app
export default SelectFriends;
