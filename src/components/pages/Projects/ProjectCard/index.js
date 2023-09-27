import React from 'react';

import './styles.css'

export default function ProjectCard({repo}) {
  console.log(repo)
  return(
    <div id='projectCard'>
      <img src='https://raw.githubusercontent.com/shyguyMatt/${repo.name}/main/public/thumbnail.png' alt='nothing here yet'></img>
      <h2>{repo.name}</h2>
      <div className='links'>
        <a href={repo.html_url}>Github</a>
        {repo.has_pages? 
          <a href={`https://shyguymatt.github.io/${repo.name}`}>Deployed Url</a>
          : null  
        }
      </div>
    </div>
  )
}