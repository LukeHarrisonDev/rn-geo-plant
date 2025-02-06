import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './HomeStack'
import PlantListStack from './PlantListStack'
import FindAPlantStack from './FindAPlantStack'
import ChatStack from './ChatStack'
import MyProfileStack from './MyProfileStack'
import colours from '../config/colours'

import SvgHome from '../../assets/tab-icons/tab-icon-components/Home'
import SvgListBl from '../../assets/tab-icons/tab-icon-components/ListBl'
import SvgFind from '../../assets/tab-icons/tab-icon-components/Find'
import SvgChat from '../../assets/tab-icons/tab-icon-components/Chat'
import SvgUser from '../../assets/tab-icons/tab-icon-components/User'

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
        screenOptions={{
            tabBarStyle: { backgroundColor : colours.bgHighlight }, 
            tabBarActiveTintColor: colours.highlight,
            tabBarInactiveTintColor: colours.dark,
        }}>
            
            <Tab.Screen name="Home" component={HomeStack}
            options={{
                tabBarIcon: ({ color }) => {
                    return <SvgHome color={color} size={45} />
                },
                headerShown: false,
            }}/>

            <Tab.Screen name="PlantList" component={PlantListStack}
            options={{
                tabBarIcon: ({ color }) => {
                    return <SvgListBl color={color} size={45} />
                },
                headerShown: false,
            }}/>

            <Tab.Screen name="FindAPlant" component={FindAPlantStack}
            options={{
                tabBarIcon: ({ color }) => {
                    return <SvgFind color={color} size={45} />
                },
                headerShown: false,
            }}/>

            <Tab.Screen name="Chat" component={ChatStack}
            options={{
                tabBarIcon: ({ color }) => {
                    return <SvgChat color={color} size={45} />
                },
                headerShown: false,
            }}/>

            <Tab.Screen name="MyProfile" component={MyProfileStack}
            options={{
                tabBarIcon: ({ color }) => {
                    return <SvgUser color={color} size={45} />
                },
                headerShown: false,
            }}/>

        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator