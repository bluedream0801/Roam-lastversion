//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { COLORS } from '../../theme/colors';
import Heading2 from '../../components/texts/Heading2';
import globalStyles from '../../theme/globalStyles';
import Typography from '../../components/texts/Typography';
import IconButton from '../../components/buttons/IconButton';
import SimpleButton from '../../components/buttons/SimpleButton';
import SelectLocation from './SelectLocation';
import { Icons } from '../../assets';
import SelectFriends from './SelectFriends';

// create a component
const AddPhoto = ({ route, navigation }) => {
    const { image } = route?.params;

    const [isShowPlace, setIsShowPlace] = useState(false);
    const [isShowFriends, setIsShowFriends] = useState(false);

    const [selectedPlace, setSelectedPlace] = useState(null);

    return (
        <View style={styles.container}>
            <View style={[globalStyles.headerContainer, { justifyContent: 'center' }]}>
                <Heading2>Add Photo</Heading2>
            </View>

            <ScrollView contentContainerStyle={{ padding: 15 }}>
                <Image source={image} style={{ width: '100%', aspectRatio: 1, borderRadius: 10, backgroundColor: COLORS.gray.medium }} />

                <View style={styles.captionCont}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/236x/13/b2/4d/13b24dff04a3cfeadde81e46c77335b1.jpg' }}
                        style={{ width: 48, height: 48, borderRadius: 24 }}
                    />

                    <TextInput placeholder="Add a caption" placeholderTextColor={COLORS.gray.dark} style={styles.input} />
                </View>

                <TouchableOpacity onPress={() => setIsShowPlace(true)} style={styles.btn}>
                    {selectedPlace ? (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icons.MarkerPin width={24} height={24} stroke={COLORS.red} />

                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Typography weight={'medium'} size={16} color={COLORS.red}>
                                    {selectedPlace?.title}
                                </Typography>
                                <Typography weight={'regular'} color={COLORS.red}>
                                    {selectedPlace?.distance}
                                </Typography>
                            </View>

                            <IconButton icon={'Close'} onPress={() => setSelectedPlace(null)} />
                        </View>
                    ) : (
                        <Typography weight={'medium'} color={COLORS.black}>
                            Add a place
                        </Typography>
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsShowFriends(true)} style={[styles.btn, { marginTop: 7 }]}>
                    <Typography weight={'medium'} color={COLORS.black}>
                        Add people
                    </Typography>
                </TouchableOpacity>
            </ScrollView>

            <View style={[globalStyles.justifyContainer, { margin: 15, paddingVertical: 0 }]}>
                <IconButton icon={'ArrowLeft'} onPress={() => navigation.goBack()} />

                <SimpleButton onPress={() => navigation.goBack()} label={'Publish'} style={{ flex: 0, paddingHorizontal: 30 }} />
            </View>

            <Modal visible={isShowPlace} animationType="slide">
                <SafeAreaView style={{ flex: 1 }}>
                    <SelectLocation
                        onClose={() => setIsShowPlace(false)}
                        selectedPlace={selectedPlace}
                        setSelectedPlace={setSelectedPlace}
                    />
                </SafeAreaView>
            </Modal>

            <Modal visible={isShowFriends} animationType="slide">
                <SafeAreaView style={{ flex: 1 }}>
                    <SelectFriends onClose={() => setIsShowFriends(false)} image={image} />
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
    captionCont: {
        flexDirection: 'row',
        marginVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray.medium,
        paddingBottom: 5,
    },
    input: {
        fontFamily: 'ClashDisplay-Medium',
        flex: 1,
        padding: 10,
        paddingHorizontal: 20,
    },
    btn: {
        backgroundColor: COLORS.gray.light,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
});

//make this component available to the app
export default AddPhoto;
