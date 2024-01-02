//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Modal, SafeAreaView } from 'react-native';
import FeedInfoCard from '../../components/cards/FeedInfoCard';
import IconButton from '../../components/buttons/IconButton';
import { COLORS } from '../../theme/colors';
import AddPrompt from './AddPrompt';
import { useNavigation } from '@react-navigation/native';

// create a component
const Prompt = ({ data }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <IconButton
                onPress={() => navigation?.navigate('AddPrompt')}
                style={{ marginVertical: 15 }}
                icon="Add"
                label="Choose a prompt"
                backgroundColor={COLORS.tyrianPurple}
                color={COLORS.white}
            />

            {data?.map(item => (
                <FeedInfoCard key={item?.image} image={item?.image} title={item?.title} answer={item?.answer} />
            ))}

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingBottom: 15,
    },
});

//make this component available to the app
export default Prompt;
