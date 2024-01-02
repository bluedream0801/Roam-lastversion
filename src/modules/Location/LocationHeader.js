import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icons } from '../../assets';
import IconButton from '../../components/buttons/IconButton';
import { COLORS } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';

const LocationHeader = () => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                position: 'absolute',
                zIndex: 10,
                padding: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
            <IconButton icon="ArrowLeft" backgroundColor={COLORS.white} />

            <View
                style={{
                    backgroundColor: COLORS.white,
                    flex: 1,
                    overflow: 'hidden',
                    borderRadius: 30,
                    marginHorizontal: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 15,
                }}>
                <Icons.Search width={24} height={24} stroke={'#000'} />
                <TextInput
                    placeholder="Search"
                    style={{ color: COLORS.gray.dark, flex: 1, fontFamily: 'ClashDisplay-Medium', paddingVertical: 10, marginLeft: 7 }}
                />
            </View>

            <IconButton icon="Menu" backgroundColor={COLORS.white} onPress={() => navigation?.navigate('MainList')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default LocationHeader;
