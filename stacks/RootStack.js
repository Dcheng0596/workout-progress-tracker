import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabStack from './TabStack';
import CreateWorkoutModal from '../modals/CreateWorkoutModal';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
      <Stack.Navigator 
        initialRouteName="TabStack"
        screenOptions={{
            headerBackTitle: "Back",
        }}
      >
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
          initialParams={{ isDone: false }}
          options={({ navigation }) => ({
              title: 'Create Workout',
              headerRight: () => (
                <Button title="Done" onPress={() => 
                  navigation.setParams({
                    isDone: true
                  })
                  } 
                />
              )
          })}
        />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
 
});

export default RootStack;
