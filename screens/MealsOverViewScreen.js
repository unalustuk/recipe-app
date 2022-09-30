import { useLayoutEffect } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import MealItem from "../components/MealItem"
import { MEALS, CATEGORIES } from "../data/dummy-data"

export default function MealsOverViewScreen({ route, navigation }) {
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    function renderMealItem(itemData) {
        function pressHandler() {
            navigation.navigate("MealRecipe", {
                mealId: itemData.item.id,
            })
        }
        return (
            <MealItem
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                duration={itemData.item.duration}
                affordability={itemData.item.affordability}
                complexity={itemData.item.complexity}
                onPress={pressHandler}
            />
        )
    }

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        ).title

        navigation.setOptions({ title: categoryTitle })
    }, [catId, navigation])

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})
