import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../theme/colors';
import Typography from '../texts/Typography';
import { Icons } from '../../assets';
import Title1 from '../texts/Title1';

const InfoCard1 = ({ title, data, showAddNew = false, onAddNewPress }) => {
    return (
        <View style={{ paddingVertical: 8, flexWrap: 'nowrap', gap: 8 }}>
            <Title1>{title}</Title1>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
                {data.map(item => (
                    <View key={item} style={styles.activitiesBox}>
                        <Icons.Heart width={24} height={24} stroke={COLORS.black} style={{ marginRight: 8 }} />
                        <Typography weight={'medium'} color={COLORS.black}>
                            {item}
                        </Typography>
                    </View>
                ))}

                {showAddNew && (
                    <TouchableOpacity onPress={onAddNewPress} style={[styles.activitiesBox, { borderRadius: 30, backgroundColor: COLORS.peachYellow }]}>
                        <Icons.Add width={24} height={24} stroke={COLORS.black} style={{ marginRight: 8 }} />
                        <Typography weight={'medium'} color={COLORS.black}>
                            Add
                        </Typography>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    activitiesBox: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: COLORS.papayaWhip,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default InfoCard1;
