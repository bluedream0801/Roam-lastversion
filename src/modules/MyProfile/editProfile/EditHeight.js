//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Heading2 from '../../../components/texts/Heading2';
import Typography from '../../../components/texts/Typography';
import { COLORS } from '../../../theme/colors';
import globalStyles from '../../../theme/globalStyles';
import CheckBox from '../../../components/checkboxes/CheckBox';

// create a component
const EditHeight = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, padding: 15 }}>
                <View style={{ borderWidth: 1, borderRadius: 20, padding: 15, borderColor: COLORS.gray.medium }}>
                    <Heading2>Select height</Heading2>

                    <View style={{ flexDirection: 'row', flexWrap: 'nowrap', gap: 5, marginTop: 15 }}>
                        <View style={{ flex: 1, height: 95 }}>
                            <TextInput placeholder="00" style={styles.bigInput} />
                            <Typography weight={'regular'} size={12} color={COLORS.black}>
                                Foot
                            </Typography>
                        </View>
                        <Text style={{ fontSize: 55, color: COLORS.black }}>’</Text>
                        <View style={{ flex: 1, height: 95 }}>
                            <TextInput placeholder="00" style={styles.bigInput} />

                            <Typography weight={'regular'} size={12} color={COLORS.black}>
                                Inches
                            </Typography>
                        </View>
                        <Text style={{ fontSize: 55, color: COLORS.black }}>‘’</Text>
                    </View>
                </View>
            </View>

            <View style={globalStyles.checkboxCard}>
                <CheckBox checked={true} label="Always Visible" />
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
export default EditHeight;
