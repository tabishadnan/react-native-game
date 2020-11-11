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

  const [number, setNumber] = useState(null);

  const [userNum, setUserName] = useState([]);

  const [isGameOver, setGameOver] = useState(false);

  const [sign, setSign] = useState("-");

  const [counter, setCounter] = useState(0);

  const handleChange = (inputVal) => {
    setVal(inputVal);
  };

  const resetinputVal = () => {
    setVal("");
  };

  const genRandNum = () => {
    let num = Math.floor(Math.random() * 99);  
    setNumber(num); 
  };

  const userGuessNum = () => {
    setCounter(counter + 1);
    let num = Math.floor(Math.random() * 99);  
    setUserName([...userNum, {userNum : num, counter:counter}]);
  };

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
      {!!isConfirm && <Game value={value} setStartGame={setStartGame} genRandNum={genRandNum} />}

      {!!isStartGame && <StartGame value={value}
        userNum={userNum}
        userGuessNum={userGuessNum}
        setSign={setSign}
      />}

      {!!isGameOver && <GameOver gameOver={gameOver} />}

    </View>
  );
};

