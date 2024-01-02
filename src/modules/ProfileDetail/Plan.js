//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { COLORS } from '../../theme/colors';
import PostCard from '../../components/cards/PostCard';
import IconButton from '../../components/buttons/IconButton';

// create a component
const Plan = ({ data }) => {
    return (
        <View style={styles.container}>
            <IconButton style={{ margin: 15 }} icon="Add" label="Create a plan" backgroundColor={COLORS.tyrianPurple} color={COLORS.white} />

            <FlatList
                data={data}
                scrollEnabled={false}
                contentContainerStyle={{ padding: 15 }}
                renderItem={({ item }) => (
                    <PostCard
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
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
});

//make this component available to the app
export default Plan;
