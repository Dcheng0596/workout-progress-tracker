import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import InputField from './InputField';

const CreateExerciseItem = props => {
    return (
        <View style={[styles.inputContainer, props.style]} >
          <InputField  
            title="Exercise"
            placeholder={'e.g. "Push Up"'} 
            onChange={props.onChange}
            itemKey={props.itemKey}
            style={styles.sectionInput}
            autoFocus={props.autoFocus}
            autoCorrect={props.autoCorrect}
          />  
        </View>
    );
  };

  const styles = StyleSheet.create({
      inputContainer: {
      },
      sectionInput: {
          width: 150
      },
      
      
  
  });

  export default CreateExerciseItem;