import React, { useState, useEffect } from 'react';
import { View,TouchableHighlight ,StyleSheet, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/core';
import * as SecureStore from 'expo-secure-store';
import Card from '../components/Card';


const ChooseWorkoutScreen = ({ navigation }) => {
  const [workouts, setWorkouts] = useState([])

  // Fetch workouts from AsyncStorage when screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      try {
        SecureStore.getItemAsync('workouts').then((workouts) => {
          //console.log(JSON.parse(data))
          setWorkouts([...JSON.parse(workouts)])
        })
      }
      catch(err) {
        console.log("Getting Workouts Failed");
      }
    }, [])
  );

  useEffect(() => {
    try {
      SecureStore.setItemAsync('workouts', JSON.stringify(workouts))
    } catch (error) {
      console.log("Error Deleting Workout")
    }
  }, [workouts])
  
    return (
      <View style={styles.screen}>
        <FlatList
            keyboardDismissMode='on-drag'
            data={workouts}
            keyExtractor={data => data.key}
            renderItem={ (data) => (
                <TouchableHighlight style={styles.container} 
                    underlayColor={'grey'} 
                    onPress={() => navigation.navigate("Start Workout", {
                      workout: data.item
                    })}
                >
                    <Card title={data.item.name} />
                </TouchableHighlight>
            )}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    screen: {
      flex: 1
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderRadius: 5,
        justifyContent: 'center',
        marginHorizontal: 30,
        marginTop: 20,
        height: 100,
      }
  });

  export default ChooseWorkoutScreen;