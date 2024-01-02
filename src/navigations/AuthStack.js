import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AllowNotification, Congrats, DateOfBirth, Done, Gender, Name, NotAvailable, OffWaitStart, PhoneNumber, Photos, Privacy, Prompt, PromptAnswer, Splash, Verification, ZipCode } from '../modules/Auth';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Splash" component={Splash} />

            {/* ---------- Join WaitList */}
            <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
            <Stack.Screen name="Name" component={Name} />
            <Stack.Screen name="Verification" component={Verification} />
            <Stack.Screen name="Gender" component={Gender} />
            <Stack.Screen name="DateOfBirth" component={DateOfBirth} />
            <Stack.Screen name="ZipCode" component={ZipCode} />
            <Stack.Screen name="Congrats" component={Congrats} />
            <Stack.Screen name="NotAvailable" component={NotAvailable} />

            {/* ---------- Off WaitList */}
            <Stack.Screen name="OffWaitStart" component={OffWaitStart} />
            <Stack.Screen name="Photos" component={Photos} />
            <Stack.Screen name="Prompt" component={Prompt} />
            <Stack.Screen name="PromptAnswer" component={PromptAnswer} />
            <Stack.Screen name="AllowNotification" component={AllowNotification} />
            <Stack.Screen name="Privacy" component={Privacy} />
            <Stack.Screen name="Done" component={Done} />
        </Stack.Navigator>
    );
};

export default AuthStack;
