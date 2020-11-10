import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import StartGame from './components/StartGame';
import Game from './components/Game';
import GameForm from './components/GameForm';
import Header from './components/Header';
import GameOver from './components/GameOver';

export default function App() {

  const [value, setVal] = useState("");

  const [isConfirm, setisConfirm] = useState(false);

  const [isStartGame, setStartGame] = useState(false);

  const [number, setNumber] = useState([]);

  const [counter, setCounter] = useState(0);

  const [isGameOver, setGameOver] = useState(false);

  const handleChange = (inputVal) => {
    setVal(inputVal);
  };

  const resetinputVal = () => {
    setVal("");
  };

  const genRandNum = (sign) => {
    setCounter(counter + 1);
    if (sign === "-") {
      console.log("you press -");
    } else {
      console.log("you press +");
    }
  };

  useEffect(() => {
    if (isStartGame) {
      let num = Math.floor(Math.random() * 99);
      setNumber([{ counter: counter, number: num }]);
    }
  }, [counter]);

  return (
    <View>
      <StatusBar style="auto" />
      <Header />
      <GameForm
        value={value}
        handleChange={handleChange}
        resetinputVal={resetinputVal}
        setisConfirm={setisConfirm}
      />
      {!!isConfirm && <Game value={value} setStartGame={setStartGame} />}

      {!!isStartGame && <StartGame value={value} number={number} number={number} genRandNum={genRandNum} />}

      {!!isGameOver && <GameOver gameOver={gameOver} />}

    </View>
  );
};

