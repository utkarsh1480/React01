import { useState } from 'react'

function App() {

  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [age, setAge] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, age)
  }
  return (
    <>
      <h1>React 09</h1> 
      <div> 
      <input type="text" placeholder='Enter your name'  value={name} onChange={(e) => setName(e.target.value) }/>
      <input type="text" placeholder='Enter your email'  value={email} onChange={(e) => setEmail(e.target.value) }/>
        <input type="number" placeholder='Enter your age' min={10} max={60} value={age} onChange={(e) => setAge(e.target.value) }/>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default App
