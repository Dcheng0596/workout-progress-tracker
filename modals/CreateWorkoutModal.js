import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import CreateWorkoutList from '../components/CreateWorkoutList';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import shortid from 'shortid';
import * as SecureStore from 'expo-secure-store';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const CreateWorkoutModal = ({ navigation, route }) => {
  const [workout, setWorkout] = useState({
    name: "",
    key: shortid.generate(),
    sections: [{ name: "", key: shortid.generate(), exercises: [] }]
  });
  const [autoFocus, setAutoFocus] = useState(false)

  useEffect(() => {
    if(route.params != null) {
      if(route.params.isDone == true) {
        storeWorkoutHandler();
        SecureStore.getItemAsync('workout').then(data => navigation.navigate("Workouts"));
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
    state.sections.push({ name: "", key: shortid.generate(), exercises: [] })

    setAutoFocus(true);
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
      await SecureStore.getItemAsync('workouts')
      .then((workouts) => {
        const w = workouts ? JSON.parse(workouts) : [];
        w.push(workout);
        console.log(w)
        SecureStore.setItemAsync('workouts', JSON.stringify(w))
      })
    } catch (error) {
      console.log("Error Creating Workout")
    }
  }

  return (
    <KeyboardAvoidingView 
      style={styles.screen} 
      behavior={Platform.OS === 'ios' ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 45 : 30}
    >
      <KeyboardAwareScrollView 
        enableOnAndroid={true}
        enableAutomaticScroll={(Platform.OS === 'ios')}
        extraScrollHeight={120} 
        viewIsInsideTabBar={true} 
      > 
        <InputField  
          title="Workout"
          placeholder={'e.g. "Monday Upper Body"'} 
          onChange={WorkoutInputHandler}
          style={styles.workoutInput}
          autoFocus={true}
          autoCorrect={false}
        />  
        <CreateWorkoutList 
          sections={workout.sections} 
          onChange={sectionInputHandler} 
          onPress={removeSectionHandler} 
          autoFocus={autoFocus}
          autoCorrect={false}
        />
      </KeyboardAwareScrollView>
      <View style={styles.createSectionButton}>
          <CustomButton title='+' onPress={addSectionHandler}/>
      </View>
    </KeyboardAvoidingView>
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