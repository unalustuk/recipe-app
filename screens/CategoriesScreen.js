import { View, Text, FlatList, StyleSheet } from "react-native"
import { useState } from "react"

import { CATEGORIES as categoriesData } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"

export default function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id,
            })
        }
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        )
    }

    return (
        <View>
            <FlatList
                data={categoriesData}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
