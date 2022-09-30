import { View, Text, StyleSheet } from "react-native"
import React from "react"

export default function MealDetails({
    duration,
    complexity,
    affordability,
    style,
    textStyle,
}) {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailsItem, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailsItem, textStyle]}>
                {complexity.toUpperCase()}
            </Text>
            <Text style={[styles.detailsItem, textStyle]}>
                {affordability.toUpperCase()}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    },
    detailsItem: {
        fontWeight: "bold",
        fontSize: 12,
        marginBottom: 12,
        marginHorizontal: 12,
    },
})
