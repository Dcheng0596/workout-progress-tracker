import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Card = props => {
    return (
        <View style={[styles, props.style]} >
          <Text>{props.title}</Text>
        </View>
    );
  };

  const styles = StyleSheet.create({
    
  });

  export default Card;