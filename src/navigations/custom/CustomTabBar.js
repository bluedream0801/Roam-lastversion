import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../theme/colors';
const { Icons } = require('../../assets');

const CustomTabBar = props => {
    let { navigation, state } = props;

    return (
        <View style={styles.tabBar}>
            <View style={styles.leftTabs}>
                <TabButton
                    icon={'HomeLine'}
                    focused={state?.index == 0}
                    onPress={() => navigation.navigate('Home')}
                />

                <TabButton
                    icon={'Heart'}
                    focused={state?.index == 1}
                    onPress={() => navigation.navigate('Likes')}
                />

                <TabButton
                    icon={'Users'}
                    focused={state?.index == 2}
                    onPress={() => navigation.navigate('Feeds')}
                />

                <TabButton
                    icon={'UserCircle'}
                    focused={state?.index == 3}
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>

            <View style={styles.spacer} />

            <View style={styles.rightTab}>
                <TabButton
                    icon={'Globe'}
                    focused={state?.index == 4}
                    onPress={() => navigation.navigate('Location')}
                />
            </View>
        </View>
    );
};

const TabButton = ({ onPress, focused, icon }) => {
    const Icon = Icons[icon];

    return (
        <TouchableOpacity
            style={[
                styles.button,
                focused ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={onPress}>
            <Icon
                height={24}
                width={24}
                stroke={focused ? '#fff' : COLORS.tyrianPurple}
            />
        </TouchableOpacity>
    );
};

export default CustomTabBar;

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        right: 20,
        left: 20,
        alignItems: 'center',
    },
    leftTabs: {
        flexDirection: 'row',
        backgroundColor: COLORS.papayaWhip,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        flex: 1,
    },
    rightTab: {
        backgroundColor: COLORS.papayaWhip,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spacer: {
        width: 30,
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeButton: {
        backgroundColor: COLORS.tyrianPurple,
    },
    activeIcon: {
        color: '#fff',
    },
});
