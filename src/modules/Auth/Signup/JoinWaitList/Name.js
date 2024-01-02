//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../../theme/colors';
import SimpleInput from '../../../../components/inputs/SimpleInput';
import Heading2 from '../../../../components/texts/Heading2';
import IconButton from '../../../../components/buttons/IconButton';
import SimpleButton from '../../../../components/buttons/SimpleButton';
import { useNavigation } from '@react-navigation/native';

// create a component
const Name = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Heading2>What's your name?</Heading2>

                <SimpleInput label={'First Name'} placeholder={'Enter first name'} style={{ marginTop: 25 }} />

                <SimpleInput label={'Last Name'} placeholder={'Enter last name'} style={{ marginTop: 15 }} />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <IconButton onPress={() => navigation.goBack()} icon={'ArrowLeft'} label={'Back'} style={{ height: 48 }} />

                <SimpleButton onPress={() => navigation.navigate('DateOfBirth')} label={`Next`} style={{ height: 48, marginLeft: 15 }} />
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
export default Name;
