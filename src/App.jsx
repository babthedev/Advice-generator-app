import { useEffect, useState } from 'react'
import './App.css'
import Advice from './Advice'

function App() {
  const [advice, setAdvice] = useState('')
  const randomAdvice = function() {
    fetch(`https://api.adviceslip.com/advice`)
        .then(res => res.json())
        .then(data => setAdvice(data.slip))
      } 
    useEffect(randomAdvice,[]);
   
  return (
    <div className=' bg-darkBlue'>
    <div className='w-screen h-screen pt-48 bg-darkBlue'>
      <Advice advice={advice} onClick={randomAdvice}/>
    </div>
    </div>
  )
}

export default App
