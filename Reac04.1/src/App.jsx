import { useState } from "react";
import Comp from "./components/Comp";
function App() {
 
  // function IncreseCounter() {
  //   count++;
  //   console.log(count);
  //   const para = document.querySelector('h1');
  //   para.textContent = `Counter : ${count}`
  //   same for button also
  //   lest suppose count used  five times in code 


  // }
  const product ={
   val : 20,
   price : 30
  }
  let [count, setCount] = useState(0);
  function Increment() {
setCount(5);
setCount(count + 1);

  }
  return (
    <>
      {/* <h1>Counter : {count}</h1>
      <button onClick={Increment}>Increse Count</button> */}
      <Comp prod={product}/>
    </>
  )
}

export default App
