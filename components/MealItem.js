import { View, Text, StyleSheet, Image, Pressable } from "react-native"
import React from "react"

export default function MealItem({
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
}) {
    return (
        <View style={styles.mealItem}>
            <Pressable>
                <View>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <Text style={styles.title}>{title}</Text>
                </View>

                <View style={styles.details}>
                    <Text style={styles.detailsItem}>{duration}m</Text>
                    <Text style={styles.detailsItem}>
                        {complexity.toUpperCase()}
                    </Text>
                    <Text style={styles.detailsItem}>
                        {affordability.toUpperCase()}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 0.5,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 8,
        borderTopEndRadius: 8,
        borderTopStartRadius: 8,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 8,
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 8,
    },
    detailsItem: {
        fontWeight: "bold",
        fontSize: 12,
        marginBottom: 12,
    },
})
