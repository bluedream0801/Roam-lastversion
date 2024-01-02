//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import IconButton from './buttons/IconButton';
import { COLORS } from '../theme/colors';

// create a component
const Calender = ({ style }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <View style={{ borderRadius: 24, overflow: 'hidden', backgroundColor: COLORS.gray.light, ...style }}>
            <Calendar
                hideExtraDays={true}
                monthFormat={'MMM yyyy'}
                markingType="custom"
                renderArrow={r => {
                    if (r == 'left') {
                        return <IconButton disabled={true} icon="ArrowLeft" backgroundColor={COLORS.mistyRose} />;
                    }
                    if (r == 'right') {
                        return <IconButton disabled={true} icon="ArrowNRight" backgroundColor={COLORS.mistyRose} />;
                    }
                }}
                theme={{
                    textMonthFontFamily: 'ClashDisplay-Medium',
                    textMonthFontSize: 20,
                    textDayHeaderFontFamily: 'ClashDisplay-Medium',
                    textDayFontFamily: 'ClashDisplay-Medium',
                    textDayFontSize: 14,
                    calendarBackground: COLORS.gray.light,
                    dayTextColor: COLORS.tyrianPurple,
                    textSectionTitleColor: COLORS.black,
                    selectedDayBackgroundColor: COLORS.tyrianPurple,
                    selectedDayTextColor: COLORS.white,
                    textDayStyle: {
                        padding: 0,
                        marginTop: 8,
                    },
                }}
                onDayPress={day => {
                    setSelectedDate(day.dateString);
                }}
                markedDates={{
                    [selectedDate]: { selected: true, disableTouchEvent: true, selectedDotColor: COLORS.tyrianPurple },
                }}
                selected={new Date()}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
});

//make this component available to the app
export default Calender;
