import React from 'react';
import RootStack from './stacks/RootStack';
import { NavigationNativeContainer } from '@react-navigation/native';


const App = () => {
  return (
    <NavigationNativeContainer>
      <RootStack />
    </NavigationNativeContainer>
  );
}

export default App;
