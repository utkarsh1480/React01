import React, { useEffect, useState } from 'react'
import GitHubContext from './GitHubContext'

export default function GitHubContextProvider({ children }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/utkarsh1480')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('GitHub fetch error:', error)
        setData(null)
      })
  }, [])

  return (
    <GitHubContext.Provider value={{ data }}>
      {children}
    </GitHubContext.Provider>
  )
}
