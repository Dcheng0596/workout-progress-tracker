import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, AsyncStorage } from 'react-native';
import CreateWorkoutSection from './CreateWorkoutSection';
import { SwipeListView } from 'react-native-swipe-list-view';
import SwipeListGlobals from '../globals/SwipeListGlobals';
import Card from './Card';


const CreateWorkoutList = props => {
    return (
      <SwipeListView
            data={props.sections}
            renderItem={ (data, rowMap) => (
                <TouchableHighlight underlayColor={'black'} onPress={() => {}}>
                  <CreateWorkoutSection style={styles.rowFront} onChange={props.onChange} itemKey={data.item.key} />
                </TouchableHighlight>
            )}
            renderHiddenItem={ (data, rowMap) => (
                <Card style={styles.rowBack} title="Delete" />
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
        height: 80,
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

  export default CreateWorkoutList;