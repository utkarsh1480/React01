import React from 'react'
import { useContext } from 'react'
import GitHubContext from '../Context/GitHubContext'

function GitHub1() {
  const { data } = useContext(GitHubContext)

  if (!data) {
    return <div>Loading GitHub data...</div>
  }

  return <div>{data.followers}</div>
}

export default GitHub1