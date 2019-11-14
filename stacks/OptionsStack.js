import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OptionsScreen from '../screens/OptionsScreen'

const Stack = createStackNavigator()

const OptionsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Options" 
            component={OptionsScreen}
            options={{
                title: 'Home'
            }} />
        </Stack.Navigator>
    )
}

export default OptionsStack;