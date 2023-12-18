import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons'

import './styles.scss'

export default function Footer() {
  
  return(
    <footer>
      <div>

      </div>
      <div id='socials'>
        <a href='https://github.com/shyguyMatt'><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff",}} /></a>
        <a href='https://www.linkedin.com/in/matthew-herford-58682826b/'><FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#ffffff",}} /></a>
        {/* <a href=''><FontAwesomeIcon icon={faDiscord} size="2xl" style={{color: "#ffffff",}} /></a> */}
      </div>
      <div>

      </div>
    </footer>
  )
}