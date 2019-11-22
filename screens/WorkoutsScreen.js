import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WorkoutList from '../components/WorkoutList';
import CustomButton from '../components/CustomButton';

const WorkoutsScreen = ({ navigation }) => {
    return (
      <View style={styles.screen}>
        <WorkoutList navigation={navigation} />
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
      justifyContent: 'center',
      backgroundColor: "#ffffff",
      width: "100%",
      height: "8%",
      borderTopColor: 'black',
      borderTopWidth: 1
    }
  });

  export default WorkoutsScreen;