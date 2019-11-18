import React from 'react';
import { View, Text, Button } from 'react-native';
import WorkoutList from '../components/WorkoutList'

const WorkoutsScreen = ({ navigation }) => {
    return (
      <WorkoutList />
    );
  };

  export default WorkoutsScreen;