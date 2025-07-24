import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
export default function Conf()
{

     const { width, height } = useWindowSize()
     return (
       <Confetti width={width}
         height={height} initialVelocityX={5} initialVelocityY={5} 
       />
     )
}