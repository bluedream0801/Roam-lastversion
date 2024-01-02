//import liraries
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import IconButton from '../buttons/IconButton';
import globalStyles from '../../theme/globalStyles';
import { useNavigation } from '@react-navigation/native';

// create a component
const ProfileDetailHeader = () => {
    const navigation = useNavigation();
    const [selectedButton, setSelectedButton] = useState(null);
    const [showNewButton, setShowNewButton] = useState(false);

    const animationValue = useRef(new Animated.Value(0)).current;

    // Function to handle center button click
    const handleCenterButtonClick = button => {
        setShowNewButton(true);
        setSelectedButton(button);

        // Trigger animation to move the selected button to the left
        Animated.timing(animationValue, {
            toValue: 1,
            duration: 700,
            useNativeDriver: false, // 'true' can be used in a production app for better performance
        }).start();
    };

    return (
        <View style={globalStyles.headerContainer}>
            <IconButton icon={'ArrowLeft'} onPress={() => navigation.goBack()} />
            <IconButton icon={'Message'} />

            <Animated.View
                style={{
                    position: 'absolute',
                    backgroundColor: '#fff',
                    marginLeft: 60,
                    left:
                        selectedButton === 'first'
                            ? animationValue.interpolate({
                                  inputRange: [0, 1],
                                  outputRange: ['26%', '0%'],
                              })
                            : '26%',
                }}>
                <IconButton onPress={() => handleCenterButtonClick('first')} icon={'Heart'} />
            </Animated.View>

            {/* Second Center Button with Animation */}
            <Animated.View
                style={{
                    position: 'absolute',
                    backgroundColor: '#fff',
                    marginLeft: 60,
                    left:
                        selectedButton === 'second'
                            ? animationValue.interpolate({
                                  inputRange: [0, 1],
                                  outputRange: ['39%', '0%'],
                              })
                            : '39%',
                }}>
                <IconButton onPress={() => handleCenterButtonClick('second')} icon={'UserCircle'} />
            </Animated.View>

            {/* New Button (appears on top of the right button) */}
            {showNewButton && (
                <Animated.View
                    style={{
                        position: 'absolute',
                        right: 15,
                        flexDirection: 'row',
                        width: 230,
                        justifyContent: 'flex-end',
                        backgroundColor: '#fff',
                        opacity: animationValue,
                    }}>
                    <IconButton icon={'Message'} label={'Send Message'} style={{ marginRight: 5 }} />
                    <IconButton icon={'DotsHorizontal'} />
                </Animated.View>
            )}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ProfileDetailHeader;
