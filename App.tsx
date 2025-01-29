import { StyleSheet } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;