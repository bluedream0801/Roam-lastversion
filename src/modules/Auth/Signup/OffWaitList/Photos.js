//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../../theme/colors';
import IconButton from '../../../../components/buttons/IconButton';
import SimpleButton from '../../../../components/buttons/SimpleButton';
import { useNavigation } from '@react-navigation/native';
import Heading2 from '../../../../components/texts/Heading2';
import Typography from '../../../../components/texts/Typography';
import { Icons } from '../../../../assets';

// create a component
const Photos = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Heading2>What are your three best photos?</Heading2>

                <Typography weight={'regular'} size={16} color={COLORS.black} style={{ marginTop: 15 }}>
                    Upload 3 photos to start, the 1st is your profile pic. Make sure it’s of you.
                </Typography>


                <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 15, justifyContent: 'center', marginTop: 20}}>
                    <ImageBox/>
                    <ImageBox/>
                    <ImageBox/>
                </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <IconButton onPress={() => navigation.goBack()} icon={'ArrowLeft'} label={'Back'} style={{ height: 48 }} />

                <SimpleButton onPress={() => navigation.navigate('Prompt')} label={`Next`} style={{ height: 48, marginLeft: 15 }} />
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
export default Photos;


const ImageBox = () => {
    return (
        <TouchableOpacity style={{width: 110, height: 170, borderRadius: 24, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.gray.light}}>
            <Icons.Add width={24} height={24} stroke={COLORS.gray.dark}/>
        </TouchableOpacity>
    )
}