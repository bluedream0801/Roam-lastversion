//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../../theme/colors';
import Heading2 from '../../components/texts/Heading2';
import IconButton from '../../components/buttons/IconButton';
import globalStyles from '../../theme/globalStyles';
import Typography from '../../components/texts/Typography';
import { Icons } from '../../assets';
import Divider from '../../components/Divider';

// create a component
const SettingsModal = ({ onClose }) => {
    return (
        <View style={styles.container}>
            <View style={globalStyles.headerContainer}>
                <Heading2>Settings</Heading2>
                <IconButton icon={'Close'} onPress={onClose} />
            </View>

            <ScrollView contentContainerStyle={{ padding: 15 }}>
                <Typography weight={'semiBold'} size={16} color={COLORS.black}>
                    Account
                </Typography>

                <ButtonIcon icon={'Edit'} title={'Edit Profile'} />
                <ButtonIcon icon={'LockUnlocked'} title={'Security'} />
                <ButtonIcon icon={'Bell1'} title={'Notifications'} />
                <ButtonIcon icon={'Shield'} title={'Privacy'} />

                <Divider style={{ marginVertical: 15 }} />

                <Typography weight={'semiBold'} size={16} color={COLORS.black}>
                    Support & About
                </Typography>

                <ButtonIcon icon={'HelpCircle'} title={'Help & Support'} />
                <ButtonIcon icon={'InfoCircle'} title={'Terms and Policies'} />

                <Divider style={{ marginVertical: 15 }} />

                <Typography weight={'semiBold'} size={16} color={COLORS.black}>
                    Actions
                </Typography>

                <ButtonIcon icon={'Flag'} title={'Report a problem'} />
                <ButtonIcon icon={'Logout'} title={'Logout'} />
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
});

//make this component available to the app
export default SettingsModal;

const ButtonIcon = ({ icon, title, onPress = () => {} }) => {
    const Icon = Icons[icon];

    return (
        <TouchableOpacity onPress={onPress} style={{ padding: 15, flexDirection: 'row', alignItems: 'center' }}>
            <Icon width={18} height={18} stroke={COLORS.black} style={{ marginRight: 10 }} />
            <Typography weight={'medium'} color={COLORS.black}>
                {title}
            </Typography>
        </TouchableOpacity>
    );
};
