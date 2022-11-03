import React, {useEffect} from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/style";
import { StatusBar } from "expo-status-bar";

export default function ProductReview({route, navigation}){
    const {itemName, description, price, rating, rateCount, category} = route.params;

    useEffect(()=>{
        navigation.setOptions({
            title: `Product Review - ${itemName}`
        })
    }, [navigation])

    return (
        <>
        <StatusBar style='light' backgroundColor={'#223'} translucent={false} />
        <View style={styles.container}>
            <Text>
                {itemName}
            </Text>

            <Text>
                {description}
            </Text>

            <Text>
                {Math.round(price*900)}
            </Text>

            <Text>
                Stars: ⭐{rating}
            </Text>

            <Text>
                People Who Voted: {rateCount}
            </Text>

            <Text>
                {category}
            </Text>
        </View>
        </>
    )
}