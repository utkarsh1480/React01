import React,{useState} from 'react'
function Github() {
    const [data, setData] = useState([]);
    
    async function GitUser() {
        console.log("hello");
            const respose = await fetch(`https://api.github.com/users?per_page=${6}`);
        const users = await respose.json();
    
            
        
        // return promise
            setData(users);
    }
    GitUser();
  return (
      <>
          <div>
              {data.map((data) => (
                  <img src={data.avatar_url} alt="" />
             ))}
              
        </div>
      </>
  )
}

export default Github