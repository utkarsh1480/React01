// import { useEffect, useState } from "react";
 
import Github from "./components/GitHub/Github"

function App() {
  // const [user, setUser] = useState([]);
  // // const [name, setName] = useState("");
  // const [count, setCount] = useState(30);

  // useEffect(() => {
  //   async function fetchUser() {
  //     const respose = await fetch(`https://api.github.com/users?per_page=${count}`);
  //     const users = await respose.json(); // return promise 
  //     setUser(users);

  //   }

  //   fetchUser();
  // },[count])
 
  // function handeChange(e) {
  //   setName(e.target.value.toUpperCase());
  // }

 

  return (
    <>
      {/* <h1>GitHub User</h1>
      <input type="number " value={count} onChange={(e) => (setCount(e.target.value))} />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>

      {
        user.map((user) => (
          <img src={user.avatar_url} height={"150px"} width={"150px"} key={user.login}  />
        ))
        }
      </div> */}
      <Github/>
    </>
  )
}

export default App
