//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import globalStyles from '../theme/globalStyles';
import { COLORS } from '../theme/colors';
import IconButton from './buttons/IconButton';
import Heading2 from './texts/Heading2';

// create a component
const CustomModal = ({ visible, onClosePress, title, children }) => {
    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={globalStyles.headerContainer}>
                        <Heading2>{title}</Heading2>
                        <IconButton icon={'Close'} onPress={onClosePress} />
                    </View>

                    {children}
                </View>
            </View>
        </Modal>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.blackTransparent,
        flex: 1,
        justifyContent: 'flex-end',
    },
    innerContainer: {
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
});

//make this component available to the app
export default CustomModal;
