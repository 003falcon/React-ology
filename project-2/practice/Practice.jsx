import React from 'react';
import Contact from "./Contact";
import jokesData from "./jokesData.js";
import Joke from './Joke.jsx'

export default function App()
{
  const [msgs,setMsgs] = React.useState(['a']);

  return (
    <>
    <h1>
      {msgs.length >1? "You have " +msgs.length+" unread messages" : msgs.length==1?"You have 1 unread message":"You are all caught up!"}
    </h1>
    </>
  )
} 
// export default function Practice()
// {
//   console.log(jokesData)
//   const jokesArr=jokesData.map((joke)=>{
//     return <Joke setup={joke.Setup} punchline={joke.punchline}/>

//   })
//   return (
//     <main>
//     {jokesArr}
//     </main>
//   )
// }

// export default function Practice()            
// {
//   return (
//     <div className="contacts">
//     <Contact num={1} img_name="./imgs/mr-whiskerson.png" title="Mr.Whiskerson" ph_no="(212) 555-1234" mail_id="mr.whiskaz@catnap.meow"/>
//     <Contact num={2} img_name="./imgs/fluffykins.png" title="Fluffykins" ph_no="(212) 555-2345" mail_id="fluff@me.com"/>
//     <Contact num={3} img_name="./imgs/felix.png" title="Felix" ph_no="(212) 555-4567" mail_id="thecat@hotmail.com"/>
//     <Contact num={4} img_name="./imgs/pumpkin.png" title="Pumpkin" ph_no="(0800) CAT KING" mail_id="pumpkin@scrimba.com"/>
//     </div>
      
//   );
// }
//While string props can be passed as a string directly ,
// non string props can be passed inside curly braces directly as in
//{10} , {true} , {[id:"" ,roll_no:""]}