import { TouchableWithoutFeedback, View, Text, Alert, StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function ProductList({ item, nav }) {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                nav('Review', {
                    itemName: item.title,
                    description: item.description,
                    price: item.price,
                    rating: item.rating.rate,
                    rateCount: item.rating.count,
                    category: item.category
                })
            }}
        >
            <View style={styles.itemView}>
                <Text style={styles.text}>
                    {(item.title.length > 20) ? item.title.substring(0, 30) + '...' : item.title}
                </Text>
                <Text style={styles.priceText}>N {Math.round(item.price * 750)}</Text>
                <Text>⭐ {item.rating.rate}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    itemView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('97%'),
        backgroundColor: 'tomato',
        paddingVertical: 10,
        marginTop: 10,
        borderRadius: 3,
        fontSize: 20,
        textAlign: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    priceText: {
        fontSize: 16,
        paddingVertical: 5,
    },
})