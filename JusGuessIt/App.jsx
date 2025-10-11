import React from "react";
import {languages} from './languages.js'
console.log(languages);
export default function App() {

  const langElements=languages.map((langObj)=>
    <span className="elem" style={{backgroundColor:langObj.backgroundColor,color:langObj.color}}>{langObj.name}</span>
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
      
    </main>
  );
}
