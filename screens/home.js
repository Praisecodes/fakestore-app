import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Header from '../components/header';
import ProductList from '../components/productlist';
import { styles } from '../styles/style';

export default function Home({navigation}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then((data) => {
                setProducts([...data]);
                console.log(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <StatusBar style='light' backgroundColor={'#223'} translucent={false} />
            <View style={styles.container}>
                <Header />
                <View style={styles.mainBody}>
                    <Text style={styles.product}>Products</Text>
                    {/* {console.log(products)} */}
                    <ScrollView>
                        {
                            products.map((item) => (
                                    <ProductList item={item} nav={navigation.navigate} key={item.id} />
                                )
                            )
                        }
                    </ScrollView>
                </View>
            </View>
        </>
    )
}
