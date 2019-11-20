import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, AsyncStorage} from 'react-native';
import CreateWorkoutList from '../components/CreateWorkoutList';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const CreateWorkoutModal = ({ navigation, route }) => {
  const [workout, setWorkout] = useState({
    name: "",
    key: "",
    sections: [{ name: "", key: "0", exercises: [] }]
  });

  useEffect(() => {
    if(route.params != null) {
      if(route.params.isDone == true) {
        storeWorkoutHandler();
        navigation.goBack()
      }
        
    }
  })


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

  const storeWorkoutHandler = async () => {
    try {
      await AsyncStorage.getItem('workouts')
      .then((workouts) => {
        const w = workouts ? JSON.parse(workouts) : [];
        w.push(workout);
        AsyncStorage.setItem('workouts', JSON.stringify(w))
      })
    } catch (error) {
      console.log("Error Creating Workout")
    }
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