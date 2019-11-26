import React, { useState } from 'react';
import { View, TouchableHighlight, StyleSheet} from 'react-native';
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
          <InputField  
            title="Section"
            placeholder={'e.g. "Warm Up"'} 
            onChange={props.onChange}
            itemKey={props.itemKey}
            style={styles.sectionInput}
            autoFocus={props.autoFocus}
            autoCorrect={props.autoCorrect}
          />  
        </TouchableHighlight>
        <CustomButton 
            title='x' style={styles} 
            onPress={props.onPress} 
          />
        <CreateExerciseList 
          exercises={props.exercises} 
          collapsed={isCollapsed}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#CCC',
      borderBottomColor: 'black',
      borderRadius: 5,
      justifyContent: 'flex-start',
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
      top: 25,
      right: 40
    }
  });

  export default CreateWorkoutSection;