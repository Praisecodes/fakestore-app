import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const [change, setChange] = useState("");

  return (
    <>
    <StatusBar style='light' backgroundColor={'#223'} translucent={false} />
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>
          {
            (searchInput == "") ? 'Fakestore' : searchInput
          }
        </Text>
        <View style={styles.searchBar}>
          <TextInput style={styles.input} placeholder="Search..." onChangeText={(val)=>{setChange(val)}} />
          <TouchableOpacity 
          style={styles.button}
          onPress={()=>{setSearchInput(change)}}
          >
            <Text style={styles.text}>O</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainBody}>
        <Text style={styles.text}>About To Fill This Space Up!!</Text>
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
  text: {
    fontWeight: 'bold',
    fontSize: 20
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingLeft: 10,
    marginBottom: 20
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center'
  },
  input: {
    borderColor: '#777',
    borderWidth: 1,
    width: 300, 
    marginRight: 10, 
    fontSize: 18, 
    padding: 10,
    borderRadius: 4
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
    borderRadius: 4,
    width: 50,
    height: 50,
  }, 

  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
