import React from 'react';
import img from './../../../assets/images/me.PNG'

import './styles.scss'

export default function About() {

  return(
    <div id='aboutMe'>
      <div id='bio'>
        <h1>About ShyguyMatt</h1>
        <p>Hello there! I'm Matthew Herford, a passionate 23-year-old with a love for all things tech. Over the past four years, I've delved into the exciting world of programming, and it's become more than just a skill – it's a genuine passion.

My journey began in a coding bootcamp, where I spent six months immersed in the fascinating realms of HTML, CSS, JavaScript, React, and Node.js. These technologies opened up a world of possibilities, and I found my niche in crafting Progressive Web Apps (PWAs). There's something incredibly rewarding about creating applications that seamlessly blend technology with user experience, and PWAs offer the perfect canvas for my creativity.

Beyond the lines of code, I'm someone who thrives on challenges and is always eager to learn. The dynamic nature of the tech industry keeps me on my toes, and I'm committed to staying at the forefront of emerging technologies.

When I'm not busy coding, you can find me exploring new programming concepts, tinkering with side projects, or occasionally indulging in a good book. I believe that the best solutions come from a blend of creativity and technical expertise, and I strive to bring that balance to everything I do.

Join me on this exciting journey through the digital landscape. Whether it's building innovative apps or sharing insights from the tech world, I'm here to make the digital realm a little more exciting, one line of code at a time.</p>
      </div>

      <div id='gallery'>
        <img src={img}></img>
      </div>
    </div>
  )
}