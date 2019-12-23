import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import { useFocusEffect } from '@react-navigation/core';
import CustomButton from '../components/CustomButton'

const ExerciseTimerScreen = ({ navigation, route }) => {
const [workout, setWorkout] = useState(route.params.workout);
const [exerciseIndex, setExerciseIndex] = useState(route.params.exerciseIndex);
const [timer, setTimer] = useState(0);

useFocusEffect(
  React.useCallback(() => {
    setWorkout(route.params.workout)
    setExerciseIndex(route.params.exerciseIndex)
    const interval = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000);
    
    return () => {
      clearInterval(interval);
    }
  }, [])
);

const displayTimer = () => {
  let mins = Math.floor(timer / 60).toString();
  let secs = (timer % 60).toString();

  mins = mins.length == 1 ? '0' + mins : mins;
  secs = secs.length == 1 ? '0' + secs : secs;
  
  return (
    <View>
      <Text>{mins + ':' + secs}</Text>
    </View>
  )
}

    return (
      <View style={styles.screen}>
        <View>
          <Text>{workout.sections[exerciseIndex.section].exercises[exerciseIndex.exercise].name}</Text>
        </View>
        <View>
          <CustomButton style={styles} title="Done" onPress={() => {
              setTimer(0);
              navigation.navigate("Rest Timer", {workout: workout, exerciseTime: timer, exerciseIndex: exerciseIndex});
            }} 
          />
        </View>
        {displayTimer()}
      </View> 
    );
  };

  const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center'
    }
  });

  export default ExerciseTimerScreen;
  