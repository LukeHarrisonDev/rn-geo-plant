import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SvgHome from '../../assets/tab-icons/tab-icon-components/Home';


import HomeStack from './HomeStack';
import PlantListStack from './PlantListStack';
import FindAPlantStack from './FindAPlantStack';
import ChatStack from './ChatStack';
import MyProfileStack from './MyProfileStack';
import colours from '../config/colours';
import SvgListSl from '../../assets/tab-icons/tab-icon-components/ListSl';
import SvgFind from '../../assets/tab-icons/tab-icon-components/Find';
import SvgChat from '../../assets/tab-icons/tab-icon-components/Chat';
import SvgUser from '../../assets/tab-icons/tab-icon-components/User';

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
            <Tab.Screen name="Home" component={HomeStack}
            options={{
                tabBarIcon: ({ color }) => {
                    return <SvgHome color={color} size={35} />
                }
            }}/>

            <Tab.Screen name="PlantList" component={PlantListStack}
            options={{
                tabBarIcon: ({ color }) => {
                    return <SvgListSl color={color} size={35} />
                }
            }}/>

            <Tab.Screen name="FindAPlant" component={FindAPlantStack}
            options={{
                tabBarIcon: ({ color }) => {
                    return <SvgFind color={color} size={35} />
                }
            }}/>

            <Tab.Screen name="Chat" component={ChatStack}
            options={{
                tabBarIcon: ({ color }) => {
                    return <SvgChat color={color} size={35} />
                }
            }}/>

            <Tab.Screen name="MyProfile" component={MyProfileStack}
            options={{
                tabBarIcon: ({ color }) => {
                    return <SvgUser color={color} size={35} />
                }
            }}/>

        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})