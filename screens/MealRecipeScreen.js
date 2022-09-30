import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    ScrollView,
} from "react-native"
import { MEALS } from "../data/dummy-data"

import React from "react"
import MealDetails from "../components/MealDetails"

export default function MealRecipeScreen({ route }) {
    const mealId = route.params.mealId

    const displayedMeal = MEALS.find((meal) => meal.id === mealId)
    const {
        title,
        imageUrl,
        ingredients,
        steps,
        duration,
        complexity,
        affordability,
    } = displayedMeal
    console.log(displayedMeal)
    return (
        <ScrollView>
            <View>
                <Image style={styles.image} source={{ uri: imageUrl }} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <View>
                <MealDetails
                    complexity={complexity}
                    affordability={affordability}
                    duration={duration}
                    style={styles.details}
                    textStyle={styles.textDetails}
                />
            </View>
            <View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Ingredients</Text>
                </View>
                <FlatList
                    data={ingredients}
                    keyExtractor={(item) => item}
                    renderItem={(item) => {
                        return <Text>{item.item}</Text>
                    }}
                />
            </View>
            <View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Steps</Text>
                </View>
                <FlatList
                    data={steps}
                    keyExtractor={(item) => item}
                    renderItem={(item) => {
                        return <Text>{item.item}</Text>
                    }}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: { width: "100%", height: 350 },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white",
    },
    details: {},
    textDetails: {
        color: "white",
    },
    subtitle: {
        fontWeight: "bold",
        color: "#b7ddff",
        fontSize: 20,
        textAlign: "center",
    },
    subtitleContainer: {
        marginVertical: 4,
        marginHorizontal: 24,
        padding: 8,
        borderBottomColor: "#b7ddff",
        borderBottomWidth: 2,
    },
})
