import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { COLORS } from '../../../theme/colors';
import ChatListCard from '../../../components/cards/ChatListCard';
import { chatList } from '../../../assets/data/chat';
import Divider from '../../../components/Divider';
import { useNavigation } from '@react-navigation/native';

const Individual = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <FlatList
                data={chatList}
                renderItem={({ item }) => (
                    <ChatListCard
                        onPress={() => navigation?.navigate('MessageScreen', { sender: item })}
                        avatar={item?.avatar}
                        name={item?.name}
                        message={item?.message}
                        sentDay={item?.sentDay}
                        sentTime={item?.sentTime}
                        online={item?.online}
                        count={item?.count}
                    />
                )}
                keyExtractor={item => item?.username}
                ItemSeparatorComponent={<Divider />}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
});

//make this component available to the app
export default Individual;
