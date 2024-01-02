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
const OffWaitStart = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                <Image source={Images.RoamSymbol} style={{ width: 62, resizeMode: 'contain', alignSelf: 'center' }} />

                <View>
                    <Heading2>You are off of the waitlist!</Heading2>
                    <Typography weight={'regular'} size={16} style={{ textAlign: 'center', marginTop: 15 }}>
                        Start roaming and find what you{'\n'}love.
                    </Typography>
                </View>
            </View>

            <View style={{flex: 1, padding: 15, justifyContent: 'flex-end'}}>
                <SimpleButton onPress={() => navigation.navigate('Photos')} label={'Get Roaming'} style={{flex: 0}}/>
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
});

//make this component available to the app
export default OffWaitStart;
