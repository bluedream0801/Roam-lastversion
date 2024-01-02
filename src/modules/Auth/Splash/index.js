//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../../theme/colors';
import { Images } from '../../../assets/images';
import SimpleButton from '../../../components/buttons/SimpleButton';
import Typography from '../../../components/texts/Typography';
import { useNavigation } from '@react-navigation/native';

// create a component
const Splash = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Image source={Images.Splash1} style={{ width: '100%', height: 500 }} />
            </View>

            <View style={{ padding: 15 }}>
                <SimpleButton onPress={() => navigation.navigate('PhoneNumber')} label={'Sign Up'} style={{ flex: 0 }} />
                <SimpleButton
                    color={COLORS.tyrianPurple}
                    borderColor={'#d5d5d5'}
                    variant="outlined"
                    label={'Sign In'}
                    style={{ flex: 0, marginTop: 7 }}
                />

                <Typography weight={'regular'} size={12} style={{ alignSelf: 'center', marginTop: 20 }}>
                    By tapping “Sign in” you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy
                </Typography>
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
export default Splash;
