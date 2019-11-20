import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet} from 'react-native';
import CreateWorkoutList from '../components/CreateWorkoutList';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const CreateWorkoutModal = ({ navigation }) => {
  const [workout, setWorkout] = useState({
    name: "",
    key: "",
    sections: [{ name: "", key: "0", exercises: [] }]
  });

  //Update workout name from input field
  const WorkoutInputHandler = (workoutName) => {
    let state = {...workout};
    state.name = workoutName;

    setWorkout(state);
 }

  //Finds section with a certain key and update the section name
  const sectionInputHandler = (sectionName, sectionKey) => {
     let state = {...workout};
     let sectionIndex = state.sections.findIndex(element => element.key == sectionKey)
     state.sections[sectionIndex].name = sectionName;

     setWorkout(state);
  }

  const addSectionHandler = () => {
    let state = {...workout};
    state.sections.push({ name: "", key: "2", exercises: [] })

    setWorkout(state);
  }

  const removeSectionHandler = (sectionKey) => {
    let state = {...workout};
    let sectionIndex = state.sections.findIndex(element => element.key == sectionKey)
    state.sections.splice(sectionIndex, 1);

    setWorkout(state);
  }

  return (
    <View style={styles.screen}>
      <ScrollView>
        <InputField  
          title="Workout"
          placeholder={'e.g. "Monday Upper Body"'} 
          onChange={WorkoutInputHandler}
          style={styles.workoutInput}
        />  
        <CreateWorkoutList 
          sections={workout.sections} 
          onChange={sectionInputHandler} 
          onPress={removeSectionHandler} 
        />
      </ScrollView>
      <View style={styles.createSectionButton}>
          <CustomButton title='+' onPress={addSectionHandler}/>
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