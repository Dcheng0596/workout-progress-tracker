import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WorkoutList from '../components/WorkoutList';
import CustomButton from '../components/CustomButton'

const WorkoutsScreen = ({ navigation }) => {
    return (
      <View style={styles.screen}>
        <WorkoutList />
        <View style={styles.createWorkoutButton}>
          <CustomButton title='+' onPress={() => navigation.navigate('CreateWorkoutModal')}/>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    screen: {
      flex: 1
    },
    createWorkoutButton: {
      alignSelf: 'center',
      width: 50
    }
  });

  export default WorkoutsScreen;