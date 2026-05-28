import { useRef, useState } from 'react'


import Video from './Video'


function App() {
  const [time, setTime] = useState(0)
  const intervalIdref = useRef(null);
  
  
  function handleStart() {
    if (intervalIdref.current != null) {
      return;
    } 
      intervalIdref.current = setInterval(() => {
      setTime(time => time + 1)
      }, 1000)

  }
  function handleRestart() {
    clearInterval(intervalIdref.current);
    setTime(0)
   

 }
  function handleStop() {
    clearInterval(intervalIdref.current);
    intervalIdref.current = null;
  }

  return (
    <>
      <h1>{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleRestart}>Reset</button>
      <Video />
    </>

  )
}

export default App
