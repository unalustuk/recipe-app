import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CategoriesScreen from "./screens/CategoriesScreen"
import MealsOverViewScreen from "./screens/MealsOverViewScreen"
import MealRecipeScreen from "./screens/MealRecipeScreen"

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: "#0c141b" },
                        headerTintColor: "white",
                        contentStyle: { backgroundColor: "#121f2a" },
                    }}
                >
                    <Stack.Screen
                        name="MealsCategories"
                        component={CategoriesScreen}
                        options={{
                            title: "All Categories",
                        }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverViewScreen}
                        // options={({ route, navigation }) => {
                        //     const catId = route.params.categoryId
                        //     return { title: catId }
                        // }}
                    />
                    <Stack.Screen
                        name="MealRecipe"
                        component={MealRecipeScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
