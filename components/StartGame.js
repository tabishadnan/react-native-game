import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Game = ({ userNum, number, userGuessNum, setSign}) => {

    return (
        <View>
            <Text style={styles.title}>Opponent's Guess</Text>
            <View>
                <Text style={styles.title}>{number}</Text>
            </View>
            <View style={styles.sgmebtnwrapper}>
                <View style={styles.sgamebtn}>
                    <Icon onPress={() => {
                        userGuessNum();
                        setSign("-");
                    }} name="minus" size={20} color="#fff" />
                </View>
                <View style={styles.sgamebtn}>
                    <Icon onPress={() => {
                        userGuessNum();
                        setSign("+");
                    }} name="plus" size={20} color="#fff" />
                </View>
            </View>
            <View>
                <FlatList
                    data={userNum}
                    keyExtractor={(item, index) => item.userNum.toString()}
                    renderItem={(data) => <View style={styles.listwrapper}>
                        <Text>
                        #{data.item.index}
                    </Text>
                    <Text>
                        {data.item.userNum}
                    </Text>
                    </View>}
                />
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
        justifyContent: "center",
        alignItems: "center"
    },
    sgamebtn: {
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: "teal",
        paddingHorizontal: 45,
        paddingVertical: 8
    },
    listwrapper: {
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems:"center",

    }
});

export default Game;