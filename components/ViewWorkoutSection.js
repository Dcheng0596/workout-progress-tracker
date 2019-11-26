import React, { useState } from 'react';
import { View, TouchableHighlight, StyleSheet} from 'react-native';
import Card from './Card'
import ViewExerciseList from './ViewExerciseList';


const ViewWorkoutSection = props => {
    const [isCollapsed, setIsCollapsed] = useState(true)

    return (
      <View>
        <TouchableHighlight 
          style={[styles.inputContainer, props.style]} 
          underlayColor={'grey'} 
          onPress={() => {setIsCollapsed(!isCollapsed)}}
        >
          <Card  
            title={props.name}
          />  
        </TouchableHighlight>
        <ViewExerciseList exercises={props.exercises} collapsed={isCollapsed} />
      </View>
    );
  };

  const styles = StyleSheet.create({
      inputContainer: {
      },
      sectionInput: {
          width: 150
      },
      button: {
        position: 'absolute',
        top: 5,
        right: 10
      }
      
  
  });

  export default ViewWorkoutSection;