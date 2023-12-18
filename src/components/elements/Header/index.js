import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMobileScreenButton,
  faTabletScreenButton,
  faLaptop,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons'

import './styles.scss'

export default function Header({ id }) {

  return(
    <header
      id={id}
      style={{height: '30vh', backgroundColor: '#444'}}
    >
      <h1>Matthew Herford</h1>
      {/* <div id='sizeIndicator'>
        <FontAwesomeIcon id='small' icon={faMobileScreenButton} style={{color: "#ffffff",}} />
        <FontAwesomeIcon id='medium' icon={faTabletScreenButton} style={{color: "#ffffff",}} />
        <FontAwesomeIcon id='large' icon={faLaptop} style={{color: "#ffffff",}} />
        <FontAwesomeIcon id='exlarge' icon={faDesktop} style={{color: "#ffffff",}} />
      </div> */}
      
    </header>
  )
}