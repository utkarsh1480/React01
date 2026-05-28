import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { RouterProvider } from 'react-router-dom'
// import Layout from './Layout.jsx'
import { BrowserRouter } from 'react-router-dom'
// const router = createBrowserRouter([
//   {
//     Path: '/',
//     element : <Layout/>,
//     children : [
//       {
//         path : '',
//         element : <Home/>
//       }
//     ]
//   }
//   ])
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
  <App/>
    </StrictMode>
  </BrowserRouter>,
)
