import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Game = ({ value, setStartGame }) => {
    return (
        <View>
            <Text style={styles.title}>You Selceted</Text>
            <View>
                <Text style={styles.title}>{value}</Text>
            </View>
            <View style={styles.startgamebtn}>
                <Button onPress={() => setStartGame(true)} color="teal" title="  Start Game  " />
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
    startgamebtn: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 10,
        marginHorizontal: 10,
    }
});

export default Game;