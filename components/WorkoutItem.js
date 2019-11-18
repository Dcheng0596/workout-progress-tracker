import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Card from './Card'

const WorkoutItem = props => {
    return (
      <Card title={props.title} style={[styles, props.style]} />
    );
  };

  const styles = StyleSheet.create({
  
  });

  export default WorkoutItem;