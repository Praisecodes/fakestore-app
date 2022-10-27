import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Header() {
    const [searchInput, setSearchInput] = useState("");
    const [change, setChange] = useState("");

    return (
        <>
            <View>
                <Text style={styles.headerText}>
                    {
                        (searchInput == "") ? 'Fakestore' : searchInput
                    }
                </Text>
                <View style={styles.searchBar}>
                    <TextInput style={styles.input} placeholder="Search..." onChangeText={(val) => { setChange(val) }} />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { setSearchInput(change) }}
                    >
                        <Text style={styles.text}>O</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
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
})