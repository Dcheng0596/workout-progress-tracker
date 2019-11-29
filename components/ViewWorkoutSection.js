import React, { useState } from 'react';
import { View, TouchableHighlight, StyleSheet} from 'react-native';
import Card from './Card'
import ViewExerciseList from './ViewExerciseList';


const ViewWorkoutSection = props => {
    const [isCollapsed, setIsCollapsed] = useState(true)

    return (
      <View>
        <TouchableHighlight 
          style={[styles.container, props.style]} 
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
    container: {
      alignItems: 'flex-start',
      backgroundColor: '#CCC',
      borderBottomColor: 'black',
      borderRadius: 5,
      justifyContent: 'center',
      marginHorizontal: 50,
      marginTop: 10,
      height: 100,
    },
    sectionInput: {
        width: 150
    },
    button: {
      position: 'absolute',
      top: 10,
      right: 15
    }
      
  
  });

  export default ViewWorkoutSection;