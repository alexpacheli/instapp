import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

function Header() {
    return (
        <View style={styles.header}>
            
            <TouchableOpacity>
                <Image
                    source={require('../img/logo.png')}
                    style={styles.logo}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                    source={require('../img/send.png')}
                    style={styles.send}
                />
            </TouchableOpacity>
            
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 55,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 0.2,
        shadowColor: '#000',
        elevation: 5

    },
    send: {
        width: 23,
        height: 23
    }
})