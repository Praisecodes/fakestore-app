import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
    },
    product: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'left',
        width: wp('100%'),
        padding: 10,
    }
});