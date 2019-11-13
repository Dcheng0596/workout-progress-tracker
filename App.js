import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeStack from './stacks/HomeStack'
import WorkoutsScreen from './screens/WorkoutsScreen'
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
        <MainStack.Screen name="Workouts" component={WorkoutsScreen} />
      </MainStack.Navigator>
    </NavigationNativeContainer>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
