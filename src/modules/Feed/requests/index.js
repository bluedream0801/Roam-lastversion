//import liraries
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors';
import PlanCard2 from '../../../components/cards/PlanCard2';

// create a component
const Requests = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <PlanCard2
                image={'https://i.pinimg.com/236x/e7/04/67/e70467ab0bb89d1059c5cb80543dfba1.jpg'}
                title={'Plan Nam'}
                description={'Something about plan'}
                address={'New York'}
            />

            <PlanCard2
                style={{ marginTop: 15 }}
                image={'https://i.pinimg.com/236x/7f/3a/e1/7f3ae1df3d4861ac9a4ffbce1cca8161.jpg'}
                title={'Plan Nam'}
                description={'Something about plan'}
                address={'New York'}
            />
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        padding: 15,
        paddingBottom: 100,
    },
});

//make this component available to the app
export default Requests;
