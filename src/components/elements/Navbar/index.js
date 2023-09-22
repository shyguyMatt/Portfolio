import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

export default function Navbar() {

  return(
    <nav>
      <div id='navBurger'>
        <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
      </div>

      <a href='#aboutMe'>About Me</a>
      <a href='#first'>Body 1</a>
      <a href='#second'>Body 2</a>
    </nav> 
  )
};
