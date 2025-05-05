import React from "react";

export default function App() {
  // const result=React.useState('Yes')
  // console.log(result)

  //the first destructured value (state variable) can be named whatever we want
  //the convention for second destructured value (state setter function) should start with set followed by the first destructured value
  // let [isImportant ,setIsImportant] =React.useState('Yes');

  // function handleClick()
  // {
  //   setIsImportant('Definitely')
  // }

  // return (
  //   <main>
  //     <h1>Is state important to know</h1>
  //     <button onClick={handleClick} className="value"> {isImportant}</button>
  //   </main>
  // )

  // let [value, setValue] = React.useState(0);
  // function handleClickAdd() {
    //value+=1;NEVER modify state variable
    // rather
    //1.
    // setValue(value+1);

    //also a better approach when current state value depends on previous state
    // value is to use a callback function like this
    //2.without arrow func
    // setValue(function(prevValue){
    //   return prevValue+1;
    // })
    //3.with arrow func
    // setValue((prevValue) => prevValue + 1);

    //Notice how approach 3 solves approach 1's drawback by running this example
    //in this and next function
    //eg:
    // setValue(prevValue=>prevValue+1)
    // setValue(prevValue=>prevValue+1)
    // setValue(prevValue=>prevValue+1)
  // }
  // function handleClickSub() {
    //1.
    // setValue(value-1);
    //3.
    // setValue((prevValue) => prevValue - 1);
    //Notice how approach 3 solves approach 1's drawback by running this example
    //in this and next function
    //eg:
    // setValue(value-1);
    // setValue(value-1);
    // setValue(value-1);
  // }
  // return (
  //   <main className="container">
  //     <h1>smthng</h1>
  //     <div className="counter">
  //       <h2>{value}</h2>
  //       <button onClick={handleClickSub}>-</button>
  //       <button onClick={handleClickAdd}>+</button>
  //     </div>
  //   </main>
  // );
  
  let [choice ,setChoice]=React.useState('yes');

  function handleClick()
  {
    setChoice(prevChoice => prevChoice=='yes' ?'no':'yes')
    
  }
  return(
    <main>
      <h1>Do you like Biryani?</h1>
      <button onClick={handleClick} className="value" aria-label={`Current choice is ${choice}.Click to change it`}>{choice}</button>
    </main>
  )
  //object practice understood(toggle favourite star icon of identity)
}
