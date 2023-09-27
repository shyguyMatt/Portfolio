import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './styles.scss'

export default function ProjectCard({repo}) {
  // console.log(repo)
  return(
    <div className='projectCard'>
      <img
        // src={`https://raw.githubusercontent.com/shyguyMatt/${repo.name}/main/public/thumbnail.png`}
        alt='nothing here yet'
      ></img>
      <h2>{repo.name}</h2>
      <div className='links'>
        <a href={repo.html_url}><FontAwesomeIcon icon={faGithub} /></a>
        {repo.homepage === null? 
          null
          :
          <a href={repo.homepage}>Deployed Url</a>
        }
      </div>
    </div>
  )
}