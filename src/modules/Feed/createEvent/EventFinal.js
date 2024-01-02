//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../theme/colors';
import Heading2 from '../../../components/texts/Heading2';
import IconButton from '../../../components/buttons/IconButton';
import globalStyles from '../../../theme/globalStyles';
import { useNavigation } from '@react-navigation/native';
import IconChip from '../../../components/chip/IconChip';
import Title1 from '../../../components/texts/Title1';
import Typography from '../../../components/texts/Typography';
import Divider from '../../../components/Divider';
import { groupMembers } from '../../../assets/data/homeFeed';
import GroupMemberCard from '../../../components/cards/GroupMemberCard';
import SimpleButton from '../../../components/buttons/SimpleButton';

// create a component
const EventFinal = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={globalStyles.headerContainer}>
                <Heading2>Create new event flow</Heading2>
                <IconButton icon={'Close'} onPress={() => navigation.goBack()} />
            </View>

            <ScrollView contentContainerStyle={{ padding: 15 }}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/236x/17/d5/9b/17d59b5941f91b71165ab1e9c1a38698.jpg' }}
                    style={{ width: '100%', height: 167, borderRadius: 24 }}
                />

                <View style={{ paddingVertical: 15 }}>
                    <View style={{ flexWrap: 'nowrap', gap: 8 }}>
                        <Title1 size={20}>Plan Name</Title1>
                        <Typography weight={'regular'} size={12}>
                            Address
                        </Typography>
                    </View>

                    <View style={styles.chipContainer}>
                        <IconChip style={{ backgroundColor: COLORS.mistyRose }} color={COLORS.black} icon={'MarkerPin'} label={'4 mi'} />
                        <IconChip style={{ backgroundColor: COLORS.mistyRose }} color={COLORS.black} icon={'MarkerPin'} label={'Sept 15'} />
                        <IconChip
                            style={{ backgroundColor: COLORS.mistyRose }}
                            color={COLORS.black}
                            icon={'Calendar'}
                            label={'8:00 pm - 11:00 pm'}
                        />
                    </View>
                </View>

                <Divider />

                <View style={{ paddingVertical: 15 }}>
                    <Typography weight={'medium'} size={12} color={COLORS.black}>
                        Whose going
                    </Typography>

                    <View style={{ flexDirection: 'row', flexWrap: 'nowrap', gap: 10, justifyContent: 'center', marginVertical: 7 }}>
                        {groupMembers?.slice(2, 7)?.map(item => (
                            <GroupMemberCard key={item?.avatar} avatar={item?.avatar} label={item?.title} />
                        ))}
                    </View>

                    <Typography weight={'regular'} size={12}>
                        *Exact details are shown only once you accept a request to join.
                    </Typography>
                </View>

                <Divider />

                <View style={{ flexWrap: 'nowrap', gap: 15, paddingVertical: 15 }}>
                    <TextInput placeholder="Write Caption..." placeholderTextColor={COLORS.gray.dark} style={styles.textInput} />

                    <SimpleButton label={'Post to feed'} />

                    <TouchableOpacity style={{ alignSelf: 'center', padding: 10 }}>
                        <Typography weight={'medium'} color={COLORS.black}>
                            Or Send Directly
                        </Typography>
                    </TouchableOpacity>
                </View>
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
    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginTop: 16,
    },
    textInput: {
        backgroundColor: COLORS.gray.light,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontFamily: 'ClashDisplay-Medium',
    },
});

//make this component available to the app
export default EventFinal;
