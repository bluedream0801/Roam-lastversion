//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { COLORS } from '../../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import MutualFriendCard from '../../../components/cards/MutualFriendCard';
import IconButton from '../../../components/buttons/IconButton';
import { mutualFriend } from '../../../assets/data/homeFeed';
import { useNavigation } from '@react-navigation/native';
import { Icons } from '../../../assets';
import Typography from '../../../components/texts/Typography';

// create a component
const MainCard = ({ feed }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback>
                <ImageBackground source={{ uri: feed?.avatar }} style={styles.avatar}>
                    <LinearGradient colors={['#000000D3', '#00000080', '#ffffff00']} style={{ height: 100, with: '100%', padding: 24 }}>
                        <Text style={styles?.name}>
                            {feed?.name}, {feed?.age}
                        </Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Icons.Heart width={22} height={22} fill={COLORS.red} />
                            <Typography weight={'medium'} color={COLORS.white} style={{ marginLeft: 8 }}>
                                Likes You
                            </Typography>
                        </View>
                    </LinearGradient>

                    <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                        <IconButton icon={'Share'} backgroundColor={COLORS.peachYellow} style={{ marginBottom: 10, alignSelf: 'center' }} />

                        <MutualFriendCard
                            style={{ borderRadius: 0, marginBottom: 10 }}
                            list={mutualFriend}
                            title={'University'}
                            titleStyle={{ color: '#fff' }}
                            arrowStyle={{ color: '#fff' }}
                            listContainerStyle={{ backgroundColor: 'orange' }}
                            listItemStyle={{
                                backgroundColor: 'gray',
                                width: 40,
                                height: 40,
                                borderRadius: 30,
                            }}
                            listLabelStyle={{ fontSize: 15 }}
                        />
                    </View>

                    <Typography weight={'medium'} style={styles.textLikedDayAgo}>
                        25 Days
                    </Typography>
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
    },
    textLikedDayAgo: {
        color: COLORS.white,
        paddingHorizontal: 8,
        paddingVertical: 5,
        backgroundColor: COLORS.blackTransparent,
        borderRadius: 10,
        position: 'absolute',
        bottom: 24,
        left: 24,
        fontSize: 12,
    },
});

//make this component available to the app
export default MainCard;
