import React from 'react';
import { Button, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';

const GameForm = ({ value, handleChange, resetinputVal, setisConfirm }) => {
    return (
        <View>
            <Text style={styles.title}>Start A New Game</Text>
            <View style={styles.form} blurOnSubmit={Keyboard.dismiss()}> 
                <TextInput style={styles.input} value={value} 
                onChangeText={handleChange} 
                keyboardType="decimal-pad"
                maxLength={2}
                />
                <View style={styles.formbtnwrapper}>
                    <View style={styles.formbtn}>
                        <Button onPress={resetinputVal} color="teal" title="Reset" />
                    </View>
                    <View style={styles.formbtn}>
                        <Button onPress={() => setisConfirm(true)} color="teal" title="Confirm" /> 
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        color: "#000000",
        fontSize:18,
    },
    form: {
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "50%",
        borderBottomWidth: 2,
        borderBottomColor: "teal",
        textAlign:"center"
    },
    formbtnwrapper: {
        flexDirection: "row",
        marginVertical: 10,
    },
    formbtn : {
        marginVertical:10,
        marginHorizontal:10,
        width:100
    }
});

export default GameForm;