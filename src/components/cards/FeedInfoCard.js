import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Title1 from '../texts/Title1';
import Typography from '../texts/Typography';
import { COLORS } from '../../theme/colors';

const FeedInfoCard = ({ image, title, answer }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />

            <View style={styles.innerContainer}>
                <Title1>{title}</Title1>
                <Typography weight={'medium'} style={{ marginTop: 8, lineHeight: 20 }}>
                    {answer}
                </Typography>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 173,
        width: 120,
        borderRadius: 15,
        backgroundColor: COLORS.gray.medium,
    },
    innerContainer: {
        paddingHorizontal: 15,
        marginLeft: 8,
        flex: 1,
    },
});

export default FeedInfoCard;
