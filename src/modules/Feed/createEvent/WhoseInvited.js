//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TextInput, Image } from 'react-native';
import { COLORS } from '../../../theme/colors';
import Heading2 from '../../../components/texts/Heading2';
import IconButton from '../../../components/buttons/IconButton';
import globalStyles from '../../../theme/globalStyles';
import { friendsList } from '../../../assets/data/friendsList';
import FriendListCard from '../../../components/cards/FriendListCard';
import { Icons } from '../../../assets';
import Typography from '../../../components/texts/Typography';
import SimpleButton from '../../../components/buttons/SimpleButton';
import { useNavigation } from '@react-navigation/native';

// create a component
const WhoseInvited = () => {
    const navigation = useNavigation();
    const [selectedData, setSelectedData] = useState([]);

    return (
        <View style={styles.container}>
            <View style={globalStyles.headerContainer}>
                <Heading2>Whose invited?</Heading2>

                <IconButton icon={'Close'} onPress={() => navigation.goBack()} />
            </View>

            <View style={{ padding: 15, paddingBottom: 0, flexDirection: 'row', alignItems: 'flex-end' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Typography weight={'regular'} size={10} color={COLORS.black}>
                        Selected
                    </Typography>
                    <IconButton icon={'Add'} style={{ height: 48, width: 48, borderRadius: 24 }} />
                </View>

                <FlatList
                    horizontal
                    data={selectedData}
                    contentContainerStyle={{ alignItems: 'flex-end', gap: 10, paddingHorizontal: 10 }}
                    renderItem={({ item }) => (
                        <Image
                            source={{ uri: item?.avatar }}
                            style={{ height: 48, width: 48, backgroundColor: COLORS.gray.medium, borderRadius: 24 }}
                        />
                    )}
                />

                {selectedData?.length > 0 && (
                    <SimpleButton onPress={() => navigation.navigate('UploadImage')} label={'Create Plan'} style={{ flex: 0 }} />
                )}
            </View>

            <View style={styles.searchBarContainer}>
                <Icons.Search width={24} height={24} stroke={'#000'} />
                <TextInput placeholder="Search friends" style={styles.searchInput} />
            </View>

            <View>
                <FlatList
                    data={friendsList}
                    renderItem={({ item }) => (
                        <FriendListCard
                            onAddBtnPress={() => setSelectedData([...selectedData, item])}
                            avatar={item?.avatar}
                            name={item?.name}
                            showAddBtn={true}
                            username={item?.username}
                        />
                    )}
                />
            </View>
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
        overflow: 'hidden',
        borderRadius: 30,
        margin: 15,
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
export default WhoseInvited;
