import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    Platform,
} from "react-native"
import React from "react"
import MealDetails from "./MealDetails.js"

export default function MealItem({
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    onPress,
}) {
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [pressed ? styles.pressed : null]}
                onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            style={styles.image}
                            source={{ uri: imageUrl }}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>

                    <MealDetails
                        duration={duration}
                        affordability={affordability}
                        complexity={complexity}
                    />
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
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },

    pressed: {
        opacity: 0.75,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 8,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 8,
    },
})
