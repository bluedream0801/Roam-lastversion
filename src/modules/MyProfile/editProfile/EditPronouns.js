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
const EditPronouns = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, padding: 15 }}>
                <HorizontalCB checked label={'He/Him'} />
                <Divider />
                <HorizontalCB label={'She/Her'} />
                <Divider />
                <HorizontalCB label={'They/Them'} />
                <Divider />
                <HorizontalCB label={'Ze/Zir'} />
                <Divider />
                <HorizontalCB checked label={'Xe/Xim'} />
                <Divider />
                <HorizontalCB label={'Co/Co'} />
                <Divider />
                <HorizontalCB label={'Ey/Em'} />
                <Divider />
                <HorizontalCB label={'Ve/Ver'} />
                <Divider />
                <HorizontalCB label={'Per/Per'} />
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
export default EditPronouns;
