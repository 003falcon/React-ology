import React from 'react'
import WindowTracker from './WindowTracker'
export default function App()
{
  const [show,setShow]=React.useState(true);
  function toggleShow()
  {
    setShow(prev=>!prev);
  }
  return (
    <main className='container'>
      <button onClick={toggleShow}>Toggle Window Tracker</button>
      {show ? <WindowTracker/> :null}
    </main>
  )
}