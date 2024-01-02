import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../../../theme/colors';
import PlanCard from '../../../components/cards/PlanCard';

const MyPlans = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <PlanCard
                image={'https://i.pinimg.com/236x/7f/3a/e1/7f3ae1df3d4861ac9a4ffbce1cca8161.jpg'}
                title={'Plan Nam'}
                description={'Something about plan'}
                address={'New York'}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        padding: 15,
        paddingBottom: 100
    }
});

export default MyPlans;
