import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton'

const StartWorkoutScreen = ({ navigation, route }) => {
    let isSelected = false;

    const selectedWorkout = () => {
        if(route.params == null)
            return "";
        isSelected = true;
        return route.params.workout;
    }

    return (
      <View style={styles.screen}>
        <CustomButton style={styles} title="Select Workout" onPress={() => navigation.navigate("Choose Workout")} />
        <View>
            <Text>{selectedWorkout().name}</Text>
        </View>
        <CustomButton style={styles} title="Start Workout" onPress={() => {
            if(isSelected)
                navigation.navigate("Exercise Timer", {workout: selectedWorkout(), exerciseIndex: {section: 0, exercise: 0}});
            else
                Alert.alert(
                    'No Workout Selected',
                    'Please select a workout',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')}
                    ]
                ) 
          }} 
        />
      </View> 
    );
  };

  const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center'
    }
  });

  export default StartWorkoutScreen;