import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import CreateWorkoutSection from './CreateWorkoutSection';
import { SwipeListView } from 'react-native-swipe-list-view';
import SwipeListGlobals from '../globals/SwipeListGlobals';
import Card from './Card';

const CreateWorkoutList = props => {
    return (
      <SwipeListView
        keyboardDismissMode='on-drag'
        data={props.sections}
        renderItem={ (data, rowMap) => (
          <TouchableHighlight 
            style={styles.rowFront}
            underlayColor={'grey'} 
            onPress={() => {}}>
            <CreateWorkoutSection 
              onChange={props.onChange} 
              itemKey={data.item.key} 
              autoFocus={props.autoFocus}
              autoCorrect={props.autoCorrect}
            />
          </TouchableHighlight>
        )}
        renderHiddenItem={ (data, rowMap) => (
            <TouchableOpacity 
              onPress={() => 
              props.onPress(data.item.key)} 
              style={styles.rowBack} 
            >
              <Card title="Delete" />
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
        alignItems: 'flex-start',
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

  export default CreateWorkoutList;