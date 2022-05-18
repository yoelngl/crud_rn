import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Form from '../screens/Form'

const Routes = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
            <Stack.Screen name="Form" component={Form} />
        </Stack.Navigator>
    );
}

export default Routes;