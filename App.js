import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import StartGame from './components/StartGame';
import Game from './components/Game';
import GameForm from './components/GameForm';
import Header from './components/Header';

export default function App() {

  const [value, setVal] = useState("");

  const [isConfirm, setisConfirm] = useState(false);

  const [isStartGame, setStartGame] = useState(false);

  const handleChange = (inputVal) => {
    setVal(inputVal);
  };

  const resetinputVal = () => {
    setVal("");
  }

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

      {!!isStartGame && <StartGame value={value} />}

    </View>
  );
};

