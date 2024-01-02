//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../../../../theme/colors';
import Heading2 from '../../../../components/texts/Heading2';
import SimpleButton from '../../../../components/buttons/SimpleButton';
import IconButton from '../../../../components/buttons/IconButton';
import { useNavigation } from '@react-navigation/native';

// create a component
const Verification = () => {
    const navigation = useNavigation();

    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        // Exit the useEffect if the timer reaches 0
        if (seconds === 0) {
            // You can perform any action here when the timer reaches 0
            return;
        }

        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [seconds]);

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Heading2>
                    Enter the 4-digit code sent to you at <Heading2 color={COLORS.red}>968 756 4949</Heading2>
                </Heading2>

                <TextInput
                    keyboardType="decimal-pad"
                    placeholder="••••"
                    placeholderTextColor={COLORS.darkGreen}
                    maxLength={4}
                    style={styles.otpInput}
                />

                <SimpleButton
                    disabled={seconds == 0 ? false : true}
                    label={`I haven’t received a code (${seconds})`}
                    style={{ flex: 0, height: 48, marginTop: 15 }}
                />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <IconButton onPress={() => navigation.goBack()} icon={'ArrowLeft'} label={'Back'} style={{ height: 48 }} />

                <SimpleButton onPress={() => navigation.navigate('Name')} label={`Next`} style={{ height: 48, marginLeft: 15 }} />
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
    otpInput: {
        padding: 10,
        textAlign: 'center',
        letterSpacing: 40,
        fontFamily: 'ClashDisplay-Semibold',
        color: COLORS.darkGreen,
        fontSize: 40,
        marginTop: 40,
    },
});

//make this component available to the app
export default Verification;
