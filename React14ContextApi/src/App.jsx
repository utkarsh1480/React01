
import './App.css'

import UserContextProvider from './Context/Usercontextprovider'
import Login from './components/Login'
import Profile from './components/Profile'
import GitHubContextProvider from './Context/GitHubContextProvider'
import GitHub1 from './components/GitHub1'
function App() {


  return (
    <GitHubContextProvider>
    <UserContextProvider>
      <h1>React 14 Context API</h1>
         <Login />
        <Profile />
        <GitHub1/>
      </UserContextProvider>
    </GitHubContextProvider>
  )
}

export default App
