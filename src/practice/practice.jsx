import {createElement} from 'react'
import { createRoot } from "react-dom/client";
//create a root
// const root=createRoot(document.getElementById('root'))
const root = createRoot(document.querySelector("#root"));
//Long before html could be directly written, the below method was used to insert html
//the below variable is a javascript object
// const reactElem=createElement("h1",null,"Assalamualaikum from createElement")

// const jsxElem=<h1>Assalamualaikum from JSX</h1>
//render a root
// root.render(jsxElem);


//composability in action
// function MainContent(){
//   return <h1>
//     React is great!
//   </h1>
// }
// root.render(<div><MainContent/></div>);

// const elem2=document.createElement('h2');
// elem2.innerText="This is imperative and not declarative coding";
// elem2.className='header';
// document.getElementById('root').appendChild(elem2)
// root.render(elem2)
  