import React, { useEffect } from "react";
import { useState } from "react";
import {languages} from './languages.js'
import clsx from "clsx";



export default function App() {

  const [curWord, setCurWord] = useState("react");
  const [userWord,setUserWord] =useState("");
  const alphabet="abcdefghijklmnopqrstuvwxyz";

  function handleClick(char){
  if( !userWord.includes(char))
    setUserWord(userWord+char);
  }
  //using useeffect to print userword whenever it changes
  useEffect(()=>{
    console.log(userWord);
  },[userWord])

  const langElements=languages.map((langObj)=>
    <span 
    key={langObj.name} 
    className="lang-elem" 
    style={{backgroundColor:langObj.backgroundColor,color:langObj.color}}
    >{langObj.name}</span>
)

  //method 1 to convert string to array
  // const wordArr=[];
  // for(let i=0;i<curWord.length;i++){
  //   wordArr.push(curWord[i]);
  // }

  //better method to convert string to array
  const wordArr=curWord.split("");
  const wordElements=wordArr.map(
    (char,idx)=>
  <span  
  key={idx} 
  className="word-elem">
  {userWord.includes(char) ? char.toUpperCase():""}
  </span>);

  const alphabetElem=alphabet.split("").map(
    (char,idx)=>
    {
      const isGuessed = userWord.includes(char);
      const isRight = isGuessed && curWord.includes(char);
      const isWrong = isGuessed && !curWord.includes(char);

      //clsx library to conditionally add classes
      const className=clsx({
        right:isRight,
        wrong:isWrong
      });
    return <button 
    onClick={()=>handleClick(char)}
     key={idx} 
     className={className}>
     {char.toUpperCase()}
     </button>});

  return (
    <main>
      <header>
      <h1>
        Jus' Guess It!
        </h1>
        <p>
      Guess the right word within 8 attempts to save the world from  taking over!
        </p>
        </header>
      
      <div className="game-status">
        <h2>You win!</h2>
        <h4>Well done!🎉</h4>
      </div>
      <section className="game-lang">
    {langElements}
      </section>
      <section className="game-word">
        {wordElements}
      </section>
      <section className="game-alphabet">
        {alphabetElem}
      </section>
      <div className="new-game-div">

      <button className="new-game">
        New game
      </button>
      </div>
      
    </main>
  );
}
