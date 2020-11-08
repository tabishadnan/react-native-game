import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.title}>React Native Game</Text>
        </View>
     );
};

const styles = StyleSheet.create({
    header : {
        paddingTop:40,
        justifyContent:"center",
    },
    title : {
        padding:20,
        color: "#fff",
        backgroundColor: "teal",
        textAlign:"center",
        fontSize:20, 
    }
});
 
export default Header;