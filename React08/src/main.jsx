import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import SearchBox from './AcessDom.jsx'
import Timer from './Timer.jsx'
import Login from './Login.jsx'
import Debouncing from './Debouncing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Debouncing/>
  </StrictMode>,
)
