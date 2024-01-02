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

const ItemDetail = () => {
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

            <ScrollView contentContainerStyle={{ padding: 15 }}>
                <View
                    onPress={() => navigation.navigate('ItemDetail')}
                    style={{ borderTopLeftRadius: 25, borderTopRightRadius: 25, overflow: 'hidden' }}>
                    <Image source={{ uri: plans[2]?.postImage }} style={{ width: '100%', height: 200 }} />

                    <View style={{ marginTop: 15, flexWrap: 'nowrap', gap: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icons.Star width={24} height={24} fill={'#000'} />
                            <Typography color={COLORS.black} weight={'semiBold'} size={14}>
                                3.5
                            </Typography>
                            <Typography weight={'medium'} size={14}>
                                {'  (57)'}
                            </Typography>
                        </View>

                        <Typography size={16} weight={'semiBold'} color={COLORS.black}>
                            Sharky's Bar and Grill
                        </Typography>
                        <Typography size={12} weight={'medium'}>
                            6391 Sunset Bvid
                        </Typography>

                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                            <IconChip
                                style={{ backgroundColor: COLORS.mistyRose }}
                                icon={'MarkerPin'}
                                color={COLORS.black}
                                label={'4 mi'}
                            />
                            <IconChip
                                style={{ backgroundColor: COLORS.mistyRose }}
                                icon={'Calendar'}
                                color={COLORS.black}
                                label={'Sept 15'}
                            />
                            <IconChip
                                style={{ backgroundColor: COLORS.mistyRose }}
                                icon={'Calendar'}
                                color={COLORS.black}
                                label={'8:00 pm - 11:00 pm'}
                            />
                        </View>

                        <Typography size={16} weight={'semiBold'} color={COLORS.black}>
                            Basics
                        </Typography>

                        <ScrollView horizontal contentContainerStyle={{ gap: 10 }}>
                            <SimpleButton
                                label={'Add Review'}
                                color={COLORS.tyrianPurple}
                                style={{ borderRadius: 10, borderWidth: 0 }}
                                backgroundColor={COLORS.gray.light}
                            />
                            <SimpleButton
                                label={'Menu'}
                                color={COLORS.tyrianPurple}
                                style={{ borderRadius: 10, borderWidth: 0 }}
                                backgroundColor={COLORS.gray.light}
                            />
                            <SimpleButton
                                label={'View on Map'}
                                color={COLORS.tyrianPurple}
                                style={{ borderRadius: 10, borderWidth: 0 }}
                                backgroundColor={COLORS.gray.light}
                            />
                        </ScrollView>

                        <Typography size={16} weight={'semiBold'} color={COLORS.black}>
                            Info
                        </Typography>

                        <View>
                            <IconButton icon={'LinkExternal'} label={'www.sharkys.com'} style={{ justifyContent: 'flex-start' }} />
                            <IconButton icon={'Phone'} label={'(818)-849-23878'} style={{ marginTop: 10, justifyContent: 'flex-start' }} />
                        </View>

                        <Typography size={16} weight={'semiBold'} color={COLORS.black}>
                            Tags
                        </Typography>

                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                            <Chip backgroundColor="#FFC7C5" label={'Outdoor Seating'} />
                            <Chip label={'Beer'} />
                        </View>

                        <Typography size={16} weight={'semiBold'} color={COLORS.black}>
                            Reviews
                        </Typography>

                        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                            <Image
                                source={{ uri: 'https://i.pinimg.com/236x/13/b2/4d/13b24dff04a3cfeadde81e46c77335b1.jpg' }}
                                style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: COLORS.gray.medium }}
                            />

                            <View style={{ flex: 1, padding: 10 }}>
                                <Typography weight={'medium'} size={16} color={COLORS.black}>
                                    Miles Jackson
                                </Typography>
                                <Typography weight={'regular'} style={{marginTop: 10}}>This place is the best. Great Service friendly staff.</Typography>
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
                    </View>
                </View>
            </ScrollView>
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

export default ItemDetail;
