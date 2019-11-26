import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import Card from './Card'
import CustomButton from './CustomButton'

const WorkoutItem = props => {
    return (
      <View>
        <TouchableHighlight style={styles.container} 
            underlayColor={'grey'} 
            onPress={() => props.navigation.navigate('ViewWorkoutModal', {
              workout: props.workout
            })}
        >
          <Card title={props.workout.name} />
        </TouchableHighlight>
        <CustomButton title='x' style={styles} onPress={props.onPress} />
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
      justifyContent: 'center',
      marginHorizontal: 30,
      marginTop: 20,
      height: 100,
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

  export default WorkoutItem;