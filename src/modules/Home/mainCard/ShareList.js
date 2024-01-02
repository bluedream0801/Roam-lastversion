//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GroupMemberCard from '../../../components/cards/GroupMemberCard';
import { friendsList } from '../../../assets/data/friendsList';
import CustomModal from '../../../components/CustomModal';
import RecommendModal from './RecommendModal';

// create a component
const ShareList = () => {
    const [showRecommendationModal, setShowRecommendationModal] = useState(false);

    return (
        <View style={styles.container}>
            <ScrollView horizontal contentContainerStyle={{ gap: 15, padding: 15 }}>
                {friendsList?.slice(0, 7)?.map(item => (
                    <GroupMemberCard
                        onPress={() => setShowRecommendationModal(true)}
                        disabled={false}
                        key={item?.avatar}
                        avatar={item?.avatar}
                        label={item?.name}
                    />
                ))}
            </ScrollView>

            <CustomModal
                visible={showRecommendationModal}
                onClosePress={() => setShowRecommendationModal(false)}
                title={'Recommend to a friend'}>
                <RecommendModal onClose={() => setShowRecommendationModal(false)} />
            </CustomModal>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
});

//make this component available to the app
export default ShareList;
