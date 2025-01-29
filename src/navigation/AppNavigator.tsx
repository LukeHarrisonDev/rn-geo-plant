import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import PlantListStack from './PlantListStack';
import FindAPlantStack from './FindAPlantStack';
import ChatStack from './ChatStack';
import MyProfileStack from './MyProfileStack';
import colours from '../config/colours';

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: colours.highlight,
            tabBarInactiveTintColor: colours.dark,
            tabBarActiveBackgroundColor: colours.bgHighlight,
            tabBarInactiveBackgroundColor: colours.bgHighlight,
        }}>
            <Tab.Screen name="Home" component={HomeStack}/>
            <Tab.Screen name="PlantList" component={PlantListStack}/>
            <Tab.Screen name="FindAPlant" component={FindAPlantStack}/>
            <Tab.Screen name="Chat" component={ChatStack}/>
            <Tab.Screen name="MyProfile" component={MyProfileStack}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})