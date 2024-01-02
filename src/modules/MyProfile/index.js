//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, SafeAreaView } from 'react-native';
import ProfileTop from '../../components/headers/ProfileTop';
import { mainFeed, plans, profilePosts, promptData } from '../../assets/data/homeFeed';
import Title1 from '../../components/texts/Title1';
import IconChip from '../../components/chip/IconChip';
import Typography from '../../components/texts/Typography';
import InfoCard1 from '../../components/cards/InfoCard1';
import ProfileInfoTab from '../../components/headers/ProfileInfoTab';
import Photos from '../ProfileDetail/Photos';
import Prompt from '../ProfileDetail/Prompt';
import Plan from '../ProfileDetail/Plan';
import { COLORS } from '../../theme/colors';
import IconButton from '../../components/buttons/IconButton';
import EditProfile from './editProfile';
import SettingsModal from '../ProfileDetail/SettingsModal';

// create a component
const MyProfile = () => {
    let user = mainFeed[0]?.detailInfo;
    const [activeTab, setActiveTab] = useState('photos');
    const [showEditProfile, setShowEditProfile] = useState(false);

    const [showSettingModal, setShowSettingModal] = useState(false);

    return (
        <>
            <View
                style={{
                    backgroundColor: COLORS.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 15,
                    borderBottomWidth: 1,
                    borderColor: COLORS.gray.medium,
                }}>
                <IconButton icon="Share" label="Share" backgroundColor={COLORS.tyrianPurple} color={COLORS.white} />

                <View style={{ flexDirection: 'row' }}>
                    <IconButton icon="Bell1" style={{ marginRight: 5 }} />
                    <IconButton icon="Settings" onPress={() => setShowSettingModal(true)} />
                </View>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 100, backgroundColor: COLORS.white }}>
                <View
                    style={{
                        backgroundColor: '#f9f9f9',
                        padding: 15,
                    }}>
                    <ProfileTop name={user?.name} age={user?.age} avatar={user?.avatar} />
                </View>

                <View style={{ paddingHorizontal: 15 }}>
                    <View style={{ paddingVertical: 8, flexWrap: 'nowrap', gap: 8, marginTop: 16 }}>
                        <Title1>Location</Title1>
                        <Typography weight={'semiBold'}>{user?.location?.address}</Typography>
                    </View>

                    <View style={{ paddingVertical: 8, flexWrap: 'nowrap', gap: 8 }}>
                        <Title1>About</Title1>
                        <Typography weight={'semiBold'}>{user?.about}</Typography>
                    </View>

                    <InfoCard1 title="Basics" data={user?.basics} showAddNew={true} onAddNewPress={() => setShowEditProfile(true)} />

                    <InfoCard1 title="Interests" data={user?.interest} showAddNew={true} onAddNewPress={() => setShowEditProfile(true)} />
                </View>

                <ProfileInfoTab active={activeTab} onPress={val => setActiveTab(val)} />

                {activeTab == 'photos' ? (
                    <Photos data={profilePosts} />
                ) : activeTab == 'prompt' ? (
                    <Prompt data={promptData} />
                ) : (
                    <Plan data={plans} />
                )}

                <Modal animationType="slide" visible={showEditProfile}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <EditProfile onClose={() => setShowEditProfile(false)} />
                    </SafeAreaView>
                </Modal>

                <Modal visible={showSettingModal} animationType="slide" transparent>
                    <View
                        style={{
                            backgroundColor: COLORS.blackTransparent,
                            flex: 1,
                            justifyContent: 'flex-end',
                        }}>
                        <SettingsModal onClose={() => setShowSettingModal(false)} />
                    </View>
                </Modal>
            </ScrollView>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default MyProfile;
