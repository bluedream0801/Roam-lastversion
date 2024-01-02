//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../../../theme/colors';
import Header1 from '../../../components/headers/Header1';
import Typography from '../../../components/texts/Typography';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../../../components/buttons/IconButton';
import { Icons } from '../../../assets';

// create a component
const MessageScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header1
                iconLeft={'ArrowLeft'}
                iconRight={'DotsHorizontal'}
                onIconLeftPress={() => navigation.goBack()}
                onIconRightPress={() => {}}>
                <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/236x/cb/f2/07/cbf20793af84e1579c2d1d83f91994a5.jpg' }}
                        style={{ height: 45, width: 45, backgroundColor: COLORS.gray.medium, borderRadius: 25 }}
                    />

                    <View style={{ marginLeft: 10 }}>
                        <Typography weight={'medium'} color={COLORS.black}>
                            Mike Fisher
                        </Typography>
                        <Typography weight={'medium'} size={12}>
                            Today 12:57 AM
                        </Typography>
                    </View>
                </View>
            </Header1>

            <View style={{ flex: 1 }}></View>

            <View style={styles.headerContainer}>
                <IconButton icon="Add" onPress={() => navigation?.goBack()} />

                <View style={styles.searchBarContainer}>
                    <TextInput placeholder="Write a message" style={styles.searchInput} />
                </View>

                <IconButton icon="Send" backgroundColor={COLORS.peachYellow}/>
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
    headerContainer: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.gray.light
    },
    searchBarContainer: {
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
    },
});

//make this component available to the app
export default MessageScreen;
