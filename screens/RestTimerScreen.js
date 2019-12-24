import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import { useFocusEffect } from '@react-navigation/core';
import RNPickerSelect from 'react-native-picker-select';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const RestTimerScreen = ({ navigation, route }) => {
  const [workout, setWorkout] = useState(route.params.workout);
  const [timer, setTimer] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  let exerciseIndex = route.params.exerciseIndex;

  useFocusEffect(
    React.useCallback(() => {
        exerciseIndex = route.params.exerciseIndex;
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

  const addSetHandler = () => {
    let state = {...workout};
    state.sections[exerciseIndex.section].exercises[exerciseIndex.exercise].sets.push({
      reps: reps,
      weight: weight,
      exerciseTime: route.params.exerciseTime,
      restTime: timer
    })
    setWorkout(state);
  }

  const nextExercise = () => {
    
    const sectionLen = workout.sections.length;
    const exerciseLen = workout.sections[exerciseIndex.section].exercises.length;
  
  
    if(exerciseIndex.exercise < exerciseLen - 1) {
      exerciseIndex.exercise = exerciseIndex.exercise + 1;
    } else if(exerciseIndex.section < sectionLen - 1) {
      exerciseIndex.section = exerciseIndex.section + 1;
      exerciseIndex.exercise = 0;
    } else {
      //Finished workout
    }
  }

  const repInputField = () => {
    const isIsometric = workout.sections[exerciseIndex.section].exercises[exerciseIndex.exercise].isIsometric;
    if(!isIsometric) {
      const numbers = [...Array(99).keys()].map(number => (
        { label: (number + 1).toString(), value: number + 1}
       ));
      return (
        <RNPickerSelect
          onValueChange={(value) => setReps(value)}
          items={numbers}
          placeholder={{}}
        />
      )
    }
  }

  const weightInputField = () => {
    const isWeighted = workout.sections[exerciseIndex.section].exercises[exerciseIndex.exercise].isWeighted;
    if(isWeighted) {
      const numbers = [...Array(99).keys()].map(number => (
        { label: ((number + 1)*5).toString(), value: (number + 1)*5}
       ));
      return (
        <RNPickerSelect
          onValueChange={(value) => setWeight(value)}
          items={numbers}
          placeholder={{}}
        />
      )
    }
  }

    return (
      <View style={styles.screen}>
        {displayTimer()}
        <View>
          <Text>Weight</Text>
          {weightInputField()}
        </View>
        <View>
          <Text>Reps</Text>
          {repInputField()}
        </View>
        <CustomButton style={styles} title="Next Set" onPress={() => {
            addSetHandler();
            console.log(workout);
            navigation.navigate("Exercise Timer", {workout: workout, exerciseIndex: exerciseIndex});
          }} 
        />
        <CustomButton style={styles} title="Next Exercise" onPress={() => {
            addSetHandler();
            console.log(workout);
            nextExercise();
            navigation.navigate("Exercise Timer", {workout: workout, exerciseIndex: exerciseIndex});
          }} 
        />
      </View> 
    );
  };

  const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center'
    },
    repInput: {
      width: 150
    }
  });

  export default RestTimerScreen;