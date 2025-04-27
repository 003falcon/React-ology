import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(<App />);

// import { createRoot } from "react-dom/client";
// import { Fragment } from "react";
// import Header from "./practice/components/Header";
// import Footer from "./practice/components/Footer";
// import MainContent from "./practice/components/MainContent";
// const root = createRoot(document.getElementById("root"));

// function Staticpage() {
//   return (
//     <div>
//       <img src="../src/assets/react.svg" width="40px" />
//       <h1>Fun Facts about React</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100k stars on github</li>
//         <li>Is maintained by Meta</li>
//         <li>Powers thousands of enterprise apps,including mobile apps</li>
//       </ul>
//     </div>
//   );
// }

// //use Pascal case for naming components
// function Page() {
//   {
//     /* <> equivalent to <Fragment>
// and </> equivalent to </Fragment>*/
//   }
//   return (
//     <>
//       {/* following a parent-child hierarchy */}
//       <Header />
//       <MainContent />
//       <Footer />
//     </>
//   );
// }
// root.render(
//   // <Staticpage/>
//   <Page />
// );
