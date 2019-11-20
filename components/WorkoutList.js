import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, AsyncStorage } from 'react-native';
import WorkoutItem from './WorkoutItem';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useFocusEffect } from '@react-navigation/core';
import SwipeListGlobals from '../globals/SwipeListGlobals';

const WorkoutList = props => {
  const [workouts, setWorkouts] = useState([])

  // Fetch workouts from AsyncStorage when screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem('workouts').then((data) => {
        console.log(JSON.parse(data))
        setWorkouts(JSON.parse(data))
      })
    }, [])
  );

  
    
    return (
      <SwipeListView
            data={workouts}
            renderItem={ (data, rowMap) => (
                <TouchableHighlight underlayColor={'black'} onPress={() => {}}>
                  <WorkoutItem title={data.item.name} style={styles.rowFront} />
                </TouchableHighlight>
            )}
            renderHiddenItem={ (data, rowMap) => (
              <TouchableOpacity style={styles.rowBack} >
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
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 60,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 15,
    }
});

  export default WorkoutList;