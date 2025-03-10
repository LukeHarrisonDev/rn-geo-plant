import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoggedOutScreen from '../screens/LoggedOutScreen'
import SignUpScreen from '../screens/SignUpScreen'
import LoginScreen from '../screens/LoginScreen'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoggedOutScreen" component={LoggedOutScreen}
                options={{
                headerShown: false,
                }}
            />

            <Stack.Screen name="SignUpScreen" component={SignUpScreen}
                options={{
                headerShown: false,
                }}
            />

            <Stack.Screen name="LoginScreen" component={LoginScreen}
                options={{
                headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeStack