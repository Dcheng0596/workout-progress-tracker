import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import WorkoutItem from './WorkoutItem';
import { useFocusEffect } from '@react-navigation/core';
import * as SecureStore from 'expo-secure-store';


const WorkoutList = ({ navigation }) => {
  const [workouts, setWorkouts] = useState([])

  // Fetch workouts from AsyncStorage when screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      try {
        SecureStore.getItemAsync('workouts').then((workouts) => {
          //console.log(JSON.parse(data))
          setWorkouts([...JSON.parse(workouts)])
        })
      }
      catch(err) {
        console.log("Getting Workouts Failed");
      }
    }, [])
  );

  useEffect(() => {
    try {
      SecureStore.setItemAsync('workouts', JSON.stringify(workouts))
    } catch (error) {
      console.log("Error Deleting Workout")
    }
  }, [workouts])

    const removeWorkoutHandler = (workoutKey) => {
      let state = [...workouts];
      let sectionIndex = state.findIndex(element => element.key == workoutKey)
      state.splice(sectionIndex, 1);

      setWorkouts(state);
    }

    return (
      <FlatList
        keyboardDismissMode='on-drag'
        data={workouts}
        keyExtractor={data => data.key}
        renderItem={ (data) => (
            <WorkoutItem 
              navigation={navigation}
              workout={data.item}     
              onPress={() => removeWorkoutHandler(data.item.key)}
            />
        )}
      />
    );
  };


  export default WorkoutList;