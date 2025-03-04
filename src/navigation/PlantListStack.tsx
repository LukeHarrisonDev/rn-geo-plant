import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PlantsScreen from "../screens/PlantsScreen"
import SinglePlantScreen from "../screens/SinglePlantScreen"
import FoundPlantsScreen from "../screens/FoundPlantsScreen"
import SingleFoundPlantScreen from "../screens/SingleFoundPlantScreen"
import { PlantListStackParamList } from "../types/plants-types"
import colours from "../config/colours"
import { Pressable, StyleSheet, Text, View } from "react-native"

const Stack = createNativeStackNavigator<PlantListStackParamList>()

const PlantListStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PlantsScreen" component={PlantsScreen}
                options={{
                    headerTitle: () => (
                        <View style={styles.container}>
                            <Text style={styles.titleText} numberOfLines={1} adjustsFontSizeToFit>
                                All Plants
                            </Text>
                        </View>
                    ),
                    title: "All Plants",
                    headerStyle: {
                        backgroundColor: colours.bgHighlight
                    },
                    headerTintColor: colours.dark,
                    
                    // Use this for extra buttons on the header
                    // headerRight: () => (
                    //     <Pressable>
                    //         <Text>Hello</Text>
                    //     </Pressable>
                    // )
                }}
            />

            <Stack.Screen name="SinglePlantScreen" component={SinglePlantScreen}
                options={({ route }) => ({
                    title: route.params.plantName,
                    headerTitle: () => (
                        <View style={styles.container}>
                            <Text style={styles.titleText} numberOfLines={1} adjustsFontSizeToFit>
                                {route.params.plantName}
                            </Text>
                        </View>
                    ),
                    headerStyle: {
                        backgroundColor: colours.bgHighlight
                    },
                    headerTintColor: colours.dark,
                })}
            />

            <Stack.Screen name="FoundPlantsScreen" component={FoundPlantsScreen}
                options={{
                    headerTitle: () => (
                        <View style={styles.container}>
                            <Text style={styles.titleText} numberOfLines={1} adjustsFontSizeToFit>
                                Plant Map
                            </Text>
                        </View>
                    ),
                    title: "FoundPlantsScreen",
                    headerStyle: {
                        backgroundColor: colours.bgHighlight
                    },
                    headerTintColor: colours.dark,
                }}
            />

            <Stack.Screen name="SingleFoundPlantScreen" component={SingleFoundPlantScreen}
                options={({ route }) => ({
                    title: route.params.plantName,
                    headerTitle: () => (
                        <View style={styles.container}>
                            <Text style={styles.titleText} numberOfLines={1} adjustsFontSizeToFit>
                                {route.params.plantName}
                            </Text>
                        </View>
                    ),
                    headerStyle: {
                        backgroundColor: colours.bgHighlight
                    },
                    headerTintColor: colours.dark,
                })}
            />
        </Stack.Navigator>
    )
}

export default PlantListStack

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