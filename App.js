import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback, FlatList, Alert } from 'react-native';
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
        <Header />
        <ScrollView>
          <View style={styles.mainBody}>
            <FlatList 
              keyExtractor={(item)=>item.id}
              data={products}
              renderItem={({item})=>(
                <TouchableWithoutFeedback onPress={()=>{
                  setTitle(item.id);
                  Alert.alert('Message', `Here is the ID of the clicked item ${item.id}`,[
                    {text: 'Seen!', onPress: ()=>{}}
                  ])
                }}>
                  <Text style={styles.itemView}>{item.title}</Text>
                </TouchableWithoutFeedback>
              )}
            />
            <TouchableWithoutFeedback onPress={()=>{setTitle("Fakestore")}}>
              <Text style={styles.actionBtn}>Change</Text>
            </TouchableWithoutFeedback>
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
    marginTop: 10,
    borderRadius: 3,
    fontSize: 20
  },
  actionBtn: {
    backgroundColor: '#00ff00',
    color: 'white',
    paddingVertical: 7,
    paddingHorizontal: 40,
    fontSize: 30,
    borderRadius: 5,
    marginTop: 14,
    color: 'black',
  }
});
