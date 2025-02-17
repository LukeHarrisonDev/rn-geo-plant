import { useEffect, useState } from 'react';
import AppNavigator from './src/navigation/AppNavigator'
import * as Font from 'expo-font'

const App = () => {

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'PMarker': require('./assets/fonts/PermanentMarker-Regular.ttf'),
      })
    }
    loadFonts()
  }, [])

  return (
    <AppNavigator/>
  );
}

export default App