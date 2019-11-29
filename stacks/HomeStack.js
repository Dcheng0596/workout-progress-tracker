import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import ChooseWorkoutScreen from '../screens/SelectWorkoutScreen';
import StartWorkoutScreen from '../screens/StartWorkoutScreen';
import ExerciseTimerScreen from '../screens/ExeciseTimerScreen';
import RestTimerScreen from '../screens/RestTimerScreen';

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
             name="Home" 
            component={HomeScreen}
            options={{
                title: 'Home'
            }} />
            <Stack.Screen 
            name="Start Workout" 
            component={StartWorkoutScreen}
            options={{
                title: 'Start Workout'
            }} />
            <Stack.Screen 
            name="Choose Workout" 
            component={ChooseWorkoutScreen}
            options={{
                title: 'Choose Workout'
            }} />
            <Stack.Screen 
            name="Exercise Timer" 
            component={ExerciseTimerScreen}
            options={{
                title: 'Exercise Timer'
            }} />
            <Stack.Screen 
            name="Rest Timer" 
            component={RestTimerScreen}
            options={{
                title: 'Rest Timer'
            }} />
        </Stack.Navigator>
    )
}

export default HomeStack;