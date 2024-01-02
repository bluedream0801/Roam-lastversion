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
const EditZodiacSign = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, padding: 15 }}>
                <HorizontalRB checked label={'Prefer not to say'} />
                <Divider />
                <HorizontalRB label={'Aries'} />
                <Divider />
                <HorizontalRB label={'Taurus'} />
                <Divider />
                <HorizontalRB label={'Gemini'} />
                <Divider />
                <HorizontalRB label={'Cancer'} />
                <Divider />
                <HorizontalRB label={'Leo'} />
                <Divider />
                <HorizontalRB label={'Virgo'} />
                <Divider />
                <HorizontalRB label={'Libra'} />
                <Divider />
                <HorizontalRB label={'Scorpio'} />
                <Divider />
                <HorizontalRB label={'Sagittarius'} />
                <Divider />
                <HorizontalRB label={'Capricorn'} />
                <Divider />
                <HorizontalRB label={'Aquarius'} />
                <Divider />
                <HorizontalRB label={'Pisces'} />
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
});

//make this component available to the app
export default EditZodiacSign;
