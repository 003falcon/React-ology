import avatar from "../../project-2/practice/imgs/user.png";

export default function Header(props) {
  return (
    <header>
      <img src={avatar} />
      <p>{props.userName}</p>
    </header>
  );
}
