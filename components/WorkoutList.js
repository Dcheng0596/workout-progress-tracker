import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, AsyncStorage } from 'react-native';
import WorkoutItem from './WorkoutItem';
import { SwipeListView } from 'react-native-swipe-list-view';

const WorkoutList = props => {


    const DATA = [{title: 'hi', key: "1"}, {title: 'bye', key: "2"}]
    
    return (
      <SwipeListView
            data={DATA}
            renderItem={ (data, rowMap) => (
                <TouchableHighlight underlayColor={'black'} onPress={() => {}}>
                  <WorkoutItem title={data.item.title} style={styles.rowFront} />
                </TouchableHighlight>
            )}
            renderHiddenItem={ (data, rowMap) => (
                <WorkoutItem title='Delete' style={styles.rowBack} />
            )}
            swipeToOpenPercent={80}
            swipeToClosePercent={80}
            swipeToOpenVelocityContribution={5}
            stopRightSwipe={-160}
            stopLeftSwipe={160}
            rightOpenValue={-80}
            friction={80}
            tension={80}
            closeOnRowPress={true}
            closeOnScroll={true}
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