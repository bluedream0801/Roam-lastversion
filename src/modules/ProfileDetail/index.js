import React, { Component, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image, ImageBackground, ScrollView, Modal } from 'react-native';
import { COLORS } from '../../theme/colors';
import ProfileDetailHeader from '../../components/headers/ProfileDetailHeader';
import Title1 from '../../components/texts/Title1';
import Typography from '../../components/texts/Typography';
import MultipleCircleImages from '../../components/cards/MultipleCircleImages';
import { mainFeed, mutualFriends1, plans, profilePosts, promptData } from '../../assets/data/homeFeed';
import InfoCard1 from '../../components/cards/InfoCard1';
import { Icons } from '../../assets';
import IconChip from '../../components/chip/IconChip';
import ProfileInfoTab from '../../components/headers/ProfileInfoTab';
import Photos from './Photos';
import Prompt from './Prompt';
import Plan from './Plan';
import ProfileTop from '../../components/headers/ProfileTop';
import SettingsModal from './SettingsModal';

const ProfileDetail = ({ route }) => {
    const { userId } = route?.params;
    const findUser = mainFeed?.find(i => i?.detailInfo?.userId == userId);
    const user = findUser?.detailInfo;

    const [activeTab, setActiveTab] = useState('photos');

    return (
        <ScrollView style={styles.container}>
            <ProfileDetailHeader />
            <View
                style={{
                    backgroundColor: '#f9f9f9',
                    padding: 15,
                }}>
                <ProfileTop name={user?.name} age={user?.age} avatar={user?.avatar} />

                <View style={{ marginTop: 15 }}>
                    <MultipleCircleImages total={mutualFriends1?.total} more={mutualFriends1?.more} images={mutualFriends1?.images} />
                </View>
            </View>

            <View style={{ paddingHorizontal: 15 }}>
                <View style={{ paddingVertical: 8, flexWrap: 'nowrap', gap: 8, marginTop: 16 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'nowrap', gap: 10 }}>
                        <Title1>Location</Title1>

                        <IconChip icon={'MarkerPin'} label={'1 mi'} />
                    </View>

                    <Typography weight={'semiBold'}>{user?.location?.address}</Typography>
                </View>

                <View style={{ paddingVertical: 8, flexWrap: 'nowrap', gap: 8 }}>
                    <Title1>About</Title1>
                    <Typography weight={'semiBold'}>{user?.about}</Typography>
                </View>

                <InfoCard1 title="Basics" data={user?.basics} />

                <InfoCard1 title="Interests" data={user?.interest} />
            </View>

            <ProfileInfoTab active={activeTab} onPress={val => setActiveTab(val)} />

            {activeTab == 'photos' ? (
                <Photos data={profilePosts} />
            ) : activeTab == 'prompt' ? (
                <Prompt data={promptData} />
            ) : (
                <Plan data={plans} />
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
    },
});

export default ProfileDetail;
