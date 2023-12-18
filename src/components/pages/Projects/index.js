import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'

import './styles.scss'

import ProjectCard from './ProjectCard'
import { images } from './../../../assets/images/previews'

export default function Projects() {
  const projects = require('./../../../assets/projects.json')
  const [ repos, setRepos ] = useState(projects)
  const [loadSvg, setLoadSvg] = useState(false)

  const advanceProjects = () => {
    let tempValue = repos[0];
    let [first, ...rest] = repos;
    setRepos([...rest, tempValue])
    setLoadSvg(false)
  }

  const recedeProjects = () => {
    let tempValue = repos[4];
    let tempArray = repos;
    tempArray.pop()
    setRepos([tempValue, ...tempArray]);
    setLoadSvg(false)
  }

  const log = () => {
    console.log(repos)
  }

  const imgError = () => {
    setLoadSvg(true)
  }

  return(
    <div id='PortfolioContainer'>
      <button onClick={log}>log</button>

{/* Focused Project */}
      <div id='focusedProject'>

    {/* Focuses Project Preview */}
        <div id='preview'>
          <h1>Preview</h1>
          {loadSvg?
            <svg id='svgMain'
              viewBox='0 0 192 100'
              width='1200px'
              height='627px'
            >
              <rect
                x='0'
                y='0'
                fill='#69DBDF'
              />
              <text
                x='50%'
                y='50%'
                textAnchor='middle'
                fill='white'
              >{repos[2].name}</text>
            </svg>
            :
            <img
              src={images[repos[2].id]}
              alt='nothing here yet'
              onError={imgError}
            />          
          }  
        </div>

    {/* Focused Project Description and Links */}
        <div id='description'>
          <h1>Description</h1>
          <h2>{repos[2].name}</h2>
          <p>{repos[2].description}</p>
          <div id='technologies'>
            <ul>
              {repos[2].skills.map((skill) => {
                return(
                  <li>{skill}</li>
                )
              })}
            </ul>
          </div>
        </div>

      </div>
      
{/* Mini Project Carousel */}
      <div id='projectContainer'>
        <button onClick={recedeProjects}><FontAwesomeIcon icon={faChevronLeft} size="2xl" /></button>
        <div id='projects'>
          {repos.map((project, i=0) => {
            i++
            if(i===3)return(
              <div id='spacer' key={project.id}></div>
            )
            return(
              <ProjectCard key={project.id} project={project} />          
            )
          })}
        </div>
        <button onClick={advanceProjects}><FontAwesomeIcon icon={faChevronRight} size="2xl" /></button>
      </div>      
    </div>

  )
}