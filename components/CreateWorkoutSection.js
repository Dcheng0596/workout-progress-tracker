import React, { useState } from 'react';
import { View, TouchableHighlight, StyleSheet, Button} from 'react-native';
import InputField from './InputField'
import CreateExerciseList from './CreateExerciseList';
import CustomButton from './CustomButton'

const CreateWorkoutSection = props => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
      <View>
        <TouchableHighlight 
        style={styles.container}
          underlayColor={'grey'} 
          onPress={() => {setIsCollapsed(!isCollapsed)}}
        >
          <View>
            <InputField  
              title="Section"
              placeholder={'e.g. "Warm Up"'} 
              onChange={props.sectionInput}
              inputKey={props.sectionKey}
              style={styles.sectionInput}
              autoFocus={props.sectionAutoFocus}
              autoCorrect={props.autoCorrect}
            />  
            <CustomButton 
              title='+ Exercise' style={styles2} 
              onPress={() => {
                props.addExercise();
                setIsCollapsed(false);
              }} 
            />
          </View>
        </TouchableHighlight>
        <CustomButton 
            title='x' style={styles} 
            onPress={props.removeSection} 
          />
        <CreateExerciseList 
          exerciseInput={props.exerciseInput}
          removeExercise={props.removeExercise}
          exercises={props.exercises} 
          exerciseWeighted={props.exerciseWeighted}
          exerciseIso={props.exerciseIso}
          sectionKey={props.sectionKey}
          collapsed={isCollapsed}
          exerciseAutoFocus={props.exerciseAutoFocus}
          autoCorrect={props.autoCorrect}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      //alignItems: 'flex-start',
      backgroundColor: '#CCC',
      borderBottomColor: 'black',
      borderRadius: 5,
      //justifyContent: 'space-between',
      marginHorizontal: 30,
      marginTop: 20,
      height: 100,
    },
    sectionInput: {
        width: 150
    },
    text: {
      fontSize: 20
    },
    button: {
      position: 'absolute',
      top: 30,
      right: 45
    },
    createExerciseButton: {
    
    }
  });

  const styles2 = StyleSheet.create({
    text: {
      fontSize: 16
    },
    button: {
      alignSelf: "flex-end",
      marginHorizontal: 20,
      marginTop: 15
    },
  });


  export default CreateWorkoutSection;