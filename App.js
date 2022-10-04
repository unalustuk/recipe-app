import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Ionicons } from "@expo/vector-icons"

import CategoriesScreen from "./screens/CategoriesScreen"
import MealsOverViewScreen from "./screens/MealsOverViewScreen"
import MealRecipeScreen from "./screens/MealRecipeScreen"
import FavoritesScreen from "./screens/FavoritesScreen"
import FavoritesContextProvider from "./store/context/favorites-context"
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#0c141b" },
                headerTintColor: "white",
                sceneContainerStyle: { backgroundColor: "#121f2a" },
                drawerContentStyle: { backgroundColor: "#0c141b" },
                drawerInactiveTintColor: "white",
                drawerActiveTintColor: "#0c141b",
                drawerActiveBackgroundColor: "#44739e",
            }}
        >
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: "All Categories",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="list" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="star" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <FavoritesContextProvider>
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
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="MealsOverview"
                            component={MealsOverViewScreen}
                        />
                        <Stack.Screen
                            name="MealRecipe"
                            component={MealRecipeScreen}
                            options={{
                                title: "Recipe",
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </FavoritesContextProvider>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
