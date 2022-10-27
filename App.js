import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
    <StatusBar style='light' translucent={false} />
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>
          {
            (searchInput == "") ? 'Fakestore' : searchInput
          }
        </Text>
        <View style={styles.searchBar}>
          <TextInput style={styles.input} placeholder="Search..." onChangeText={(val)=>{setSearchInput(val)}} />
          <TouchableOpacity 
          style={styles.button}
          >
            <Text style={styles.text}>O</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
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
    fontSize: 20, 
    padding: 10
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
    borderRadius: 4,
    width: 50,
    height: 50,
  }
});
