import { useRef, useState } from "react"




function Debouncing() {

    let [value, setValue] = useState("");
    let inputRef = useRef(null);
    function handelInput() {
        setInterval(() => {
            setValue(inputRef.current.value)   
        }, 2000);
    }
  return (
      <>
          <input type="text"  ref={inputRef} onChange={handelInput} />
          <h3>{ value}</h3>
      
      </>
  )
}

export default Debouncing