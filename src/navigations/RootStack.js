import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import { useContext } from 'react';
import AuthGlobal from '../utils/AuthGlobal';

const RootStack = () => {
    const { user } = useContext(AuthGlobal);

    return <NavigationContainer>{user?.isLoggedIn ? <HomeStack /> : <AuthStack />}</NavigationContainer>;
};

export default RootStack;
