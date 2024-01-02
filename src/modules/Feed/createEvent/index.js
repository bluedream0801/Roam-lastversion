import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { COLORS } from '../../../theme/colors';
import Heading2 from '../../../components/texts/Heading2';
import IconButton from '../../../components/buttons/IconButton';
import globalStyles from '../../../theme/globalStyles';
import { useNavigation } from '@react-navigation/native';
import Calender from '../../../components/Calender';
import SimpleInput from '../../../components/inputs/SimpleInput';
import DropDown from '../../../components/DropDown';
import SelectHeight from '../../../components/switches/SelectTime';
import SimpleButton from '../../../components/buttons/SimpleButton';
import { Icons } from '../../../assets';

const CreateEvent = () => {
    const navigation = useNavigation();

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={globalStyles.headerContainer}>
                <Heading2>Create new event flow</Heading2>

                <IconButton icon={'Close'} onPress={() => navigation.goBack()} />
            </View>

            <ScrollView contentContainerStyle={{ padding: 15 }}>
                <SimpleInput label={'Event Name'} placeholder={'Enter event name'} />

                <DropDown label={'Event Type'} data={['Label 1', 'Label 2', 'Label 3', 'Label 4']} style={{ marginTop: 15 }} />

                <Calender style={{ marginTop: 15 }} />

                <SelectHeight style={{ marginTop: 15 }} />

                <View style={{ flexDirection: 'row', marginVertical: 15, flexWrap: 'nowrap', gap: 7 }}>
                    <IconButton icon={'MarkerPin'} label={'Select location'} style={{ flex: 1 }} />
                    <IconButton icon={'Check'} />
                </View>

                <SimpleButton onPress={() => navigation.navigate('WhoseInvited')} label={'Next'} />
            </ScrollView>
        </View>
    );
};

export default CreateEvent;
