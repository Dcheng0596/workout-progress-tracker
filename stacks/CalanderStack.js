import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CalanderScreen from '../screens/CalanderScreen'

const Stack = createStackNavigator()

const CalanderStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Calander" 
            component={CalanderScreen}
            options={{
                title: 'Calander'
            }} />
        </Stack.Navigator>
    )
}

export default CalanderStack;