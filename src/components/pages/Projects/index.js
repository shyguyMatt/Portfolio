import React, { useState } from 'react'

import './styles.css'

import ProjectCard from './ProjectCard'

export default function Projects() {
  const [ repos, setRepos ] = useState('')

  const getProjects = async () => {
    console.log('loading repos')
    await fetch('https://api.github.com/users/shyguyMatt/repos?sort=updated')
    .then((repos) => {
      return repos.json()
    })
    .then((repos) => {
      setRepos(repos)
      console.log(repos)
    })
  }

  if(!repos) {
    getProjects()
    return(
      <div>Loading</div>
    )
  }

  // console.log(repos)

  return(
    <div id='projectContainer'>
      <div id='projects'>
        {repos.map((repo, i=0) => {
          i++
          if(i > 10) return;
          return(
            <ProjectCard key={repo.id} repo={repo} />          
          )
        })}
        
      </div>
    </div>
  )
}