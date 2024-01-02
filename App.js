import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';

import RootStack from './src/navigations/RootStack';
import Auth from './src/utils/Auth';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Auth>
                    <RootStack />
                </Auth>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App;
