import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CreateWorkoutSection from './CreateWorkoutSection';

const CreateWorkoutList = props => {
    return (
      <FlatList
        keyboardDismissMode='on-drag'
        data={props.sections}
        extraData={props}
        keyExtractor={data => data.key}
        renderItem={ (data) => (
          <CreateWorkoutSection 
            style={styles.rowFront}
            sectionInput={props.sectionInput} 
            exerciseInput={props.exerciseInput}
            sectionKey={data.item.key} 
            sectionAutoFocus={props.sectionAutoFocus}
            exerciseAutoFocus={props.exerciseAutoFocus}
            exercises={data.item.exercises}
            exerciseWeighted={props.exerciseWeighted}
            exerciseIso={props.exerciseIso}
            removeExercise={props.removeExercise}
            removeSection={() => props.removeSection(data.item.key)}
            addExercise={() => props.addExercise(data.item.key)}
          />
      )}
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
    }
});

  export default CreateWorkoutList;