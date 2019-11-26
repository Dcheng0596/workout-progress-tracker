import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ViewWorkoutSection from '../components/ViewWorkoutSection'


const ViewWorkoutModal = ({ route }) => {
  
    return (
      <FlatList
        keyboardDismissMode='on-drag'
        data={route.params.workout.sections}
        keyExtractor={data => data.key}
        renderItem={ (data) => (
          <ViewWorkoutSection 
            style={styles.rowFront}
            name={data.item.name}
            exercises={data.item.exercises}
          />
      )}
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
    }
});

  export default ViewWorkoutModal;