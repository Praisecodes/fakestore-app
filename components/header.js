import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Header({title}) {
    const [searchInput, setSearchInput] = useState(title);
    const [change, setChange] = useState('');

    return (
        <>
            <View style={styles.headerContainer}>
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
        fontSize: 15
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingLeft: 10,
        marginBottom: 5,
        paddingTop: 10,
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
        width: wp('75%'),
        marginRight: 10,
        fontSize: 15,
        padding: 6,
        borderRadius: 3,
        height: 40,
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'tomato',
        borderRadius: 4,
        width: 40,
        height: 40,
    },
    headerContainer: {
        shadowOpacity: 0.2,
        shadowColor: '#333',
        shadowOffset: {width: -2, height: 4},
        shadowRadius: 3,
    }
})