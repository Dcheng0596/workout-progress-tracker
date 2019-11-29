import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import  Switch  from 'react-native-switch-pro';
import InputField from './InputField';
import CustomButton from './CustomButton'

const CreateExerciseItem = props => {
    return (
        <View style={[styles.inputContainer, props.style]} >
          <InputField  
            title="Exercise"
            placeholder={'e.g. "Push Up"'} 
            onChange={props.exerciseInput}
            inputKey2={props.sectionKey}
            inputKey={props.exerciseKey}
            style={styles.sectionInput}
            autoFocus={props.exerciseAutoFocus}
            autoCorrect={props.autoCorrect}
          />  
          <View style={styles.switchContainer}>
            <View style={styles.switch}>
                <Text>Weighted</Text>
                <Switch onSyncPress={props.exerciseWeighted} />
            </View>
            <View style={styles.switch}>
                <Text>Isometric</Text>
                <Switch onSyncPress={props.exerciseIso} />
            </View>
          </View>
          <CustomButton 
            title='x' style={styles} 
            onPress={props.removeExercise} 
          />
        </View>
    );
  };

  const styles = StyleSheet.create({
    inputContainer: {
        //alignItems: 'flex-start',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderRadius: 5,
        justifyContent: 'space-between',
        marginHorizontal: 50,
        marginTop: 20,
        height: 100,
    },
      sectionInput: {
          width: 150
      },
      text: {
        fontSize: 20
      },
      button: {
        position: 'absolute',
        top: 10,
        right: 15
      },
      switchContainer: {
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          paddingHorizontal: 20
      },
      switch: {
        flexDirection: "row",
        flex: 1,
        justifyContent: 'space-around',
        paddingBottom: 10
      }

  });

  export default CreateExerciseItem;