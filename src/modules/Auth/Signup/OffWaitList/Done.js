//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../../../theme/colors';
import { Images } from '../../../../assets/images';
import Heading2 from '../../../../components/texts/Heading2';
import Typography from '../../../../components/texts/Typography';
import SimpleButton from '../../../../components/buttons/SimpleButton';
import AuthGlobal from '../../../../utils/AuthGlobal';

// create a component
const Done = () => {
    const { setUser } = useContext(AuthGlobal);

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>
                <Image source={Images.CircleCheck} style={{ width: 109, height: 109 }} />

                <Heading2>All done</Heading2>

                <Typography weight={'regular'} size={16} style={{ textAlign: 'center', lineHeight: 25 }}>
                    Continue to the app, but don’t forget to customize your profile for more matches.
                </Typography>
            </View>

            <SimpleButton onPress={() => setUser({ isLoggedIn: true })} label={'Get Started'} style={{ flex: 0 }} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 15,
    },
    checkContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30, flexWrap: 'nowrap', gap: 20 },
    referral: {
        height: 48,
        backgroundColor: COLORS.gray.dark,
        borderRadius: 30,
        textAlign: 'center',
        padding: 17,
        opacity: 0.5,
        marginBottom: 7,
    },
});

//make this component available to the app
export default Done;
