import React from 'react'
export default function App(props)
{
  const [starWarsData,setStarWarsData] = React.useState(null);
  const [count,setCount] = React.useState(0);

  //The below log shows this component being rendered continously
  // console.log('in component');

  //The reason being:
  //When a fetch is made , it takes time to fulfill the request .Till then,the below html is returned as null.When the response arrives it converts into json and sets it as the state value.Since react re-renders the component upon change of state value,the fetch is made again and then the state is changed and the loop continues infinitely.

  // fetch('https://api.restful-api.dev/objects')
  // .then(res=> res.json())
  // .then(data => setStarWarsData(data));
  //useEffect() function runs after component is rendered
  
  //dependency array contains fields whose values if changed between consecutive renders , it allows the component to re-render.
  React.useEffect(()=>
  {
    // console.log('in effect()');
    fetch('https://api.restful-api.dev/objects')
    .then(res=> res.json())
    .then(data => setStarWarsData(data));

  },[count]);
  console.log('component rendered'); 
  return (
    <div>
      {/* <pre>{JSON.stringify({name:"Luke"},null,2)}</pre> */}
      <h2>{count}</h2>
      <button onClick={()=>setCount(prev=>prev+1)}>Add</button>
      <pre>{JSON.stringify(starWarsData,null,2)}</pre>
    </div>
  );
}
//Side effects are changes that are made with / to an outside system ,eg localstorage,api.maintaining state,keeping ui sync with data and rendering dom elements are NOT side effects.