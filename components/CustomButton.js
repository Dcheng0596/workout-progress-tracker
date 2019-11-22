import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = props => {
    return (
        <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
          <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40
    }
  });

  export default CustomButton;