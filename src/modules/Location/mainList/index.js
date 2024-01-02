//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, FlatList, Image } from 'react-native';
import { COLORS } from '../../../theme/colors';
import IconButton from '../../../components/buttons/IconButton';
import { Icons } from '../../../assets';
import Heading1 from '../../../components/texts/Heading1';
import Typography from '../../../components/texts/Typography';
import IconChip from '../../../components/chip/IconChip';
import { useNavigation } from '@react-navigation/native';

// create a component
const MainList = () => {
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
                    <IconButton
                        icon={'Burger'}
                        label={'Food & Drinks'}
                        color={COLORS.white}
                        backgroundColor={COLORS.tyrianPurple}
                        style={{ borderRadius: 10 }}
                        onPress={() => navigation.navigate('MoreList')}
                    />
                    <IconButton
                        icon={'Film'}
                        label={'Live Entertainment'}
                        color={COLORS.white}
                        backgroundColor={COLORS.darkGreen}
                        style={{ borderRadius: 10 }}
                    />
                    <IconButton
                        icon={'ArrowLeft'}
                        label={'Concerts'}
                        color={COLORS.white}
                        backgroundColor={COLORS.darkGreen}
                        style={{ borderRadius: 10 }}
                    />
                </ScrollView>
            </View>

            <ScrollView>
                <View>
                    <Heading1 style={{ padding: 15 }}>Top Places Nearby</Heading1>

                    <FlatList
                        horizontal
                        contentContainerStyle={{ gap: 10, padding: 15, paddingTop: 0 }}
                        showsHorizontalScrollIndicator={false}
                        data={[1, 2, 3, 4]}
                        renderItem={({ item }) => (
                            <View style={{ width: 270, borderWidth: 1, padding: 5, borderRadius: 30, borderColor: COLORS.gray.medium }}>
                                <Image
                                    source={{ uri: 'https://i.pinimg.com/236x/7e/38/6a/7e386a15e65dadcee991d6b54d51bd95.jpg' }}
                                    style={{ width: '100%', height: 170, borderRadius: 25, backgroundColor: COLORS.gray.medium }}
                                />

                                <View style={{ padding: 8, marginTop: 7, flexWrap: 'nowrap', gap: 8 }}>
                                    <Typography size={16} weight={'semiBold'} color={COLORS.black}>
                                        Bowling
                                    </Typography>
                                    <Typography size={12} weight={'medium'}>
                                        Bowlero Westlake
                                    </Typography>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <IconChip
                                            style={{ backgroundColor: '#fff', marginLeft: -8 }}
                                            icon={'MarkerPin'}
                                            color={COLORS.black}
                                            label={'4 mi'}
                                        />
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
                        )}
                    />
                </View>

                <View>
                    <Heading1 style={{ padding: 15 }}>Recommendations</Heading1>

                    <FlatList
                        horizontal
                        contentContainerStyle={{ gap: 10, padding: 15, paddingTop: 0 }}
                        showsHorizontalScrollIndicator={false}
                        data={[1, 2, 3, 4]}
                        renderItem={({ item }) => (
                            <View style={{ width: 270, borderWidth: 1, padding: 5, borderRadius: 30, borderColor: COLORS.gray.medium }}>
                                <Image
                                    source={{ uri: 'https://i.pinimg.com/236x/94/9e/ae/949eaec412f32b3cd45ca8af3c6afb91.jpg' }}
                                    style={{ width: '100%', height: 170, borderRadius: 25, backgroundColor: COLORS.gray.medium }}
                                />

                                <View style={{ padding: 8, marginTop: 7, flexWrap: 'nowrap', gap: 8 }}>
                                    <Typography size={16} weight={'semiBold'} color={COLORS.black}>
                                        Bowling
                                    </Typography>
                                    <Typography size={12} weight={'medium'}>
                                        Bowlero Westlake
                                    </Typography>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <IconChip
                                            style={{ backgroundColor: '#fff', marginLeft: -8 }}
                                            icon={'MarkerPin'}
                                            color={COLORS.black}
                                            label={'4 mi'}
                                        />
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
                        )}
                    />
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

//make this component available to the app
export default MainList;
