//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../../../theme/colors';
import IconButton from '../../../../components/buttons/IconButton';
import SimpleButton from '../../../../components/buttons/SimpleButton';
import { useNavigation } from '@react-navigation/native';
import Heading2 from '../../../../components/texts/Heading2';
import Typography from '../../../../components/texts/Typography';
import { Icons } from '../../../../assets';
import { Images } from '../../../../assets/images';
import { Checkbox } from 'react-native-paper';

// create a component
const Privacy = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Image source={Images.CircleDoc} style={{ width: 109, height: 109, marginVertical: 15 }} />

                <Heading2 style={{marginVertical: 15}}>Accept Roam’s Terms & Review Privacy notice</Heading2>

                
                    <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', borderBottomWidth: 1, padding: 15}}>
                        <Image source={Images.Doc} style={{width: 18, height: 18, marginRight: 10}}/>

                        <Typography weight={'medium'} color={COLORS.black}>Read More</Typography>
                    </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20, borderTopWidth: 1, borderTopColor: COLORS.gray.medium}}>
                    <Typography weight={'regular'} color={COLORS.black} size={16}>I Agree</Typography>

                    <Checkbox status='checked' color={COLORS.tyrianPurple} />
                </View>

            <View style={{ flexDirection: 'row' }}>
                <IconButton onPress={() => navigation.goBack()} icon={'ArrowLeft'} label={'Back'} style={{ height: 48 }} />

                <SimpleButton onPress={() => navigation.navigate('Done')} label={`Next`} style={{ height: 48, marginLeft: 15 }} />
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
export default Privacy;
