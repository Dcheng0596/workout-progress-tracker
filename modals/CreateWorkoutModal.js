import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet} from 'react-native';
import CreateWorkoutList from '../components/CreateWorkoutList';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const CreateWorkoutModal = ({ navigation }) => {
  const [workout, setWorkout] = useState({
    name: "",
    key: "",
    sections: [{ name: "test", key: "0", exercises: [] }]
  });

  //Update workout name from input field
  const handleWorkoutInput = (workoutName) => {
    let state = {...workout};
    state.name = workoutName;

    setWorkout(state);
 }

  //Finds section with a certain key and update the section name
  const handleSectionInput = (sectionName, sectionKey) => {
     let state = {...workout};
     let sectionIndex = state.sections.findIndex(element => element.key == sectionKey)
     state.sections[sectionKey].name = sectionName;

     setWorkout(state);
     console.log(workout);
  }

  return (
    <View style={styles.screen}>
      <ScrollView>
        <InputField  
          title="Workout"
          placeholder={'e.g. "Monday Upper Body"'} 
          onChange={handleWorkoutInput}
          style={styles.workoutInput}
        />  
        <CreateWorkoutList sections={workout.sections} onChange={handleSectionInput}/>
      </ScrollView>
      <View style={styles.createSectionButton}>
          <CustomButton title='+' onPress={() => {}}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  workoutInput: {
    width: 200,
  },
  createSectionButton: {
    alignSelf: 'center',
    width: 50,
    paddingBottom: 50
  }
});

export default CreateWorkoutModal;