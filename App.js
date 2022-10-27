import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './components/header';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then((data)=>{
      setProducts([...data]);
      // console.log(products);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, []);

  const renderItem = ({item}) =>{
    <Text style={styles.itemView}>{item.category}</Text>
  }
  return (
    <>
    <StatusBar style='light' backgroundColor={'#223'} translucent={false} />
    <View style={styles.container}>
      <Header />
      <View style={styles.mainBody}>
        {/* <Text style={styles.text}>About To Fill This Space Up!!</Text> */}
        <FlatList 
        data={products}
        keyExtractor={item=>item.id}
        renderItem={renderItem}
        />
      </View>
    </View>
    </>
  );
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
  },
  itemView: {
    width: wp('75%'),
    backgroundColor: 'tomato',
    paddingVertical: 10,
  }
});
