import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../theme/colors';
import IconButton from '../../../components/buttons/IconButton';
import { Icons } from '../../../assets';
import { useNavigation } from '@react-navigation/native';
import Heading1 from '../../../components/texts/Heading1';
import SimpleButton from '../../../components/buttons/SimpleButton';
import { plans } from '../../../assets/data/homeFeed';
import Chip from '../../../components/chip/Chip';
import Typography from '../../../components/texts/Typography';
import IconChip from '../../../components/chip/IconChip';

const MoreList = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <IconButton icon="ArrowLeft" onPress={() => navigation?.goBack()} />

                <View style={styles.searchBarContainer}>
                    <Icons.Search width={24} height={24} stroke={'#000'} />
                    <TextInput placeholder="Search friends" style={styles.searchInput} />
                </View>

                <IconButton icon="Add" />
            </View>

            <View style={{ backgroundColor: COLORS.gray.light, padding: 15 }}>
                <Heading1>Browse by Activity</Heading1>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10, marginTop: 10 }}>
                    <SimpleButton label={'Outdoor Seating'} backgroundColor={COLORS.darkGreen} style={{ borderRadius: 10 }} />
                    <SimpleButton
                        label={'Bear'}
                        variant="outlined"
                        borderColor={'#d5d5d5'}
                        color={COLORS.black}
                        style={{ borderRadius: 10 }}
                    />
                    <SimpleButton
                        label={'Bar'}
                        variant="outlined"
                        borderColor={'#d5d5d5'}
                        color={COLORS.black}
                        style={{ borderRadius: 10 }}
                    />
                    <SimpleButton
                        label={'Roof Top'}
                        variant="outlined"
                        borderColor={'#d5d5d5'}
                        color={COLORS.black}
                        style={{ borderRadius: 10 }}
                    />
                    <SimpleButton
                        label={'Park'}
                        variant="outlined"
                        borderColor={'#d5d5d5'}
                        color={COLORS.black}
                        style={{ borderRadius: 10 }}
                    />
                </ScrollView>
            </View>

            <FlatList
                data={[1, 2, 3]}
                contentContainerStyle={{ padding: 15, gap: 15 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ItemDetail')}
                        style={{ backgroundColor: COLORS.gray.light, borderRadius: 25, overflow: 'hidden' }}>
                        <Image source={{ uri: plans[2]?.postImage }} style={{ width: '100%', height: 200 }} />

                        <View style={{ padding: 15, flexWrap: 'nowrap', gap: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                                    <Chip backgroundColor="#FFC7C5" label={'Outdoor Seating'} />
                                    <Chip label={'Beer'} />
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icons.Star width={24} height={24} fill={'#000'} />
                                    <Typography color={COLORS.black} weight={'semiBold'} size={14}>
                                        3.5
                                    </Typography>
                                    <Typography weight={'medium'} size={14}>
                                        {'  (57)'}
                                    </Typography>
                                </View>
                            </View>

                            <Typography size={16} weight={'semiBold'} color={COLORS.black}>
                                Bowling
                            </Typography>
                            <Typography size={12} weight={'medium'}>
                                Bowlero Westlake
                            </Typography>

                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                                <IconChip
                                    style={{ backgroundColor: COLORS.white }}
                                    icon={'MarkerPin'}
                                    color={COLORS.black}
                                    label={'4 mi'}
                                />
                                <IconChip
                                    style={{ backgroundColor: COLORS.white }}
                                    icon={'Calendar'}
                                    color={COLORS.black}
                                    label={'Sept 15'}
                                />
                                <IconChip
                                    style={{ backgroundColor: COLORS.white }}
                                    icon={'Calendar'}
                                    color={COLORS.black}
                                    label={'8:00 pm - 11:00 pm'}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

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
    },
    searchBarContainer: {
        backgroundColor: COLORS.white,
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
        marginLeft: 7,
    },
});

export default MoreList;
