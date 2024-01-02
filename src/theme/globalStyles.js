import { COLORS } from './colors';

const { StyleSheet } = require('react-native');

const globalStyles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    box40Center: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.gray.light,
        borderRadius: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray.medium,
    },
    checkboxCard: {
        marginHorizontal: 15,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: COLORS.gray.medium,
    },
    justifyContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default globalStyles;
