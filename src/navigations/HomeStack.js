import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavgator';
import ProfileDetail from '../modules/ProfileDetail';
import Friends from '../modules/Friends';
import Chat from '../modules/Chat';
import MessageScreen from '../modules/Chat/messageScreen';
import MainList from '../modules/Location/mainList';
import MoreList from '../modules/Location/moreList';
import ItemDetail from '../modules/Location/moreList/ItemDetail';
import EditDetail1 from '../modules/MyProfile/editProfile/EditDetail1';
import FillOther from '../modules/MyProfile/editProfile/FillOther';
import CreateEvent from '../modules/Feed/createEvent';
import WhoseInvited from '../modules/Feed/createEvent/WhoseInvited';
import UploadImage from '../modules/Feed/createEvent/UploadImage';
import EventFinal from '../modules/Feed/createEvent/EventFinal';
import AddPhoto from '../modules/ProfileDetail/AddPhoto';
import AddPrompt from '../modules/ProfileDetail/AddPrompt';
import AddPrompt2 from '../modules/ProfileDetail/AddPrompt2';
import FinalPrompt from '../modules/ProfileDetail/FinalPrompt';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
            <Stack.Screen name="Friends" component={Friends} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name='MessageScreen' component={MessageScreen} />
            <Stack.Screen name='MainList' component={MainList} />
            <Stack.Screen name='MoreList' component={MoreList} />
            <Stack.Screen name='ItemDetail' component={ItemDetail} />

            <Stack.Screen name='EditDetail1' component={EditDetail1} />
            <Stack.Screen name='FillOther' component={FillOther} />

            <Stack.Screen name='CreateEvent' component={CreateEvent} />
            <Stack.Screen name='WhoseInvited' component={WhoseInvited} />
            <Stack.Screen name='UploadImage' component={UploadImage} />
            <Stack.Screen name='EventFinal' component={EventFinal} />

            <Stack.Screen name='AddPhoto' component={AddPhoto} />
            <Stack.Screen name='AddPrompt' component={AddPrompt} />
            <Stack.Screen name='AddPrompt2' component={AddPrompt2} />
            <Stack.Screen name='FinalPrompt' component={FinalPrompt} />
        </Stack.Navigator>
    );
};

export default HomeStack;
