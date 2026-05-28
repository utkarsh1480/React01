import { useState, useRef } from 'react';

function Timer() {
    let [count, setCount] = useState(0);
    let IntervalId = useRef(null);
    function handelStart() {
        if(IntervalId.current != null) {
            return;
        }
       IntervalId.current = setInterval(() => {
            setCount(count => (count + 1));
        },1000)
       
    }
    function handelStop() {
        clearInterval(IntervalId.current);
        IntervalId.current = null;
    }
    function handelReset() {
        clearInterval(IntervalId.current);
        IntervalId.current = null;
        setCount(0);
    }
    function handleForward() {
        setCount(count => count + 5);
    }
    function handelBackward() {
        setCount(count => count - 5);
    }
    return (
      <>
      <h1>{count}</h1>
      <button onClick={handelStart}>Start</button>
      <button onClick={handelStop}>Stop</button>
            <button onClick={handelReset}> Restart</button>
            <button onClick={handleForward}>Forward</button>
            <button onClick={handelBackward}>Backward</button>
        </>
  )
}

export default Timer