//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Heading2 from '../../../components/texts/Heading2';
import Typography from '../../../components/texts/Typography';
import { COLORS } from '../../../theme/colors';
import globalStyles from '../../../theme/globalStyles';
import CheckBox from '../../../components/checkboxes/CheckBox';
import { Icons } from '../../../assets';
import Divider from '../../../components/Divider';
import HorizontalCB from '../../../components/checkboxes/HorizontalCB';

// create a component
const EditLangSpoken = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ padding: 15 }}>
                <HorizontalCB checked label={'English'} />
                <Divider />
                <HorizontalCB label={'Spanish'} />
                <Divider />
                <HorizontalCB label={'French'} />
                <Divider />
                <HorizontalCB label={'German'} />
                <Divider />
                <HorizontalCB checked label={'Chinese (Mandarin)'} />
                <Divider />
                <HorizontalCB label={'Arabic'} />
                <Divider />
                <HorizontalCB label={'Russian'} />
                <Divider />
                <HorizontalCB label={'Japanese'} />
                <Divider />
                <HorizontalCB label={'Portuguese'} />
                <Divider />
                <HorizontalCB label={'Italian'} />
                <Divider />
                <HorizontalCB label={'Koren'} />
                <Divider />
                <HorizontalCB label={'Dutch'} />
                <Divider />
                <HorizontalCB label={'Hindi'} />
                <Divider />
                <HorizontalCB label={'Bengali'} />
                <Divider />
                <HorizontalCB label={'Urdu'} />
                <Divider />
                <TouchableOpacity style={[globalStyles.justifyContainer, {paddingRight: 10}]}>
                    <Typography weight={'regular'} color={COLORS.black} size={16}>
                        Other
                    </Typography>
                    <Icons.ArrowRight height={16} width={16} stroke={COLORS.black} />
                </TouchableOpacity>
            </ScrollView>

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
export default EditLangSpoken;
