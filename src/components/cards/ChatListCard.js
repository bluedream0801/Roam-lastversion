//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../theme/colors';
import Typography from '../texts/Typography';

// create a component
const ChatListCard = ({ onPress, avatar, count = 0, name, sentDay, message, online = false, sentTime }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image source={{ uri: avatar }} style={styles.avatar} />
                {count != 0 && <Text style={styles.messageCount}>{count}</Text>}
            </View>

            <View style={{ marginLeft: 15, flex: 1 }}>
                <Typography weight={'regular'} style={{ position: 'absolute', right: 0 }}>
                    {sentDay}
                </Typography>
                <Typography weight={'medium'} color={COLORS.black} size={16}>
                    {name}
                </Typography>
                <Typography weight={'regular'} style={{ marginTop: 3 }} numberOfLines={1}>
                    {message}
                </Typography>

                {online ? (
                    <Typography weight={'regular'} color={COLORS.green} size={12}>
                        Online
                    </Typography>
                ) : (
                    <Typography weight={'regular'} size={12}>
                        {sentTime}
                    </Typography>
                )}
            </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'row',
    },
    avatarContainer: {
        height: 48,
        width: 48,
        borderRadius: 25,
    },
    messageCount: {
        height: 16,
        width: 16,
        textAlignVertical: 'center',
        borderRadius: 8,
        backgroundColor: COLORS.red,
        position: 'absolute',
        right: 0,
        color: COLORS.white,
        fontSize: 10,
        textAlign: 'center',
    },
    avatar: {
        backgroundColor: COLORS.gray.medium,
        height: '100%',
        width: '100%',
        borderRadius: 25,
    },
});

//make this component available to the app
export default ChatListCard;
