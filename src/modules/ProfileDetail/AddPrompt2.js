//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, SafeAreaView, Image } from 'react-native';
import { COLORS } from '../../theme/colors';
import Heading2 from '../../components/texts/Heading2';
import globalStyles from '../../theme/globalStyles';
import { Icons } from '../../assets';
import Typography from '../../components/texts/Typography';
import { launchImageLibrary } from 'react-native-image-picker';
import UnderLineInput from '../../components/inputs/UnderLineInput';
import IconButton from '../../components/buttons/IconButton';
import SimpleButton from '../../components/buttons/SimpleButton';

// create a component
const AddPrompt2 = ({ route, navigation }) => {
    const { prom } = route?.params;

    const [image, setImage] = useState(null);

    const openGallery = async () => {
        const options = {
            storageOptions: {
                path: 'images',
                mediaType: 'photo',
            },
            includeBase64: true,
            quality: 1,
            maxWidth: 500,
            maxHeight: 500,
        };

        await launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // You can also display the image using data:
                const source = {
                    uri: 'data:image/jpeg;base64,' + response?.assets[0]?.base64,
                };

                setImage(source);
            }
        });
    };

    return (
        <View style={styles.container}>
            <View style={[globalStyles.headerContainer, { justifyContent: 'center' }]}>
                <Heading2>Prompts</Heading2>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', padding: 15 }}>
                <View style={styles.imageContainer}>
                    {image ? (
                        <Image source={image} style={{ width: '100%', height: '100%' }} />
                    ) : (
                        <Icons.Camera width={35} height={35} stroke={'#d5d5d5'} />
                    )}
                </View>

                <TouchableOpacity onPress={() => (image ? setImage(null) : openGallery())} style={{ padding: 10, alignSelf: 'center' }}>
                    <Typography weight={'medium'} size={12} color={COLORS.darkGreen}>
                        {image ? 'Remove Picture' : 'Add Picture'}
                    </Typography>
                </TouchableOpacity>

                <Heading2 style={{marginVertical: 15}}>{prom}</Heading2>
                <UnderLineInput placeholder={'Pizza with pineapples'}/>
            </View>

            <View style={[globalStyles.justifyContainer, { margin: 15, paddingVertical: 0 }]}>
                <IconButton icon={'ArrowLeft'} onPress={() => navigation.goBack()} />

                <SimpleButton onPress={() => navigation.navigate('FinalPrompt')} label={'Add Prompt'} style={{ flex: 0, paddingHorizontal: 30 }} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 170,
        backgroundColor: COLORS.gray.light,
        borderRadius: 24,
        alignSelf: 'center',
        overflow: 'hidden',
    },
});

//make this component available to the app
export default AddPrompt2;
