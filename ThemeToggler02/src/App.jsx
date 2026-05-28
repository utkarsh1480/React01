
import './App.css'
import { useState } from 'react'
import { ThemeTogglerProvider } from './context/ThemeToggle'
import Card from './components/Card'
function App() {
const [theme,setTheme] = useState('')

  function darktheme() {
    setTheme('dark')
  }

  function lightTheme() {
    setTheme('light')
  }
  

  return (
    <>
      <ThemeTogglerProvider value={{ theme, darktheme, lightTheme }}>
        <div className={theme === "dark" ? "dark bg-black text-white h-screen" : "bg-white text-black h-screen"}>
          <Card />
        </div>
      </ThemeTogglerProvider>
    </>
  )
}

export default App
