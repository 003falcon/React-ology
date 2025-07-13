import {useState,useEffect} from 'react'
export default function WindowTracker()
{
  const [windowWidth , setWindowWidth]=useState(window.innerWidth);

  //useEffect allows for EscapeHatch and returns a function
  useEffect(() => {
    function watchWidth()
    {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize',watchWidth); 
    //side-effects when they need to be disabled or hidden need to be removed from DOM
    return () => {
      console.log('cleaning up...')
      window.removeEventListener('resize',watchWidth); 
    }
  }, [])
  
  return (
    <h1>Window width:{windowWidth}</h1>
  )
}