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
            onChange={props.onChange} 
            itemKey={data.item.key} 
            autoFocus={props.autoFocus}
            autoCorrect={props.autoCorrect}
            exercises={data.item.exercises}
            onPress={() => props.onPress(data.item.key)}
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