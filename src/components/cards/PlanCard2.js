import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import IconChip from '../chip/IconChip';
import Typography from '../texts/Typography';
import Title1 from '../texts/Title1';
import { COLORS } from '../../theme/colors';
import GroupMembers from '../GroupMembers';
import { Divider } from 'react-native-paper';
import { groupMembers, mutualFriends1 } from '../../assets/data/homeFeed';
import InvitedBy from '../InvitedBy';
import SimpleButton from '../buttons/SimpleButton';
import MultipleCircleImages from './MultipleCircleImages';

const PlanCard2 = ({ image, title, description, address, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Image source={{ uri: image }} style={styles.image} />

            <View style={{ padding: 16 }}>
                <View style={{ flexWrap: 'nowrap', gap: 8 }}>
                    <Title1 size={20}>{title}</Title1>
                    <Typography weight={'regular'} color={COLORS.black}>
                        {description}
                    </Typography>
                    <Typography weight={'regular'} size={12}>
                        {address}
                    </Typography>
                </View>

                <View style={styles.chipContainer}>
                    <IconChip style={{ backgroundColor: COLORS.mistyRose }} color={COLORS.black} icon={'MarkerPin'} label={'4 mi'} />
                    <IconChip style={{ backgroundColor: COLORS.mistyRose }} color={COLORS.black} icon={'MarkerPin'} label={'Sept 15'} />
                    <IconChip
                        style={{ backgroundColor: COLORS.mistyRose }}
                        color={COLORS.black}
                        icon={'Calendar'}
                        label={'8:00 pm - 11:00 pm'}
                    />
                </View>

                <Divider />

                <View style={{ paddingTop: 16 }}>
                    <GroupMembers title={'Your Group'} groupMembers={groupMembers?.slice(0, 3)} />
                </View>

                <View style={{flexDirection: 'row', flexWrap: 'nowrap', gap: 15}}>
                    <View style={{ backgroundColor: COLORS.papayaWhip, padding: 15, alignItems: 'center', borderRadius: 15, flex: 1 }}>
                        <Typography weight={'medium'} color={COLORS.black} size={12}>
                            {'Accepted (5)'}
                        </Typography>

                        <MultipleCircleImages more={mutualFriends1?.more} images={mutualFriends1?.images} style={{ marginTop: 10 }} />
                    </View>

                    <View style={{ backgroundColor: COLORS.papayaWhip, padding: 15, alignItems: 'center', borderRadius: 15, flex: 1 }}>
                        <Typography weight={'medium'} color={COLORS.black} size={12}>
                            {'Request (8)'}
                        </Typography>

                        <MultipleCircleImages more={mutualFriends1?.more} images={mutualFriends1?.images} style={{ marginTop: 10 }} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1.5,
        borderRadius: 32,
        borderColor: COLORS.gray.medium,
        overflow: 'hidden',
    },
    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginVertical: 16,
    },
    image: {
        width: '100%',
        aspectRatio: 2.2,
        backgroundColor: COLORS.gray.medium,
    },
});

export default PlanCard2;
