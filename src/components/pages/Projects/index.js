import React, { useState } from 'react'

import './styles.scss'

import ProjectCard from './ProjectCard'

export default function Projects() {
  const [ repos, setRepos ] = useState([])

  const getProjects = async () => {
    await fetch('https://api.github.com/users/shyguyMatt/repos?page=1&per_page=10&sort=updated')
    .then((repos) => {
      return repos.json()
    })
    .then((repos) => {
      setRepos(repos)
    })
  }

  if(!repos.length) {
    getProjects()
    return(
      <div>Loading</div>
    )
  }

  const advanceProjects = () => {
    let tempValue = repos[0];
    let [first, ...rest] = repos;
    setRepos([...rest, tempValue])
  }

  const recedeProjects = () => {
    let tempValue = repos[9];
    let tempArray = repos;
    tempArray.pop()
    setRepos([tempValue, ...tempArray]);
  }

  const log = () => {
    console.log(repos)
  }

  return(
    <div id='PortfolioContainer'>
      <button
        onClick={advanceProjects}
      >advance</button>
      <button
        onClick={recedeProjects}
      >recede</button>
      <button
        onClick={log}
      >log</button>

{/* Focused Project */}
      <div id='focusedProject'>

    {/* Focuses Project Preview */}
        <div id='preview'>
          <h1>Preview</h1>
          <img
            src={`https://raw.githubusercontent.com/shyguyMatt/${repos[0].name}/main/public/thumbnail.png`}
            alt='Nothing here yet!'
          />     
        </div>

    {/* Focused Project Description and Links */}
        <div id='description'>
          <h1>Description</h1>
          <h2>{repos[0].name}</h2>
          <p>{repos[0].description}</p>
        </div>

      </div>
      
{/* Mini Project Carousel */}
      <div id='projectContainer'>
        <div id='projects'>
          {repos.map((repo) => {
            return(
              <ProjectCard key={repo.id} repo={repo} />          
            )
          })}
          
        </div>
      </div>      
    </div>

  )
}