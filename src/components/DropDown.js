//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/colors';
import Typography from './texts/Typography';
import IconButton from './buttons/IconButton';

// create a component
const DropDown = ({ label, style, data }) => {
    const [selected, setSelected] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View style={style}>
            <Typography color={COLORS.black} weight={'regular'} style={{ marginLeft: 20 }}>
                {label}
            </Typography>

            <View style={{ flexDirection: 'row', flexWrap: 'nowrap', gap: 7, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => setIsOpen(true)}
                    style={{
                        color: COLORS.black,
                        backgroundColor: COLORS.gray.light,
                        flex: 1,
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        borderRadius: 30,
                        justifyContent: 'center',
                        marginTop: 5,
                        height: 48,
                    }}>
                    <Typography weight={'regular'} color={selected && COLORS.black}>
                        {selected || 'Selected event type'}
                    </Typography>
                </TouchableOpacity>

                <IconButton
                    onPress={() => setIsOpen(pre => !pre)}
                    icon={isOpen ? 'ChevronUp' : 'ChevronDown'}
                    backgroundColor={COLORS.mistyRose}
                    style={{ height: 47, width: 47, borderRadius: 24 }}
                />
            </View>

            {isOpen && (
                <View style={{ backgroundColor: COLORS.gray.light, borderRadius: 24, margin: 5 }}>
                    {data?.map(item => (
                        <TouchableOpacity
                            onPress={() => {
                                setSelected(item);
                                setIsOpen(false);
                            }}
                            style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
                            <Typography weight={'regular'} color={COLORS.black}>
                                {item}
                            </Typography>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
});

//make this component available to the app
export default DropDown;
