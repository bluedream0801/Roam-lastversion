//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../../theme/colors';
import IconButton from '../../../../components/buttons/IconButton';
import SimpleButton from '../../../../components/buttons/SimpleButton';
import { useNavigation } from '@react-navigation/native';
import Heading2 from '../../../../components/texts/Heading2';
import UnderLineInput from '../../../../components/inputs/UnderLineInput';

// create a component
const PromptAnswer = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Heading2>Pick your favorite prompt?</Heading2>

                <View style={{ flexWrap: 'nowrap', gap: 8, justifyContent: 'center', marginTop: 20}}>
                    <UnderLineInput placeHolder={'Pizza, with pinapples'}/>
                </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <IconButton onPress={() => navigation.goBack()} icon={'ArrowLeft'} label={'Back'} style={{ height: 48 }} />

                <SimpleButton onPress={() => navigation.navigate('AllowNotification')} label={`Next`} style={{ height: 48, marginLeft: 15 }} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 15,
    },
});

//make this component available to the app
export default PromptAnswer;