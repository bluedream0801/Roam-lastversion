//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, TouchableOpacity } from 'react-native';
import { COLORS } from '../../theme/colors';
import Typography from '../texts/Typography';
import Heading2 from '../texts/Heading2';
import globalStyles from '../../theme/globalStyles';

// create a component
const SelectHeight = ({ style }) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const [activeBtn, setActiveBtn] = useState('am');

    return (
        <View style={{ borderWidth: 1, borderRadius: 20, padding: 15, borderColor: COLORS.gray.medium, ...style }}>
            <View style={[globalStyles.justifyContainer, { paddingVertical: 0 }]}>
                <Heading2>Select time</Heading2>
                <Switch
                    trackColor={{ false: COLORS.gray.light, true: COLORS.darkGreen }}
                    thumbColor={isSwitchOn ? COLORS.peachYellow : COLORS.tyrianPurple}
                    value={isSwitchOn}
                    onValueChange={onToggleSwitch}
                />
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'nowrap', gap: 5, marginTop: 15 }}>
                <View style={{ flex: 1, height: 95 }}>
                    <TextInput placeholder="00" style={styles.bigInput} />
                    <Typography weight={'regular'} size={12} color={COLORS.black}>
                        Hour
                    </Typography>
                </View>
                <Text style={{ fontSize: 55, color: COLORS.black }}>:</Text>
                <View style={{ flex: 1, height: 95 }}>
                    <TextInput placeholder="00" style={styles.bigInput} />

                    <Typography weight={'regular'} size={12} color={COLORS.black}>
                        Minute
                    </Typography>
                </View>

                <View style={{ borderWidth: 1, height: 80, borderRadius: 12, borderColor: '#d5d5d5', overflow: 'hidden' }}>
                    <TouchableOpacity onPress={() => setActiveBtn('am')} style={[styles.ampmBtn, { backgroundColor: activeBtn == 'am' ? COLORS.darkGreen : COLORS.white }]}>
                        <Typography weight={'semiBold'} color={activeBtn == 'am' ? COLORS.white : COLORS.tyrianPurple}>
                            AM
                        </Typography>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => setActiveBtn('pm')} style={[styles.ampmBtn, { backgroundColor: activeBtn == 'pm' ? COLORS.darkGreen : COLORS.white }]}>
                        <Typography weight={'semiBold'} color={activeBtn == 'pm' ? COLORS.white : COLORS.tyrianPurple}>
                            PM
                        </Typography>
                    </TouchableOpacity>
                </View>
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
    ampmBtn: { width: 48, height: 40, justifyContent: 'center', alignItems: 'center' },
});

//make this component available to the app
export default SelectHeight;
