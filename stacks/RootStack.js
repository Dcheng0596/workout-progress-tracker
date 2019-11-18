import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabStack from './TabStack';
import CreateWorkoutModal from '../modals/CreateWorkoutModal';

const Stack = createStackNavigator();

const RootStack = ( {navigation} ) => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="TabStack" 
          component={TabStack}
          options={{
              headerShown: false
          }}
        />
        <Stack.Screen 
          name="CreateWorkoutModal" 
          component={CreateWorkoutModal}
          options={{
              title: 'Create Workout',
              headerBackTitle: 'Back'
          }}
        />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
 
});

export default RootStack;
