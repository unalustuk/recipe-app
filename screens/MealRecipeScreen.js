import { View, Text, Image, StyleSheet, ScrollView } from "react-native"
import { useContext, useLayoutEffect } from "react"
import { MEALS } from "../data/dummy-data"
import { FavoritesContext } from "../store/context/favorites-context"

import MealDetails from "../components/MealDetails"
import List from "../components/List"
import IconButton from "../components/IconButton"

export default function MealRecipeScreen({ route, navigation }) {
    const favoriteMealCtx = useContext(FavoritesContext)

    const mealId = route.params.mealId
    const mealIsFavorite = favoriteMealCtx.ids.includes(mealId)

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

    function changeFavoriteStatus() {
        if (mealIsFavorite) {
            favoriteMealCtx.removeFavorite(mealId)
        } else {
            favoriteMealCtx.addFavorite(mealId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={mealIsFavorite ? "star" : "star-outline"}
                        color={"white"}
                        onPress={changeFavoriteStatus}
                    />
                )
            },
        })
    }, [navigation, changeFavoriteStatus])
    return (
        <ScrollView style={styles.root}>
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
            <View style={styles.listOuterContainer}>
                <View style={styles.listInnerContainer}>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Ingredients</Text>
                    </View>

                    <List data={ingredients} />
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Steps</Text>
                    </View>
                    <List data={steps} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: { marginBottom: 32 },
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
        marginHorizontal: 12,
        padding: 8,
        borderBottomColor: "#b7ddff",
        borderBottomWidth: 2,
    },
    listOuterContainer: {
        alignItems: "center",
    },
    listInnerContainer: { width: "80%" },
})
