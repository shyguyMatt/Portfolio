import React from 'react';
import img from './../../../assets/images/me.PNG'

import './styles.scss'

export default function About() {

  return(
    <div id='aboutMe'>
      <div id='bio'>
        <h1>About ShyguyMatt</h1>
        <p>I am a 23 year old Web Developer. Recently graduated from coding bootcamp. I am always eager to learn about new technologies. Currently my passion is Web Applications and PWAs. I am proficient in both the front and the back end of applications, but more specifically back end.</p>
      </div>

      <div id='gallery'>
        <img src={img}></img>
      </div>
    </div>
  )
}