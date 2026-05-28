
import './App.css'
import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/theme'
import Card from './components/Card'
import ThemeButton from './components/ThemeButton'
function App() {
  const [Theme, setTheme] = useState('light')
  
  const DarkTheme = () => {
    setTheme('dark')
  }
  const LightTheme = () => {
    setTheme('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(Theme)   
   }, [Theme])

  return (
    <ThemeProvider value={{ Theme, DarkTheme, LightTheme }}>
      
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="70% max-w-2xl mx-auto">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeButton />
            </div>
             <Card/>
            <div className="w-full max-w-sm mx-auto">

            </div>
      </div>
      </div>
    </ThemeProvider>

  )
}

export default App
