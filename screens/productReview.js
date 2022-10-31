import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/style";
import { StatusBar } from "expo-status-bar";

export default function ProductReview(){
    return (
        <>
        <StatusBar style='light' backgroundColor={'#223'} translucent={false} />
        <View style={styles.container}>
            <Text>This is the Product Reviews Page</Text>
        </View>
        </>
    )
}