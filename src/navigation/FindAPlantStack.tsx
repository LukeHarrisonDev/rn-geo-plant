import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WhichPlantScreen from '../screens/WhichPlantScreen'
import { FindAPlantStackParamList } from '../types/findAPlant-types'
import FindAPlantAlert from '../screens/FindAPlantAlert'
import colours from '../config/colours'

const Stack = createNativeStackNavigator<FindAPlantStackParamList>()

const FindAPlantStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FindAPlantAlert" component={FindAPlantAlert}
                options={{
                    headerTitle: () => (
                        <View style={styles.container}>
                            <Text style={styles.titleText} numberOfLines={1} adjustsFontSizeToFit>
                                Alert Test
                            </Text>
                        </View>
                    ),
                    title: "FindAPlantAlert",
                    headerStyle: {
                        backgroundColor: colours.bgHighlight
                    },
                    headerTintColor: colours.dark
                }}
            />
            <Stack.Screen name="WhichPlantScreen" component={WhichPlantScreen}
                options={{
                    headerTitle: () => (
                        <View style={styles.container}>
                            <Text style={styles.titleText} numberOfLines={1} adjustsFontSizeToFit>
                                Which Plant?
                            </Text>
                        </View>
                    ),
                    title: "WhichPlantScreen",
                    headerStyle: {
                        backgroundColor: colours.bgHighlight
                    },
                    headerTintColor: colours.dark
                }}
            />
        </Stack.Navigator>
    )
}

export default FindAPlantStack

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 50,
        backgroundColor: colours.bgHighlight,
        alignItems: "center",
        position: "relative",
        top: -5,
    },
    titleText: {
        flex: 1,
        fontFamily: "PMarker",
        color: colours.dark,
        fontSize: 40,
        textAlign: "center",
        width: "100%",
        // top: -15,
    },
})