import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { COLORS } from '../../theme/colors';
import Typography from '../texts/Typography';

const MultipleCircleImages = ({ images, more, total, style }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', ...style }}>
            {images?.slice(0, 3).map(i => (
                <Image key={i} source={{ uri: i }} style={styles.image} />
            ))}
            <ImageBackground source={{ uri: images[3] }} style={styles.image}>
                <View style={styles.imageTextBox}>
                    <Text style={{ color: COLORS.white, fontSize: 12 }}>+{more}</Text>
                </View>
            </ImageBackground>

            {total && (
                <Typography weight={'regular'} color={COLORS.black} style={{ marginLeft: 15 }}>
                    {total} <Typography weight={'regular'}>Mutual Connections</Typography>
                </Typography>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#fff',
        marginRight: -7,
        borderRadius: 12,
        backgroundColor: COLORS.gray.dark,
        overflow: 'hidden',
    },
    imageTextBox: {
        flex: 1,
        backgroundColor: COLORS.blackTransparent,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MultipleCircleImages;
