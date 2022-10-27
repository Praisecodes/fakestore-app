import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Header from './components/header';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function App() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");

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
        <Header title={title} />
        <ScrollView>
          <View style={styles.mainBody}>
            <FlatList 
              keyExtractor={(item)=>item.id}
              data={products}
              renderItem={({item})=>(
                <TouchableOpacity onPress={()=>{setTitle(item.category)}}>
                  <Text style={styles.itemView}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
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
    paddingVertical: 5,
  },
  itemView: {
    width: wp('97%'),
    backgroundColor: 'tomato',
    paddingVertical: 10,
    paddingHorizontal: 9,
    marginTop: 7,
    borderRadius: 3,
    fontSize: 20
  }
});
