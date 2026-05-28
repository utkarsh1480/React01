
import './App.css'
import {Link, Navigate, Route, Routes } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Login from './components/Login'
import PageNotFound from './components/PageNotFound'
import College from './components/College'
import Student from './components/Student'
import Branch from './components/Branch'
import Departemant from './components/Departement'
function App() {


  return (
    <>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/about' element={<About/> } />
        
     </Routes> */}
      {/* <Header/> */}
      <Routes>
        <Route element={<Header />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
        </Route>
        
        <Route path='/college' element={<College />}>
          
          <Route index element={<Student/> } />
          <Route path='departement' element={<Departemant/> } />
          <Route path='branch' element={<Branch />} />
          
        </Route>
        {/* <Route path='/*' element={<PageNotFound/>} /> */}
        <Route path='/*' element={ <Navigate to='/login'/>} />
      </Routes>
    </>
  )
}

export default App
