import { useState } from 'react'
import Child from './child'
import Post from './Post'
import React from 'react'
import AmazonList from './AmazonList'

function App() {
  const [count, setCount] = useState(0)
 const [number,setNumber] = useState(100000);
  const prime = React.useMemo(() => 
    function calculatePrime() {

      let total = 0;

      if (number > 1)
        total++;

      for (let i = 3; i <= number; i++) {
        total++;
        for (let j = 2; j < i; j++) {
          if (i % j == 0) {
            total--;
            break;
          }
        }
      }

      return total;

    },[number])
 
   
  
  
 
  console.log("App component rendered")
  const obj = React.useMemo(() => {
    return { name: "Utkarsh", age: 22 }
  }, [])
  return (
    <>  
      <h1 className='m-5'>Counter : {count}</h1>
      <button onClick={() => setNumber(number + 10000)}>Increment Number</button>
      <h3>Total Prime Number: {prime}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <Child number={1000} />
      <Post props={obj} />
      <AmazonList />
    </>
  )
}

export default App
