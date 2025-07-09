import pads from "./pads";
import React from "react";
import Pads from "./Pads.jsx";
export default function App() {
  const [soundPads, setSoundPads] = React.useState(pads);

  function switchOff(id) {
    setSoundPads(prevPads=>prevPads.map(item=>{
      return item.id===id ? {...item,on:!item.on} :item
    }
    )
    )
    // for (var i = 0; i < soundPads.length; i++) {
    //   if (soundPads.id == id) {
    //     soundPads.on = false;
    //   }
    // }
    console.log(id);
  }
  const buttonElem = soundPads.map((pad) => (
    //note:Inline css takes precedence over css imported from a file
    <Pads off={switchOff} id={pad.id} key={pad.id} color={pad.color} isOn={pad.on} />
  ));
  return (
    <main>
      <div className="pad-container">{buttonElem}</div>
    </main>
  );
}
