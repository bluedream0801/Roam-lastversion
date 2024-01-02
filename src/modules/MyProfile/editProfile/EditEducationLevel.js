//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Heading2 from '../../../components/texts/Heading2';
import Typography from '../../../components/texts/Typography';
import { COLORS } from '../../../theme/colors';
import globalStyles from '../../../theme/globalStyles';
import CheckBox from '../../../components/checkboxes/CheckBox';
import { Icons } from '../../../assets';
import HorizontalRB from '../../../components/radiobuttons/HorizontalRB';
import Divider from '../../../components/Divider';

// create a component
const EditEducationLevel = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, padding: 15 }}>
                <HorizontalRB checked label={'High School Graduate'} />
                <Divider />
                <HorizontalRB label={'Some College or Technical School'} />
                <Divider />
                <HorizontalRB label={"Associate's Degreee"} />
                <Divider />
                <HorizontalRB label={"Bachelor's Degree"} />
                <Divider />
                <HorizontalRB label={"Master's Degree"} />
                <Divider />
                <HorizontalRB label={`Doctorate (Ph.D.)`} />
                <Divider />
                <HorizontalRB label={'Currently in School/Student'} />
                <Divider />
                <TouchableOpacity style={[globalStyles.justifyContainer, {paddingRight: 10}]}>
                    <Typography weight={'regular'} color={COLORS.black} size={16}>
                        Other
                    </Typography>
                    <Icons.ArrowRight height={16} width={16} stroke={COLORS.black} />
                </TouchableOpacity>
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
export default EditEducationLevel;
