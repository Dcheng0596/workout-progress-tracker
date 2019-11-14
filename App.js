import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeStack from './stacks/HomeStack'
import WorkoutsStack from './stacks/WorkoutsStack'
import CalanderStack from './stacks/CalanderStack'
import OptionsStack from './stacks/OptionsStack'
import { NavigationNativeContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MainStack = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationNativeContainer>
      <MainStack.Navigator initialRouteName="HomeStack">
        <MainStack.Screen 
          name="HomeStack" 
          component={HomeStack}
          options={{
            title: 'Home'
          }} />
        <MainStack.Screen 
          name="WorkoutsStack" 
          component={WorkoutsStack}
          options={{
            title: 'Workouts'
          }} />
        <MainStack.Screen 
          name="CalanderStack" 
          component={CalanderStack}
          options={{
            title: 'Calander'
          }} />
        <MainStack.Screen 
          name="OptionsStack" 
          component={OptionsStack}
          options={{
            title: 'Options'
          }} />
      </MainStack.Navigator>
    </NavigationNativeContainer>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
