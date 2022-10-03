import { View, Text, StyleSheet } from "react-native"
import React from "react"

export default function List({ data }) {
    return data.map((dataPoint) => {
        return (
            <View key={dataPoint} style={styles.listItem}>
                <Text style={styles.itemText}>{dataPoint}</Text>
            </View>
        )
    })
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginHorizontal: 12,
        marginVertical: 4,
        backgroundColor: "#b7ddff",
    },
    itemText: {
        color: "#121f2a",
        textAlign: "center",
    },
})
