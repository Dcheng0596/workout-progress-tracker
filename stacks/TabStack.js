import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalanderStack from './CalanderStack';
import HomeStack from './HomeStack';
import OptionsStack from './OptionsStack';
import WorkoutsStack from './WorkoutsStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createBottomTabNavigator();

const TabStack = () => {
  return (
      <Stack.Navigator 
        initialRouteName="Home"
      >
        <Stack.Screen 
          name="Home" 
          component={HomeStack}
          options={{
            title: 'Home'
          }} 
        />
        <Stack.Screen 
          name="Workouts" 
          component={WorkoutsStack}
          options={{
            title: 'Workouts'
          }} 
        />
        <Stack.Screen 
          name="Calander" 
          component={CalanderStack}
          options={{
            title: 'Calander'
          }} 
        />
          <Stack.Screen 
            name="Options" 
            component={OptionsStack}
            options={{
                title: 'Options'
            }} 
        />
      </Stack.Navigator>
  );
}

export default TabStack;