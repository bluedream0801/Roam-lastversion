//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import IconChip from '../chip/IconChip';
import Typography from '../texts/Typography';
import Title1 from '../texts/Title1';
import { COLORS } from '../../theme/colors';
import GroupMembers from '../GroupMembers';
import { Divider } from 'react-native-paper';
import { groupMembers } from '../../assets/data/homeFeed';
import InvitedBy from '../InvitedBy';
import SimpleButton from '../buttons/SimpleButton';

// create a component
const PlanCard = ({ image, title, description, address, showInviteBtn }) => {
    return (
        <View style={styles.container}>
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
                <InvitedBy
                    name={'Camilie'}
                    days={'12 days ago'}
                    avatar={'https://i.pinimg.com/236x/aa/11/e8/aa11e8474aacc650148f8277835c999f.jpg'}
                />
                <Divider />

                <View style={{ paddingVertical: 16 }}>
                    <GroupMembers title={'Your Group'} groupMembers={groupMembers?.slice(0, 3)} />
                    <GroupMembers title={"Riley's Group"} groupMembers={groupMembers?.slice(3, 6)} />
                </View>

                {showInviteBtn ? (
                    <View style={{ flexDirection: 'row', flexWrap: 'nowrap', gap: 15 }}>
                        <SimpleButton label={'Accept Invite'} />
                        <SimpleButton label={'Decline'} variant="outlined" color={COLORS.tyrianPurple} />
                    </View>
                ) : (
                    <SimpleButton label={'Group'} />
                )}
            </View>
        </View>
    );
};

// define your styles
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

//make this component available to the app
export default PlanCard;
