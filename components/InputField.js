import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

const InputField = props => {
    return (
      <View style ={styles.inputContainer}>
        <TextInput 
            style={[styles.inputField, props.style]} 
            placeholder={props.placeholder}
            onChangeText={(text) => props.onChange(text, props.inputKey, props.inputKey2)}
            autoFocus={props.autoFocus}
            autoCorrect={props.autoCorrect}
        />
        <Text>{props.title}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 20,
        marginTop: 15,
    },
    inputField: {
        height: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    }
  });

  export default InputField;