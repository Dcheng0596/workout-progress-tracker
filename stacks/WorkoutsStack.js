import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutsScreen from '../screens/WorkoutsScreen';

const Stack = createStackNavigator()

const WorkoutsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Workouts" 
                component={WorkoutsScreen}
                options={({ navigation }) => ({
                    title: 'Create Workout',
                    headerRight: () => (
                    <Button title="Add"  onPress={() => {
                        navigation.navigate("CreateWorkoutModal")
                    }
                } 
                />
              )
          })} 
        />
        </Stack.Navigator>
    )
}

export default WorkoutsStack;