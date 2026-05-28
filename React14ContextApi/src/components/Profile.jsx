import React, { useContext } from 'react'
import UserContext from '../Context/Usercontext'
import GitHubContext from '../Context/GitHubContext'


function Profile() {

  const { user } = useContext(UserContext);
  const { data } = useContext(GitHubContext)

  if (!user) return <div>Please Login</div>
  return (
    <>
    <div> welcome {user.username}
     
      </div>
      <div>{data.followers}</div>
      
    </>
  )
}

export default Profile