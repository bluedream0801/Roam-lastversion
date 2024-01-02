//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { COLORS } from '../../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import MutualFriendCard from '../../../components/cards/MutualFriendCard';
import IconButton from '../../../components/buttons/IconButton';
import { mutualFriend } from '../../../assets/data/homeFeed';
import { useNavigation } from '@react-navigation/native';

// create a component
const MainCard = ({ feed, onShareClick }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => navigation?.navigate('ProfileDetail', { userId: feed?.userId })}>
                <ImageBackground source={{ uri: feed?.avatar }} style={styles.avatar}>
                    <LinearGradient colors={['#000000D3', '#ffffff00']} style={{ height: 100, with: '100%' }}>
                        <Text style={styles?.name}>
                            {feed?.name}, {feed?.age}
                        </Text>
                    </LinearGradient>

                    <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                        <IconButton
                            onPress={onShareClick}
                            icon={'Share'}
                            backgroundColor={COLORS.peachYellow}
                            style={{ marginBottom: 10, alignSelf: 'center' }}
                        />

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
            </TouchableWithoutFeedback>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    avatar: {
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.gray.dark,
        borderRadius: 35,
        overflow: 'hidden',
    },
    name: {
        fontFamily: 'ClashDisplay-Semibold',
        fontSize: 22,
        lineHeight: 28,
        color: COLORS.white,
        padding: 24,
    },
});

//make this component available to the app
export default MainCard;
