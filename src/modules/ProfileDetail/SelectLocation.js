//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import IconButton from '../../components/buttons/IconButton';
import Heading2 from '../../components/texts/Heading2';
import globalStyles from '../../theme/globalStyles';
import { COLORS } from '../../theme/colors';
import { Icons } from '../../assets';
import Typography from '../../components/texts/Typography';

// create a component
const SelectLocation = ({ onClose, selectedPlace, setSelectedPlace }) => {
    const data = [
        {
            title: 'Spain Torrevieja',
            distance: '0,5 km',
        },
        {
            title: 'Cartagena',
            distance: '0,5 km',
        },
        {
            title: 'Costa Blanca, Espana',
            distance: '0,5 km',
        },
        {
            title: 'Laguna Salada De Torrevieja',
            distance: '0,5 km',
        },
        {
            title: 'Spain Torrevieja',
            distance: '0,5 km',
        },
        {
            title: 'Cartagena',
            distance: '0,5 km',
        },
        {
            title: 'Costa Blanca, Espana',
            distance: '0,5 km',
        },
        {
            title: 'Laguna Salada De Torrevieja',
            distance: '0,5 km',
        },
    ];
    return (
        <View style={styles.container}>
            <View style={globalStyles.headerContainer}>
                <IconButton icon={'Close'} onPress={onClose} />
                <Heading2>Select Location</Heading2>
                <IconButton icon={'Refresh'} />
            </View>

            <View style={styles.searchBarContainer}>
                <Icons.Search width={24} height={24} stroke={'#000'} />
                <TextInput placeholder="Search Place" style={styles.searchInput} />
            </View>

            <FlatList
                data={data}
                contentContainerStyle={{ padding: 15, paddingTop: 0, gap: 10 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedPlace(item);
                            onClose();
                        }}
                        style={{ flexWrap: 'nowrap', gap: 5, padding: 7 }}>
                        <Typography weight={'medium'} size={16} color={COLORS.black}>
                            {item?.title}
                        </Typography>
                        <Typography weight={'regular'}>{item?.distance}</Typography>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
export default SelectLocation;
