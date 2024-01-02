//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors';
import IconButton from '../../../components/buttons/IconButton';
import globalStyles from '../../../theme/globalStyles';
import Heading2 from '../../../components/texts/Heading2';
import EditName from './EditName';
import EditUserName from './EditUserName';
import EditAge from './EditAge';
import EditHeight from './EditHeight';
import EditGender from './EditGender';
import EditPronouns from './EditPronouns';
import EditSexuality from './EditSexuality';
import EditEthnicity from './EditEthnicity';
import EditChildren from './EditChildren';
import EditWork from './EditWork';
import EditJobTitle from './EditJobTitle';
import EditSchool from './EditSchool';
import EditEducationLevel from './EditEducationLevel';
import EditReligiousBelief from './EditReligiousBelief';
import EditHomeTown from './EditHomeTown';
import EditPolitics from './EditPolitics';
import EditLangSpoken from './EditLangSpoken';
import EditDatingIntentions from './EditDatingIntentions';
import EditPets from './EditPets';
import EditZodiacSign from './EditZodiacSign';

// create a component
const EditDetail1 = ({ onClose, profile }) => {
    return (
        <View style={styles.container}>
            <View style={globalStyles.headerContainer}>
                <IconButton icon={'ArrowLeft'} onPress={onClose} />
                <Heading2>{profile.title}</Heading2>
                <IconButton icon={'Check'} backgroundColor={COLORS.peachYellow} />
            </View>

            {profile?.title == 'Name' ? (
                <EditName />
            ) : profile?.title == 'Username' ? (
                <EditUserName />
            ) : profile?.title == 'Age' ? (
                <EditAge />
            ) : profile?.title == 'Height' ? (
                <EditHeight />
            ) : profile?.title == 'Gender' ? (
                <EditGender />
            ) : profile?.title == 'Pronouns' ? (
                <EditPronouns />
            ) : profile?.title == 'Sexulaity' ? (
                <EditSexuality />
            ) : profile?.title == 'Ethnicity' ? (
                <EditEthnicity />
            ) : profile?.title == 'Work' ? (
                <EditWork />
            ) : profile?.title == 'Children' ? (
                <EditChildren />
            ) : profile?.title == 'Job Title' ? (
                <EditJobTitle />
            ) : profile?.title == 'School' ? (
                <EditSchool />
            ) : profile?.title == 'Education Level' ? (
                <EditEducationLevel />
            ) : profile?.title == 'Religious Beliefs' ? (
                <EditReligiousBelief />
            ) : profile?.title == 'Hometown' ? (
                <EditHomeTown />
            ) : profile?.title == 'Politics' ? (
                <EditPolitics />
            ) : profile?.title == 'Languages Spoken' ? (
                <EditLangSpoken />
            ) : profile?.title == 'Dating Intentions' ? (
                <EditDatingIntentions />
            ) : profile?.title == 'Pets' ? (
                <EditPets />
            ) : (
                <EditChildren />
            )}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
});

//make this component available to the app
export default EditDetail1;
