//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, SafeAreaView, Image } from 'react-native';
import { COLORS } from '../../theme/colors';
import Heading2 from '../../components/texts/Heading2';
import globalStyles from '../../theme/globalStyles';
import IconButton from '../../components/buttons/IconButton';
import SimpleButton from '../../components/buttons/SimpleButton';
import { promptData } from '../../assets/data/homeFeed';
import FeedInfoCard from '../../components/cards/FeedInfoCard';
import Divider from '../../components/Divider';

// create a component
const FinalPrompt = ({ route, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={[globalStyles.headerContainer, { justifyContent: 'center' }]}>
                <Heading2>Prompts</Heading2>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', padding: 15 }}>
                <Heading2>
                    Great, promt has been added to <Heading2 style={{ color: COLORS.darkGreen }}>your profile!</Heading2>
                </Heading2>

                <Divider style={{marginVertical: 15}}/>

                <FeedInfoCard
                    key={promptData[0]?.image}
                    image={promptData[0]?.image}
                    title={promptData[0]?.title}
                    answer={promptData[0]?.answer}
                />
            </View>

            <View style={[globalStyles.justifyContainer, { margin: 15, paddingVertical: 0 }]}>
                <IconButton icon={'Add'} label={'Add more prompt'} backgroundColor={COLORS.white} />

                <SimpleButton
                    onPress={() => navigation.navigate('TabNavigator')}
                    label={'View Profile'}
                    style={{ flex: 0, paddingHorizontal: 30 }}
                />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 170,
        backgroundColor: COLORS.gray.light,
        borderRadius: 24,
        alignSelf: 'center',
        overflow: 'hidden',
    },
});

//make this component available to the app
export default FinalPrompt;
