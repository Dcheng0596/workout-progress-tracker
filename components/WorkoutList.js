import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import WorkoutItem from './WorkoutItem';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useFocusEffect } from '@react-navigation/core';
import SwipeListGlobals from '../globals/SwipeListGlobals';
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
      <SwipeListView 
            data={workouts}
            renderItem={ (data, rowMap) => (
                <TouchableHighlight  
                  style={styles.rowFront} 
                  underlayColor={'grey'} 
                  onPress={() => navigation.navigate('ViewWorkoutModal', {
                    workout: data.item
                  })}
                >
                  <WorkoutItem title={data.item.name} />
                </TouchableHighlight>
            )}
            renderHiddenItem={ (data, rowMap) => (
              <TouchableOpacity 
                style={styles.rowBack} 
                onPress={() => removeWorkoutHandler(data.item.key)} 
              >
                <WorkoutItem title='Delete' />               
              </TouchableOpacity>
            )}
            swipeToOpenPercent={SwipeListGlobals.swipeToOpenPercent}
            swipeToClosePercent={SwipeListGlobals.swipeToClosePercent}
            swipeToOpenVelocityContribution={SwipeListGlobals.swipeToOpenVelocityContribution}
            stopRightSwipe={SwipeListGlobals.stopRightSwipe}
            stopLeftSwipe={SwipeListGlobals.stopLeftSwipe}
            rightOpenValue={-SwipeListGlobals.rightOpenValue}
            friction={SwipeListGlobals.friction}
            tension={SwipeListGlobals.tension}
            closeOnRowPress={SwipeListGlobals.closeOnRowPress}
            closeOnScroll={SwipeListGlobals.closeOnScroll}
        />
    );
  };

  const styles = StyleSheet.create({
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderRadius: 5,
        justifyContent: 'center',
        marginHorizontal: 30,
        marginTop: 20,
        height: 100,
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20,
        paddingRight: 60
    }
});

  export default WorkoutList;