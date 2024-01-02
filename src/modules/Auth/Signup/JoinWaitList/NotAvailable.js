//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../../../theme/colors';
import { Images } from '../../../../assets/images';
import Heading2 from '../../../../components/texts/Heading2';
import Typography from '../../../../components/texts/Typography';
import SimpleButton from '../../../../components/buttons/SimpleButton';
import { useNavigation } from '@react-navigation/native';

// create a component
const NotAvailable = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>
                <Image source={Images.CircleCross} style={{width: 109, height: 109}}/>

                <Heading2>Uh oh,</Heading2>

                <Typography weight={'regular'} size={16} style={{textAlign: 'center', lineHeight: 25}}>We aren’t available in your area, we{'\n'}will send you a text when we{'\n'}expand!</Typography>
            </View>

            <SimpleButton onPress={() => navigation.navigate('OffWaitStart')} label={'Close'} style={{flex: 0}}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 15
    },
    checkContainer: {flex:1, justifyContent: 'center', alignItems: 'center', flexWrap: 'nowrap', gap: 20},
});

//make this component available to the app
export default NotAvailable;
