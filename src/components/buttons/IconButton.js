import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import globalStyles from '../../theme/globalStyles';
import { Icons } from '../../assets';
import { COLORS } from '../../theme/colors';
import Typography from '../texts/Typography';

const IconButton = ({
    backgroundColor = COLORS.gray.light,
    onPress = () => {},
    icon,
    color = '#000',
    style,
    label = null,
    disabled = false,
}) => {
    const Icon = Icons[icon];

    const customStyle = {
        backgroundColor,
        ...(label != null && {
            width: 'auto',
            flexDirection: 'row',
            paddingHorizontal: 15,
            flexWrap: 'no-wrap',
            gap: 8,
        }),
        ...style,
    };

    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={[globalStyles.box40Center, customStyle]}>
            <Icon width={24} height={24} stroke={color} />

            {label != null && (
                <Typography color={color} weight={'medium'}>
                    {label}
                </Typography>
            )}
        </TouchableOpacity>
    );
};

export default IconButton;
