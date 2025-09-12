import Dice from "./Dice";
import { useState } from "react";
// import React from 'react'

import Conf from "./Conf";

export default function App() {
  const [diceArr, setDiceArr] = useState(allNewDice());
  const num = 3;
  let display = "";
  let gameWon = false;
  if (
    diceArr.every((die) => die.isHeld) &&
    diceArr.every((die) => die.value == diceArr[0].value)
  ) {
    gameWon = true;
    display = diceArr[0].value == num ? "Congratulations! You have won the game,Here's the codename to the next hint: EF5" : "Oops ,Try Again :(";
    // console.log("Game Won!");
  }

  const buttonText = gameWon ? "New Game" : "Roll";
  function resetDice() {
    setDiceArr(allNewDice());
  }
  function allNewDice() {
    //method 1
    const arr = [];
    for (var i = 0; i < 10; i++) {
      const cur = Math.ceil(Math.random() * 6);
      arr.push({ value: cur, isHeld: false, id: i });
    }
    //method 2
    // const arr=new Array(10).fill(0).map(()=>Math.ceil(Math.random()*6));

    // console.log(arr);
    return arr;
  }
  const diceElem = diceArr.map((obj, index) => (
    <Dice
      key={index}
      value={obj.value}
      isHeld={obj.isHeld}
      hold={hold}
      //m-2
      // hold={() => hold(index)}
      id={index}
    />
  ));

  function hold(id) {
    setDiceArr((prev) => {
      return prev.map((elem) => {
        return id == elem.id ? { ...elem, isHeld: !elem.isHeld } : elem;
      });
    });
    // console.log(diceArr);
    // for(var i=0;i<diceArr.length;i++)
    // {
    //   if(diceArr==Array(diceArr.length).fill(diceArr[i]))
    //     console.log("you won")
    //   else
    //     break;
    // }
  }
  function rollAllDice() {
    // setDiceArr(allNewDice());
    setDiceArr((prev) => {
      return prev.map((elem) => {
        return elem.isHeld
          ? elem
          : { ...elem, value: Math.ceil(Math.random() * 6) };
      });
    });
  }

  return (
    <main>
      {gameWon && <Conf />}
      <h1 className="title">Tenzies</h1>
      <p className="game-rules">
        {" "}
        Roll until all the dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">
        {/* <Dice value={1}/>
    <Dice value={2}/>
    <Dice value={3}/>
    <Dice value={4}/>
    <Dice value={5}/>
    <Dice value={6}/>
    <Dice value={1}/>
    <Dice value={2}/>
    <Dice value={3}/>
    <Dice value={4}/> */}
        {diceElem}
      </div>
      <button
        className="roll-button"
        onClick={gameWon ? resetDice : rollAllDice}
      >
        {buttonText}
      </button>
      {gameWon &&
        alert(display)}
    </main>
  );
}
