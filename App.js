import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/header';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ProductList from './components/productlist';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then((data) => {
        setProducts([...data]);
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
          <ScrollView>
            {
              products.map((item) => {
                return (
                  <ProductList item={item} key={item.id} />
                )
              })
            }
          </ScrollView>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
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
    fontFamily: 'Poppins-Regular',
    fontSize: 25,
    textAlign: 'left',
    width: wp('100%'),
    padding: 10,
  }
});
