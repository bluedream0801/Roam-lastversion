import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Feeds from './feeds';
import MyPlans from './myPlans';
import Requests from './requests';
import Invites from './invites';
import { COLORS } from '../../theme/colors';
import Header1 from '../../components/headers/Header1';
import SimpleButton from '../../components/buttons/SimpleButton';

const Tab = createMaterialTopTabNavigator();


const Feed = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Header1 iconLeft={'Add'} iconRight={'Message'} onIconLeftPress={() => navigation.navigate('CreateEvent')} onIconRightPress={() => navigation.navigate('Chat')}>
                <SimpleButton onPress={() => navigation.navigate('Friends')} label={'Add Friends'} style={{ flex: 0.4 }} />
            </Header1>

            <Tab.Navigator
                tabBarPosition={'top'}
                style={{ backgroundColor: '#fff' }}
                screenOptions={{
                    tabBarLabelStyle: {
                        fontWeight: '500',
                        fontSize: 13,
                        fontFamily: 'ClashDisplay-Medium',
                        textTransform: 'capitalize',
                    },
                    tabBarActiveTintColor: COLORS.tyrianPurple,
                    tabBarInactiveTintColor: COLORS.gray.dark,
                    tabBarIndicatorStyle: {
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 5,
                        backgroundColor: COLORS.tyrianPurple,
                    },
                    tabBarIndicatorContainerStyle: {
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomWidth: 0.5,
                        borderColor: COLORS.gray.dark,
                    },
                    tabBarStyle: {
                        elevation: 0,
                        backgroundColor: COLORS.white,
                        marginHorizontal: 15,
                    },
                }}>
                <Tab.Screen name="MyFeed" component={Feeds} options={{ tabBarLabel: 'Feed' }} />
                <Tab.Screen name="MyPlans" component={MyPlans} options={{ tabBarLabel: 'My Plans' }} />
                <Tab.Screen name="Requests" component={Requests} options={{ tabBarLabel: 'Requests' }} />
                <Tab.Screen name="Invites" component={Invites} options={{ tabBarLabel: 'Invites' }} />
            </Tab.Navigator>
        </View>
    );
};

export default Feed;
