//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import UnderLineInput from '../../../components/inputs/UnderLineInput';
import CheckBox from '../../../components/checkboxes/CheckBox';
import globalStyles from '../../../theme/globalStyles';

// create a component
const EditHomeTown = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, padding: 15, flexWrap: 'nowrap', gap: 15 }}>
                <UnderLineInput placeholder={'Add your hometown'} />
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
export default EditHomeTown;
