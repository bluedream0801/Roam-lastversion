import React, { Component } from 'react';
import { View, FlatList, StyleSheet, ScrollView, Image } from 'react-native';
import Title1 from '../../../components/texts/Title1';
import Typography from '../../../components/texts/Typography';
import IconButton from '../../../components/buttons/IconButton';
import { COLORS } from '../../../theme/colors';
import { Icons } from '../../../assets';
import ProfileHeader from '../../../components/headers/ProfileHeader';
import InfoCard1 from '../../../components/cards/InfoCard1';

const InfoCardLeft = ({ feed }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled contentContainerStyle={styles.container}>
            <ProfileHeader avatar={feed?.avatar} name={feed?.name} age={feed?.age} />

            <View style={{ paddingVertical: 8, flexWrap: 'nowrap', gap: 8, marginTop: 16 }}>
                <Title1>Location</Title1>
                <Typography weight={'semiBold'}>{feed?.location?.address}</Typography>
            </View>

            <View style={{ paddingVertical: 8, flexWrap: 'nowrap', gap: 8 }}>
                <Title1>About</Title1>
                <Typography weight={'semiBold'}>{feed?.about}</Typography>
            </View>

            <InfoCard1 title="Basics" data={feed?.basics} />

            <InfoCard1 title="Interests" data={feed?.interest} />

            <View style={{ marginTop: 16, flexDirection: 'row', flexWrap: 'nowrap', gap: 8, borderRadius: 15, overflow: 'hidden' }}>
                {feed?.images?.map(item => (
                    <Image
                        key={item}
                        source={{ uri: item }}
                        style={{ height: 203, width: 143, borderRadius: 15, backgroundColor: COLORS.gray.medium }}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
});

export default InfoCardLeft;
