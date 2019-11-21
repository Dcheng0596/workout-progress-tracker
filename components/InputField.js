import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

const InputField = props => {
    return (
      <View style ={styles.inputContainer}>
        <TextInput 
            style={[styles.inputField, props.style]} 
            placeholder={props.placeholder}
            onChangeText={(text) => props.onChange(text, props.itemKey)}
            autoFocus={props.autoFocus}
            autoCorrect={props.autoCorrect}
        />
        <Text>{props.title}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    inputContainer: {
        margin: 20
    },
    inputField: {
        height: 30,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    }
  });

  export default InputField;