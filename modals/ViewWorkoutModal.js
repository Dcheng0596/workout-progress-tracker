import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import WorkoutItem from '../components/WorkoutItem';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useFocusEffect } from '@react-navigation/core';
import SwipeListGlobals from '../globals/SwipeListGlobals';
import * as SecureStore from 'expo-secure-store';


const ViewWorkoutModal = ({ route }) => {
  const [workouts, setWorkouts] = useState([])

  // Fetch workouts from AsyncStorage when screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
        SecureStore.getItemAsync('workouts').then((data) => {
        console.log(JSON.parse(data))
        setWorkouts(JSON.parse(data))
      })
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
            data={route.params.workout.sections}
            renderItem={ (data, rowMap) => (
                <TouchableHighlight  
                  style={styles.rowFront} 
                  underlayColor={'grey'} 
                  onPress={() => {}}
                >
                  <WorkoutItem title={data.item.name} />
                </TouchableHighlight>
            )}
            renderHiddenItem={ (data, rowMap) => (
                <WorkoutItem />               
            )}
            swipeToOpenPercent={SwipeListGlobals.swipeToOpenPercent}
            swipeToClosePercent={SwipeListGlobals.swipeToClosePercent}
            swipeToOpenVelocityContribution={SwipeListGlobals.swipeToOpenVelocityContribution}
            stopRightSwipe={SwipeListGlobals.stopRightSwipe}
            stopLeftSwipe={SwipeListGlobals.stopLeftSwipe}
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

  export default ViewWorkoutModal;