import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Game = ({ value }) => {
    return (
        <View>
            <Text style={styles.title}>Opponent's Guess</Text>
            <View>
                <Text style={styles.title}>{value}</Text>
            </View>
            <View style={styles.sgmebtnwrapper}>
                <View style={styles.sgamebtn}>
                <Icon name="minus" size={20} color="#fff" />
                </View>
                <View style={styles.sgamebtn}>
                    <Icon name="plus" size={20} color="#fff" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        color: "#000000",
        fontSize: 18,
    },
    sgmebtnwrapper: {
        flexDirection: "row",
        marginVertical: 10,
        justifyContent:"center",
        alignItems:"center"
    },
    sgamebtn: {
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor:"teal",
        paddingHorizontal:45,
        paddingVertical:8
    }
});

export default Game;