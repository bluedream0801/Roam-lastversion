import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header1 from '../../components/headers/Header1';
import { COLORS } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import SimpleButton from '../../components/buttons/SimpleButton';
import Heading1 from '../../components/texts/Heading1';
import IconButton from '../../components/buttons/IconButton';
import Individual from './individual';

const Chat = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Header1 iconLeft={'ArrowLeft'} iconRight={'Search'} onIconLeftPress={() => navigation.goBack()} onIconRightPress={() => {}}>
                <View style={{ flexDirection: 'row', flexWrap: 'nowrap', gap: 5 }}>
                    <SimpleButton label={'Individual'} style={{ borderRadius: 10, flex: 0, width: 100 }} />
                    <SimpleButton
                        color={COLORS.gray.dark}
                        backgroundColor={COLORS.gray.medium}
                        label={'Group'}
                        style={{ borderRadius: 10, flex: 0, borderWidth: 0, width: 100 }}
                    />
                </View>
            </Header1>

            <View style={{ backgroundColor: COLORS.gray.light, padding: 15 }}>
                <Heading1 size={24}>Inbox</Heading1>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'nowrap', gap: 5 }}>
                        <SimpleButton label={'Messages'} style={{ borderRadius: 10, flex: 0, width: 130 }} />
                        <SimpleButton
                            color={COLORS.gray.dark}
                            backgroundColor={COLORS.gray.medium}
                            label={'Notifications'}
                            style={{ borderRadius: 10, flex: 0, borderColor: COLORS.gray.dark, width: 130 }}
                        />
                    </View>

                    <IconButton icon={'Filter'} />
                </View>
            </View>

            <Individual/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
});

export default Chat;
