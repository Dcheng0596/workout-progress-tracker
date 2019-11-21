import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import InputField from './InputField'

const CreateWorkoutSection = props => {
    return (
      <View style={[styles.inputContainer, props.style]} >
        <InputField  
            title="Section"
            placeholder={'e.g. "Warm Up"'} 
            onChange={props.onChange}
            itemKey={props.itemKey}
            style={styles.sectionInput}
            autoFocus={props.autoFocus}
        />  
      </View>
    
    );
  };

  const styles = StyleSheet.create({
      inputContainer: {
      },
      sectionInput: {
          width: 150
      }
  
  });

  export default CreateWorkoutSection;