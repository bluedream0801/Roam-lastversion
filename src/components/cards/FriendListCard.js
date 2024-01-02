//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SimpleButton from '../buttons/SimpleButton';
import { COLORS } from '../../theme/colors';
import Typography from '../texts/Typography';
import { Icons } from '../../assets';

// create a component
const FriendListCard = ({
    avatar,
    name,
    username,
    onPress,
    showAddBtn = false,
    onAddBtnPress,
    onCloseBtnPress = () => {},
    showAcceptBtn = false,
    onAcceptBtnPress,
    showCloseButton = true,
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row' }}>
                <Image source={{ uri: avatar }} style={styles.avatar} />

                <View style={{ justifyContent: 'space-evenly', marginLeft: 15 }}>
                    <Typography weight={'medium'} size={16} color={COLORS.black}>
                        {name}
                    </Typography>
                    <Typography weight={'medium'} size={12}>
                        {username}
                    </Typography>
                </View>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {showAddBtn && (
                    <TouchableOpacity onPress={onAddBtnPress} style={styles.addBtn}>
                        <Icons.Add height={24} width={24} stroke={COLORS.black} />
                        <Typography color={COLORS.black} weight={'medium'} style={{ marginHorizontal: 7 }}>
                            Add
                        </Typography>
                    </TouchableOpacity>
                )}

                {showAcceptBtn && (
                    <SimpleButton
                        style={{ flex: 0, borderWidth: 0 }}
                        color={COLORS.black}
                        label={'Accept'}
                        backgroundColor={COLORS.peachYellow}
                    />
                )}

                {showCloseButton && (
                    <TouchableOpacity onPress={onCloseBtnPress} style={{ marginLeft: 15 }}>
                        <Icons.Close height={24} width={24} stroke={COLORS.black} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
    },
    avatar: {
        height: 48,
        width: 48,
        borderRadius: 25,
        backgroundColor: COLORS.gray.medium,
    },
    addBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 15,
        borderColor: '#d5d5d5',
    },
});

//make this component available to the app
export default FriendListCard;
