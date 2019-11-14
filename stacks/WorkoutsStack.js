import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutsScreen from '../screens/WorkoutsScreen'

const Stack = createStackNavigator()

const WorkoutsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Workouts" 
            component={WorkoutsScreen}
            options={{
                title: 'Workouts'
            }} />
        </Stack.Navigator>
    )
}

export default WorkoutsStack;