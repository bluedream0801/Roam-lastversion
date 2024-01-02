import React, { Component, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { COLORS } from '../../theme/colors';
import InfoCardLeft from './infoCardLeft';
import MainCard from './mainCard';
import InfoCardRight from './infoCardRight';
import Header1 from '../../components/headers/Header1';
import { likeFeed } from '../../assets/data/likeFeed';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const Likes = () => {
    const navigation = useNavigation()
    const [flatListItem, setFlatlistItem] = useState({ height: height * 0.8, width: width });

    return (
        <View style={styles.container}>
            <Header1
                title={'Like Hub'}
                iconLeft={'Filter'}
                iconRight={'Message'}
                onIconLeftPress={() => {}}
                onIconRightPress={() => navigation?.navigate('Chat')}
            />

            <FlatList
                onLayout={event => setFlatlistItem({ height: event.nativeEvent.layout?.height, width: event.nativeEvent.layout?.width })}
                data={likeFeed}
                keyExtractor={item => item?.id}
                pagingEnabled
                nestedScrollEnabled
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={({ item }) => (
                    <View style={[styles.flatListItemContainer, { height: flatListItem.height, width: flatListItem.width }]}>
                        <FlatList
                            data={[1, 2, 3]}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item}
                            initialScrollIndex={1}
                            nestedScrollEnabled
                            getItemLayout={(data, index) => ({ length: width, offset: width * index, index })}
                            renderItem={({ item: notUsed, index }) => (
                                <View style={{ height: flatListItem.height, width: flatListItem.width }}>
                                    {index == 0 ? (
                                        <InfoCardLeft feed={item?.detailInfo} />
                                    ) : index == 1 ? (
                                        <MainCard feed={item?.detailInfo} />
                                    ) : (
                                        <InfoCardRight feed={item?.detailInfo} />
                                    )}
                                </View>
                            )}
                        />
                    </View>
                )}
            />

            <View style={{ height: 80 }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    flatListItemContainer: { backgroundColor: '#fff' },
});

export default Likes;
