import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
    return (
        <>
            <View style={styles.headerContainer}>
                <View style={styles.searchBar}>
                    <TextInput style={styles.input} placeholder="Search..." />
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Ionicons name='search-outline' color={'white'} size={15} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingLeft: 10,
        marginBottom: 5,
        paddingVertical: 10,
        backgroundColor: "#223",
        color: 'white',
    },
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#fcfcfc',
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
        zIndex: 10,
    }
})