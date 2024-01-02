import React, { Component, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { COLORS } from '../../theme/colors';
import InfoCardLeft from './infoCardLeft';
import MainCard from './mainCard';
import InfoCardRight from './infoCardRight';
import { mainFeed } from '../../assets/data/homeFeed';
import Header1 from '../../components/headers/Header1';
import { useNavigation } from '@react-navigation/native';
import CustomModal from '../../components/CustomModal';
import Typography from '../../components/texts/Typography';
import ShareList from './mainCard/ShareList';

const { height, width } = Dimensions.get('window');

const Home = () => {
    const navigation = useNavigation();
    const [flatListItem, setFlatlistItem] = useState({ height: height * 0.8, width: width });

    const [showShareModal, setShowShareModal] = useState(false)

    return (
        <View style={styles.container}>
            <Header1
                title={'Home'}
                iconLeft={'Settings'}
                iconRight={'Message'}
                onIconLeftPress={() => {}}
                onIconRightPress={() => navigation?.navigate('Chat')}
            />

            <FlatList
                onLayout={event => setFlatlistItem({ height: event.nativeEvent.layout?.height, width: event.nativeEvent.layout?.width })}
                data={mainFeed}
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
                                        <MainCard feed={item?.detailInfo} onShareClick={() => setShowShareModal(true)} />
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

            <CustomModal visible={showShareModal} onClosePress={() => setShowShareModal(false)} title={'Share'}>
                <ShareList/>
            </CustomModal>
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

export default Home;
