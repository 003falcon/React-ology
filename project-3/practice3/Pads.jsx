import React from "react";

export default function Pads(props) {
  const styles = {
    backgroundColor: props.color,
  };
  // const [cur, setCur] = React.useState(props.isOn);
  // function toggle() {
  //   setCur((prevCur) => !prevCur);
  // }
  // const name=;
  return (
    <button
      onClick={()=>props.off(props.id)}
      className={props.isOn ? "on" : ""}
      style={styles}
    ></button>
  );
}
