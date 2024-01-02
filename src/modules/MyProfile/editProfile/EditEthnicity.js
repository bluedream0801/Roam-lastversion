//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Heading2 from '../../../components/texts/Heading2';
import Typography from '../../../components/texts/Typography';
import { COLORS } from '../../../theme/colors';
import globalStyles from '../../../theme/globalStyles';
import CheckBox from '../../../components/checkboxes/CheckBox';
import { Icons } from '../../../assets';
import Divider from '../../../components/Divider';
import HorizontalCB from '../../../components/checkboxes/HorizontalCB';

// create a component
const EditEthnicity = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, padding: 15 }}>
                <HorizontalCB checked label={'Prefer not to say'} />
                <Divider />
                <HorizontalCB label={'Black/African Descent'} />
                <Divider />
                <HorizontalCB label={'East Asian'} />
                <Divider />
                <HorizontalCB label={'Hispanic/Latino'} />
                <Divider />
                <HorizontalCB checked label={'Middle Eastern'} />
                <Divider />
                <HorizontalCB label={'Native American'} />
                <Divider />
                <HorizontalCB label={'Pacific Islander'} />
                <Divider />
                <HorizontalCB label={'South Asian'} />
                <Divider />
                <HorizontalCB label={'Southeast Asian'} />
                <Divider />
                <HorizontalCB label={'White/Caucasian'} />
                <Divider />
                <HorizontalCB label={'Other'} />
                <Divider />
            </View>

            <View style={globalStyles.checkboxCard}>
                <CheckBox checked={true} label="Visible on Profile" />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bigInput: {
        borderWidth: 2,
        borderRadius: 12,
        color: COLORS.black,
        borderColor: COLORS.gray.medium,
        fontSize: 55,
        fontFamily: 'ClashDisplay-Regular',
        textAlign: 'center',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 80,
    },
});

//make this component available to the app
export default EditEthnicity;
