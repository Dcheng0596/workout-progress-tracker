import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Card = props => {
    return (
        <View style={[styles.card, props.style]} >
          <Text>{props.title}</Text>
        </View>
    );
  };

  const styles = StyleSheet.create({
    card: {
    }
  });

  export default Card;