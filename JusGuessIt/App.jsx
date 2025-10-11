import React from "react";
import { useState } from "react";
import {languages} from './languages.js'
export default function App() {

  const [curWord, setCurWord] = useState("react");

  //method 1 to convert string to array
  // const wordArr=[];
  // for(let i=0;i<curWord.length;i++){
  //   wordArr.push(curWord[i]);
  // }

  //better method to convert string to array
  const wordArr=curWord.split("");
  const wordElements=wordArr.map((char,idx)=><span  key={idx} className="word-elem">{char.toUpperCase()}</span>);

  const langElements=languages.map((langObj)=>
    <span key={langObj.name} className="lang-elem" style={{backgroundColor:langObj.backgroundColor,color:langObj.color}}>{langObj.name}</span>
)
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
      
    </main>
  );
}
