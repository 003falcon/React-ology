export default function Dice(props) {
  // let name = !props.isHeld ? "dice-button" : "dice-button-held";
  const styles = { backgroundColor: props.isHeld ? "#59E391" : "white" };
  return (
    <button
      style={styles}
      className="dice-button"
      onClick={() => props.hold(props.id)}
      //m-2 onClick={props.hold}
    >
      {props.value}
    </button>
  );
}
