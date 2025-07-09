import ReactDOM from "react-dom/client";
// import App from "./App";
import Form from "./Form";
// function App() {
//convention for event handlers
// to use handle and then the event with camel case
// function handleClick() {
//   {
//     console.log("I was clicked");
//   }
// }
// function handleHoverOverImage()
// {
//   console.log('Hovering over image')
// }

// return (
//   <main className="container">
//     <img onMouseOver={handleHoverOverImage} src="./image.png" alt="image from" />
//     <button onClick={handleClick}>click me</button>
// {
/* <div
      onMouseEnter={e => console.log('onMouseEnter (parent)')}
      onMouseLeave={e => console.log('onMouseLeave (parent)')}
    >
      <button
        onClick={e => console.log('onClick (first button)')}
        onMouseDown={e => console.log('onMouseDown (first button)')}
        onMouseEnter={e => console.log('onMouseEnter (first button)')}
        onMouseLeave={e => console.log('onMouseLeave (first button)')}
        onMouseOver={e => console.log('onMouseOver (first button)')}
        onMouseUp={e => console.log('onMouseUp (first button)')}
      >
        First button
      </button>
      </div> */
// }
// </main>
// );
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// document.getElementById("my-form").addEventListener("submit", function (event) {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   const firstName = formData.get("firstName");
//   const lastName = formData.get("lastName");
//   submitViaAPI({ firstName, lastName });
// });
// function submitViaAPI(data) {
//   console.log(data);
//   console.log("Submitted!");


ReactDOM.createRoot(document.getElementById("root")).render(<Form />);
