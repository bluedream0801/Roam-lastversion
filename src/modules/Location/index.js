//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Modal, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { COLORS } from '../../theme/colors';
import LocationHeader from './LocationHeader';
import { plans } from '../../assets/data/homeFeed';
import IconButton from '../../components/buttons/IconButton';
import Chip from '../../components/chip/Chip';
import { Icons } from '../../assets';
import Typography from '../../components/texts/Typography';
import SimpleButton from '../../components/buttons/SimpleButton';
import IconChip from '../../components/chip/IconChip';

// create a component
const Location = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <View style={styles.container}>
            <LocationHeader />
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 37.789,
                    longitude: -122.4338,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}>
                <Marker
                    onPress={() => setShowModal(true)}
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                />
                <Marker
                    onPress={() => setShowModal(true)}
                    coordinate={{
                        latitude: 37.7899,
                        longitude: -122.436,
                    }}
                />
                <Marker
                    onPress={() => setShowModal(true)}
                    coordinate={{
                        latitude: 37.7899,
                        longitude: -122.432,
                    }}
                />
            </MapView>

            <Modal visible={showModal} animationType="slide" transparent>
                <View
                    style={{
                        backgroundColor: COLORS.blackTransparent,
                        flex: 1,
                        justifyContent: 'flex-end',
                    }}>
                    <View style={{ backgroundColor: COLORS.white, borderTopLeftRadius: 25, overflow: 'hidden', borderTopRightRadius: 25 }}>
                        <Image source={{ uri: plans[2]?.postImage }} style={{ width: '100%', height: 200 }} />

                        <View
                            style={{
                                height: 5,
                                borderRadius: 5,
                                width: 50,
                                backgroundColor: COLORS.gray.medium,
                                position: 'absolute',
                                alignSelf: 'center',
                                top: 5,
                            }}
                        />

                        <IconButton icon={'Close'} onPress={() => setShowModal(false)} style={{ position: 'absolute', top: 7, right: 7 }} />

                        <View style={{ padding: 15, flexWrap: 'nowrap', gap: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                                    <Chip backgroundColor="#FFC7C5" label={'Outdoor Seating'} />
                                    <Chip label={'Beer'} />
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icons.Star width={24} height={24} fill={'#000'} />
                                    <Typography color={COLORS.black} weight={'semiBold'} size={14}>
                                        3.5
                                    </Typography>
                                    <Typography weight={'medium'} size={14}>
                                        {'  (57)'}
                                    </Typography>
                                </View>
                            </View>

                            <Typography size={16} weight={'semiBold'} color={COLORS.black}>
                                Bowling
                            </Typography>
                            <Typography size={12} weight={'medium'}>
                                Bowlero Westlake
                            </Typography>

                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                                <IconChip
                                    style={{ backgroundColor: '#F4F4F4' }}
                                    icon={'MarkerPin'}
                                    color={COLORS.black}
                                    label={'Every Tuesday'}
                                />
                                <IconChip
                                    style={{ backgroundColor: '#F4F4F4' }}
                                    icon={'Calendar'}
                                    color={COLORS.black}
                                    label={'8:00 pm - 11:00 pm'}
                                />
                            </View>
                            <SimpleButton style={{flex: 0}} label={'More'} backgroundColor="#582FFF"  />
                        </View>
                    </View>
                </View>
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
    map: {
        flex: 1,
    },
});

//make this component available to the app
export default Location;
