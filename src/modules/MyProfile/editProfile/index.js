//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { COLORS } from '../../../theme/colors';
import Header1 from '../../../components/headers/Header1';
import IconButton from '../../../components/buttons/IconButton';
import Heading1 from '../../../components/texts/Heading1';
import Divider from '../../../components/Divider';
import Typography from '../../../components/texts/Typography';
import { Icons } from '../../../assets';
import { editProfile1, editProfile2 } from '../../../assets/data/editProfile';
import EditDetail1 from './EditDetail1';

// create a component
const EditProfile = ({ onClose }) => {
    const [editDetail, setEditDetail] = useState({ open: false, profile: null });

    return (
        <View style={styles.container}>
            <Header1
                title={'Edit Profile'}
                iconLeft={'Close'}
                iconRight={'Check'}
                onIconLeftPress={() => onClose()}
                onIconRightPress={() => {}}
            />

            <ScrollView contentContainerStyle={{ padding: 15 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/236x/21/ed/60/21ed60279f99c84c1e302d86c87220e6.jpg' }}
                        style={{ width: 82, aspectRatio: 1, borderRadius: 45, backgroundColor: COLORS.gray.medium }}
                    />
                    <IconButton icon={'Edit'} label={'Edit Profile'} backgroundColor={COLORS.white} color={COLORS.red} />
                </View>

                <View>
                    <Heading1 style={{ marginVertical: 15 }}>My Vitals</Heading1>

                    <Divider />

                    {editProfile1.map(item => (
                        <View key={item?.title}>
                            <ProfileBtn
                                onPress={() => setEditDetail({ open: true, profile: item })}
                                title={item?.title}
                                answer={item.answer}
                                status={item?.status}
                            />
                            <Divider />
                        </View>
                    ))}

                    <Heading1 style={{ marginVertical: 15 }}>My Virtues</Heading1>

                    <Divider />

                    {editProfile2.map(item => (
                        <View key={item?.title}>
                            <ProfileBtn
                                onPress={() => setEditDetail({ open: true, profile: item })}
                                title={item?.title}
                                answer={item.answer}
                                status={item?.status}
                            />
                            <Divider />
                        </View>
                    ))}
                </View>
            </ScrollView>

            <Modal animationType="slide" visible={editDetail?.open}>
                <SafeAreaView style={{ flex: 1 }}>
                    <EditDetail1 onClose={() => setEditDetail({ open: false, profile: null })} profile={editDetail?.profile} />
                </SafeAreaView>
            </Modal>
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
export default EditProfile;

const ProfileBtn = ({ title, answer, status, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ paddingVertical: 15 }}>
            <Typography weight={'regular'} color={COLORS.black}>
                {title}
            </Typography>

            <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography weight={'medium'}>{answer}</Typography>

                <View style={{ flexDirection: 'row' }}>
                    <Typography weight={'medium'} color={COLORS.black}>
                        {status}
                    </Typography>

                    <Icons.ArrowRight height={18} width={18} stroke={COLORS.black} style={{ marginHorizontal: 15 }} />
                </View>
            </View>
        </TouchableOpacity>
    );
};
