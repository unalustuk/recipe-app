import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer"
import CategoriesScreen from "./screens/CategoriesScreen"
import MealsOverViewScreen from "./screens/MealsOverViewScreen"
import MealRecipeScreen from "./screens/MealRecipeScreen"
import FavoritesScreen from "./screens/FavoritesScreen"
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Categories" component={CategoriesScreen} />
            <Drawer.Screen name="Favorites" component={FavoritesScreen} />
        </Drawer.Navigator>
    )
}

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
                        name="Drawer"
                        component={DrawerNavigator}
                        options={{
                            title: "All Categories",
                        }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverViewScreen}
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
