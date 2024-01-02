import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../modules/Home';
import Likes from '../modules/Likes';
import Feed from '../modules/Feed';
import MyProfile from '../modules/MyProfile';
import Location from '../modules/Location';
import CustomTabBar from './custom/CustomTabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBar={CustomTabBar}
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#9e4bff',
                tabBarInactiveTintColor: '#c2c1e1',
            }}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Likes" component={Likes} options={{ headerShown: false }} />
            <Tab.Screen name="Feeds" component={Feed} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={MyProfile} options={{ headerShown: false }} />
            <Tab.Screen name="Location" component={Location} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
