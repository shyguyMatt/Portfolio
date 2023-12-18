import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { images } from './../../../assets/images/previews'

export default function ProjectCard({project}) {
  const [loadSvg, setLoadSvg] = useState(false)

  const imgError = () => {
    setLoadSvg(true)
  }

  return(
    <div className='projectCard'>
      {loadSvg?
        <svg id='svgfill'
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
          >{project.name}</text>
        </svg>
        :
        <img
          src={images[project.id]}
          alt='nothing here yet'
          onError={imgError}
        />          
      }
      <h2>{project.name}</h2>
      <div className='links'>
        <a href={project.github}><FontAwesomeIcon icon={faGithub} /></a>
        {project.deployed === false? 
          null
          :
          <a href={project.deployed}>Deployed Url</a>
        }
      </div>
    </div>
  )
}