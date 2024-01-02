import React, { useState } from 'react';
import { View, Image, StyleSheet, FlatList, Pressable } from 'react-native';

import Animated, { useSharedValue, withTiming, useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';

import FeatherIcon from 'react-native-vector-icons/Feather';
import Typography from '../texts/Typography';
import { COLORS } from '../../theme/colors';
import { Icons } from '../../assets';

const MutualFriendCard = ({ list, listItemStyle }) => {
    const [openAccordian, setOpenAccordian] = useState(false);
    const listHeight = useSharedValue(openAccordian ? 260 : 164);

    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

    // ======================  Animating Height

    const rAccordianStyle = useAnimatedStyle(() => {
        return {
            height: listHeight.value,
        };
    });

    const btnVal = useAnimatedStyle(() => {
        const val = interpolate(listHeight.value, [164, 260], [0, 1], Extrapolate.CLAMP);

        return { opacity: val };
    });

    const btnVal2 = useAnimatedStyle(() => {
        const val = interpolate(listHeight.value, [164, 260], [1, 0], Extrapolate.CLAMP);

        return { opacity: val };
    });

    // ======================  While Pressing Accordian

    const onPressAccordian = () => {
        setOpenAccordian(prev => !prev);
        listHeight.value = withTiming(openAccordian ? 164 : 260, {
            duration: 300,
        });
    };

    return (
        <View style={{ padding: 10, backgroundColor: '#FFFFFFBC', borderRadius: 50 }}>
            <Animated.View style={[{ marginBottom: -20 }, rAccordianStyle]}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    data={list}
                    style={{flexWrap: 'nowrap', gap: 8}}
                    contentContainerStyle={{ flexWrap: 'nowrap', gap: 8 }}
                    renderItem={({ item }) => (
                        <View style={[listItemStyle, styles.listItem]}>
                            <Image source={{ uri: item }} height={40} width={40} />
                        </View>
                    )}
                    ListFooterComponent={<View style={{ height: 20, width: 40 }} />}
                />
            </Animated.View>

            <AnimatedPressable onPress={onPressAccordian} style={styles.mutualFriendBox}>
                <Animated.View style={[{ position: 'absolute' }, btnVal]}>
                    <Icons.ArrowDown width={24} height={24} stroke={COLORS.white} />
                </Animated.View>
                <Animated.View style={[{ position: 'absolute' }, btnVal2]}>
                    <Typography weight={'regular'} color={COLORS.white}>
                        26+
                    </Typography>
                </Animated.View>
            </AnimatedPressable>
        </View>
    );
};

const styles = StyleSheet.create({
    accordianContainer: {
        backgroundColor: '#fff',
        padding: 13,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    accordianTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000',
        letterSpacing: 0.7,
    },
    accordianList: {
        overflow: 'hidden',
        backgroundColor: '#faf9f9',
    },
    listItem: {
        justifyContent: 'center',
        overflow: 'hidden',
    },
    listText: {
        fontSize: 14,
        color: '#000',
    },
    mutualFriendBox: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.tyrianPurple,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MutualFriendCard;
