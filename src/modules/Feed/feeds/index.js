//import liraries
import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { plans } from '../../../assets/data/homeFeed';
import { COLORS } from '../../../theme/colors';
import PostCard2 from '../../../components/cards/PostCard2';

// create a component
const Feeds = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={plans}
                contentContainerStyle={{ padding: 15 }}
                renderItem={({ item }) => (
                    <PostCard2
                        avatar={item?.avatar}
                        postedBy={item?.postedBy}
                        postImage={item?.postImage}
                        postedTime={item?.postedTime}
                        title={item?.title}
                        description={item?.description}
                        distance={item?.distance}
                    />
                )}
                ItemSeparatorComponent={<View style={{ height: 2, backgroundColor: COLORS?.gray?.medium, marginVertical: 16 }} />}
                ListFooterComponent={<View style={{ height: 100 }} />}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
});

//make this component available to the app
export default Feeds;
