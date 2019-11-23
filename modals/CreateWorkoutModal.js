import React, { useState, useEffect } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Dimensions, Keyboard, Alert } from 'react-native';
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
  //Text Input focus
  const [autoFocus, setAutoFocus] = useState(false);
  //Header offset
  const [offset, setOffset] = useState(1);

  const isInputsValid = () => {
    let isValid = true;
    if( workout.name === "" )
      isValid = false;
    
    workout.sections.forEach( section => { if(section.name === "") {isValid = false; return}});
    return isValid;
  }

  useEffect(() => {
    if(route.params != null) {
      if(route.params.isDone == true) {
        if(isInputsValid()) {
          console.log(isInputsValid());
          route.params.isDone = false;
          storeWorkoutHandler();
          SecureStore.getItemAsync('workout').then(() => {navigation.navigate("Workouts")});
        } else {
          route.params.isDone = false;
          Alert.alert(
            'Invalid Input',
            'Please fill out all empty fields',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')}
            ]
          )
        }
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
        let w = [...JSON.parse(workouts), workout];

        SecureStore.setItemAsync('workouts', JSON.stringify(w))
      })
    } catch (error) {
      console.log(error)
    }
  }

  const { height: fullHeight } = Dimensions.get('window');

  onLayout = ({
    nativeEvent: { layout: { height } },
  }) => {
    const o = fullHeight - height;
    setOffset( o );
  }

  return (
    <View style={styles.screen} onLayout={onLayout}>
      <KeyboardAvoidingView  
        style={styles.screen}
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
        keyboardVerticalOffset={ offset }
      >
        <KeyboardAwareScrollView 
          enableOnAndroid={true}
          //enableAutomaticScroll={(Platform.OS === 'ios')}
          //extraScrollHeight={Platform.OS === 'ios' ? 120 : 200 } 
          extraHeight={Platform.OS === 'ios' ? 200 : 0 } 
          viewIsInsideTabBar={true} 
          onScrollBeginDrag={Keyboard.dismiss}
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
            <CustomButton style={styles.createSectionButtonText} title='+' onPress={addSectionHandler}/>
        </View>
      </KeyboardAvoidingView>
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
  createSectionButtonText: {
     height: 40
  },
  createSectionButton: {
    justifyContent: 'flex-start',
    backgroundColor: "#ffffff",
    width: "100%",
    height: "11%",
    borderTopColor: 'black',
    borderTopWidth: 1
  }
});

export default CreateWorkoutModal;