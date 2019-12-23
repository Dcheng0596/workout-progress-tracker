import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';

/*Custom button that disableds double presses from registering*/
const CustomButton = props => {
  const [disabled, setDisabled] = useState(false);
  
    return (
        <TouchableOpacity 
          style={[styles.button, props.style.button]} 
          onPress={() => {
              props.onPress();
              setDisabled(true);
              setTimeout(() => setDisabled(false), 100);
            } 
          }
          disabled={disabled}
        >
          <Text style={[styles.text, props.style.text]}>{props.title}</Text>
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