import React from "react";
export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);
  // let isShown = false;
  console.log("Clicked " + isShown);
  return (
    <>
      {/*conditional rendering */}
      {/*Using lazy evaluation/short circuiting */}

      {props.setup && <p className="setup">Setup: {props.setup}</p>}
      {isShown && <p className="punchline">Punchline: {props.punchline}</p>}
      <button
        onClick={() => {
          setIsShown((prevShown) => !prevShown);
        }}
      >
        {/*Ternary operator supremacy over '&&' short circuit evaluation always */}
        {!isShown ? "Show" : "Hide"} punchline
      </button>
      <hr />
    </>
  );
}
