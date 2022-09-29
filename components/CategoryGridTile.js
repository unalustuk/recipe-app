import { View, Text, Pressable, StyleSheet, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={styles.gridContainer}>
            <Pressable
                android_ripple={{ color: "ccc" }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.pressed : null,
                ]}
                onPress={onPress}
            >
                <View
                    style={[styles.innerContainer, { backgroundColor: color }]}
                >
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridContainer: {
        flex: 1,
        margin: 16,
        height: 150,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    button: {
        flex: 1,
    },
    pressed: {
        opacity: 0.75,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
    },
})
