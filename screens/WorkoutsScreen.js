import React from 'react';
import { View, StyleSheet } from 'react-native';
import WorkoutList from '../components/WorkoutList';

const WorkoutsScreen = ({ navigation }) => {
    return (
      <View style={styles.screen}>
        <WorkoutList navigation={navigation} />
      </View>
    );
  };

  const styles = StyleSheet.create({
    screen: {
      flex: 1
    }
  });

  export default WorkoutsScreen;