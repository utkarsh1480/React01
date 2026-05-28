import React, { useRef } from 'react'
// import { useState } from 'react'
function Login() {
    // let [email, setEmail] = useState("");
    // let [password, setPassword] = useState("");
    const emailRef = useRef(null)
    const passRef = useRef(null)
    // function handelEmail(e) {
    //     console.log(e.target.value);
    //     setEmail(e.target.value);
       
    // }

    // function handelPassword(e) {
    //     console.log(e.target.value);
    //     setPassword(e.target.value);
    // }

    function handelSubmit(e) {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passRef.current.value);
    }
  return (
      <>
          <h1>Login</h1>
          <input type="text"  placeholder='Enter-email' ref={emailRef}/>
          <input type="text" placeholder='Enter-password'  ref={passRef}/>
          <button type='submit' onClick={handelSubmit}>Submit</button>
      </>
  )
}

export default Login