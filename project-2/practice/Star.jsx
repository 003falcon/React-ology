import starFilled from "./imgs/star-filled.png";
import starEmpty from "./imgs/star-empty.png";

export default function Star(props) {
  let starIcon = props.isFavourite ? starFilled : starEmpty;

  return (
    <button
      aria-pressed={props.isFilled}
      aria-label={
        props.isFavourite ? "Remove from favourites" : "Add to favourites"
      }
      className="favourite-button"
    >
      <img
        src={starIcon}
        alt={props.isFavourite ? "filled star icon" : "empty star icon"}
        className="favourite"
      />
    </button>
  );
}
