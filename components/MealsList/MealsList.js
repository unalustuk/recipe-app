import { View, FlatList, StyleSheet } from "react-native"
import React from "react"
import MealItem from "./MealItem"

export default function MealsList({ items }) {
    function renderMealItem(itemData) {
        return (
            <MealItem
                id={itemData.item.id}
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                duration={itemData.item.duration}
                affordability={itemData.item.affordability}
                complexity={itemData.item.complexity}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
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
