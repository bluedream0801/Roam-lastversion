//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { COLORS } from '../../theme/colors';
import IconButton from '../../components/buttons/IconButton';
import Heading2 from '../../components/texts/Heading2';
import SimpleButton from '../../components/buttons/SimpleButton';
import globalStyles from '../../theme/globalStyles';
import Typography from '../../components/texts/Typography';
import AddPrompt2 from './AddPrompt2';
import { useNavigation } from '@react-navigation/native';

// create a component
const AddPrompt = () => {
    const navigation = useNavigation();

    const prompt = [
        'What is your favorite food?',
        'Worst fear?',
        'Favorite musician?',
        'What is your favorite type of car?',
        'What is your favorite food?',
        'Worst fear?',
        'Favorite musician?',
        'What is your favorite type of car?',
        'What is your favorite food?',
    ];

    return (
        <View style={styles.container}>
            <View style={globalStyles.headerContainer}>
                <IconButton icon={'ArrowLeft'} onPress={() => navigation.goBack()} />
                <Heading2>Prompts</Heading2>
                <SimpleButton
                    label={'Next'}
                    backgroundColor={COLORS.gray.light}
                    color={COLORS.black}
                    style={{ flex: 0, paddingHorizontal: 15, borderWidth: 0 }}
                />
            </View>

            <ScrollView contentContainerStyle={{ padding: 15 }}>
                <Heading2>Pick your prompt</Heading2>

                <View style={{ flexWrap: 'nowrap', gap: 7, paddingVertical: 15 }}>
                    {prompt?.map(prom => (
                        <TouchableOpacity onPress={() => navigation.navigate('AddPrompt2', { prom })} style={styles.promptBtn}>
                            <Typography weight={'medium'} color={COLORS.black}>
                                {prom}
                            </Typography>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    promptBtn: {
        backgroundColor: COLORS.gray.light,
        padding: 15,
        paddingHorizontal: 23,
        borderRadius: 10,
        alignSelf: 'flex-start',
    },
});

//make this component available to the app
export default AddPrompt;
