//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../theme/colors';
import IconButton from '../../components/buttons/IconButton';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
// create a component
const Photos = ({ data }) => {
    const navigation = useNavigation();

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

                navigation.navigate('AddPhoto', { image: source });
            }
        });
    };

    return (
        <View style={styles.container}>
            <IconButton
                onPress={openGallery}
                style={{ margin: 15 }}
                icon="Add"
                label="Add Photo"
                backgroundColor={COLORS.tyrianPurple}
                color={COLORS.white}
            />

            <View style={styles.photosCon}>
                {data?.map(item => (
                    <View key={item} style={styles.imageBox}>
                        <Image source={{ uri: item }} style={styles.image} />
                    </View>
                ))}
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
    photosCon: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2,
    },
    imageBox: {
        width: width < height ? '50%' : '25%',
        aspectRatio: 1,
        padding: 2,
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.gray.medium,
        borderRadius: 4,
    },
});

//make this component available to the app
export default Photos;
