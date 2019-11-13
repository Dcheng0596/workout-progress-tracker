import * as React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            title="Go to Workouts"
            onPress={() => navigation.navigate('Workouts')}
        />
      </View>
    );
  };

  export default HomeScreen;