//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GroupMemberCard from './cards/GroupMemberCard';
import Typography from './texts/Typography';
import { COLORS } from '../theme/colors';

// create a component
const GroupMembers = ({ title, groupMembers }) => {
    return (
        <>
            <Typography weight={'medium'} color={COLORS.black}>
                {title}
            </Typography>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginVertical: 5 }}>
                {groupMembers?.map(item => (
                    <GroupMemberCard key={item?.avatar} avatar={item?.avatar} label={item?.title} />
                ))}
            </View>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
});

//make this component available to the app
export default GroupMembers;
