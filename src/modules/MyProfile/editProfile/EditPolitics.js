//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Heading2 from '../../../components/texts/Heading2';
import Typography from '../../../components/texts/Typography';
import { COLORS } from '../../../theme/colors';
import globalStyles from '../../../theme/globalStyles';
import CheckBox from '../../../components/checkboxes/CheckBox';
import { Icons } from '../../../assets';
import HorizontalRB from '../../../components/radiobuttons/HorizontalRB';
import Divider from '../../../components/Divider';

// create a component
const EditPolitics = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ padding: 15 }}>
                <HorizontalRB checked label={'Prefer not to say'} />
                <Divider />
                <HorizontalRB label={'Liberal'} />
                <Divider />
                <HorizontalRB label={"Conservative"} />
                <Divider />
                <HorizontalRB label={"Moderate"} />
                <Divider />
                <HorizontalRB label={"Progressive"} />
                <Divider />
                <HorizontalRB label={`Libertarian`} />
                <Divider />
                <HorizontalRB label={'Socialist'} />
                <Divider />
                <HorizontalRB label={'Green Party'} />
                <Divider />
                <HorizontalRB label={'Independent'} />
                <Divider />
                <HorizontalRB label={'Centrist'} />
                <Divider />
                <HorizontalRB label={'No strong political affliation'} />
                <Divider />
                <TouchableOpacity style={[globalStyles.justifyContainer, {paddingRight: 10}]}>
                    <Typography weight={'regular'} color={COLORS.black} size={16}>
                        Other
                    </Typography>
                    <Icons.ArrowRight height={16} width={16} stroke={COLORS.black} />
                </TouchableOpacity>
            </ScrollView>

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
export default EditPolitics;
