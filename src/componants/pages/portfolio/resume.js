import React, { useEffect } from 'react'

import resume from './../../../assets/resources/resume.pdf'

export default function Projects(props) {
  useEffect(() => {
    if(props.old == true) {
      document.querySelector('#portfolio-resume-body').classList.remove('body-down')
      document.querySelector('#portfolio-resume-header').classList.remove('header-up')
      setTimeout(() => {
        document.querySelector('#portfolio-resume').classList.add('body-up')
      }, 10);
    } else {
      setTimeout(() => {
        document.querySelector('#portfolio-resume-body').classList.remove('body-down')
      }, 10);
      setTimeout(() => {
        document.querySelector('#portfolio-resume-header').classList.remove('header-up')
      }, 1000); 
    }
  })

  return(
    <div id='portfolio-resume'>
      <div className='header-up' id='portfolio-resume-header'>
        <h1>Resume</h1>
      </div>
      <div className='body-down' id='portfolio-resume-body'>
        <div id='resume-header'>
          <h1>Matthew Herford</h1>
          <p>Lansing, Michigan</p>
          <p>Phone: 248-245-6890</p>
          <p>LinkedIn: <a href='https://www.linkedin.com/in/matthew-herford-58682826b/'>https://www.linkedin.com/in/matthew-herford-58682826b/</a></p>
          <p>GitHub: <a href='https://github.com/shyguymatt'>https://github.com/shyguymatt</a> | Portfolio: <a href='portfolio.shyguymatt.com'>portfolio.shyguymatt.com</a></p>     
        </div>
        <div id='resume-summary'>
          <h2>Summary</h2>
          <p>Detail-oriented and tech-savvy Junior Software Engineer with a background in web development, software troubleshooting, and customer support. Proficient in front-end and back-end development, including HTML, CSS, and JavaScript, with a strong foundation in responsive design and UI/UX principles. Skilled in problem-solving, debugging, and optimizing code for performance and scalability. Experienced in customer-facing roles, bringing excellent communication and collaboration skills to bridge technical and non-technical teams. Eager to leverage my technical skills, continuous learning mindset, and hands-on experience with small electronics and PC repair in a collaborative development environment.</p>
        </div>
        <div id='resume-skills'>
          <h2>Technical Skills</h2>
          <ul>
            <li>Programming languages: JavaScript - Advanced, Python - Basic, C# - Intermediate</li>
            <li>Web Technologies: HTML5 - Intermediate, CSS3 - Intermediate, Bootstrap - Basic, GraphQL - Intermediate</li>
            <li>Database Management: MySQL - Intermediate, MongoDB - Advanced</li>
            <li>Frameworks & Libraries: React - Advanced, Express - Intermediate, Node.js - Advanced, Handlebars - Intermediate</li>
            <li>Version Control: GitHub - Advanced</li>
          </ul>
        </div>
        <div id='resume-experiance'>
          <h2>Experience</h2>
          <h3>Car Wash Associate | Sparkle Buggy | Burton, Center Rd | 2020-2023</h3>
          <h4>Summary</h4>
          <p>As a Car Wash Associate at Sparkle Buggy, I demonstrated effective leadership and decision-making skills as the designated Shift Lead. In this role, I was responsible for overseeing daily schedules for a team of 4-6 individuals. My primary duties included managing workflow efficiency, ensuring timely completion of tasks, and maintaining a positive customer experience.</p>
          <h4>Key Accomplishments</h4>
          <ul>
            <li>
              <p>Staffing Management</p>
              <ul>
                <li>Held a pivotal role in optimizing staffing levels by making timely decisions to call in additional help when necessary or strategically sending team members home during peak or low demand periods.</li>
                <li>Successfully balanced workforce resources, contributing to enhanced operational efficiency and cost-effectiveness.</li>
              </ul>
            </li>
            <li>
              <p>Leadeship & Communication</p>
              <ul>
                <li>Orchestrated seamless communication among team members, fostering a collaborative work environment.</li>
                <li>Utilized effective leadership strategies to address challenges and maintain a harmonious atmosphere during high-pressure situations.</li>
              </ul>
            </li>
            <li>
              <p>Customer Service & Safety</p>
              <ul>
                <li>Implemented safety protocols when working with heavy machinery, ensuring a secure environment for both team members and customers.</li>
                <li>Demonstrated commitment to exceptional customer service by handling customer concerns and inquiries with professionalism and efficiency.</li>
              </ul>
            </li>
            <li>
              <p>Performance Recognition</p>
              <ul>
                <li>Received positive feedback and recognition for adaptability and decision-making skills, with indications of eligibility for promotion if not for academic commitments.</li>
              </ul>
            </li>
          </ul>

          <h3>Retail Cashier | Meijer | Grand Ledge, MI | January - July 2024</h3>
          <h4>Summary</h4>
          <p>As a grocery store cashier, I provided excellent customer service by assisting customers with purchases and inquiries. I efficiently handled cash transactions, credit card payments, and gift cards with accuracy. I maintained a clean and organized checkout area to ensure a pleasant shopping experience. During slower periods, I assisted in restocking shelves and organizing merchandise. I collaborated with team members to ensure smooth store operations and customer satisfaction. Through this role, I developed strong communication skills by interacting with a diverse customer base and gained proficiency in using point-of-sale (POS) systems and other store technology.</p>
          <h4>Key Accomplishments</h4>
          <ul>
            <li>
              <p>Swift Service</p>
              <ul>
                <li>Consistently provide help to customers within 12 seconds of help light turning on.</li>
                <li>Received praise from head of store for being one of the fastest self-checkout clerks.</li>
              </ul>
            </li>
            <li>
              <p>Systems Maintenence</p>
              <ul>
                <li>Proven ability to troubleshoot and maintain POS Terminals.</li>
              </ul>
            </li>
            <li>
              <p>Indepandent</p>
              <ul>
                <li>Using the tools provided to me, I can solve almost any problem that a customer has.</li>
                <li>Often manage 15 self-checkout lanes solo while providing excellent service.</li>
              </ul>
            </li>
            <li>
              <p>Reliable</p>
              <ul>
                <li>Always show up on time and have had 0 days late.</li>
                <li>Can manage whatever is tasked to me without worry..</li>
                <li>Given a little training I can manage tasks outside my role when needed.</li>
              </ul>
            </li>
          </ul>

          <h3>Amazon Associate | Amazon | Lansing, MI | 2024 - present</h3>
          <h4>Summary</h4>
          <p>My role at amazon is to move and push boxes weighing up to 50lbs onto or across conveyor belts. Maintaining focus for 10 hours a day, to get boxes correctly into their spots in the warehouse.</p>
          <h4>Key Accomplishments</h4>
          <ul>
            <li>
              <p>Adaptability</p>
              <ul>
                <li>Proven ability to adapt to whatever task is needed at any time.</li>
              </ul>
            </li>
            <li>
              <p>Performance Recognition</p>
              <ul>
                <li>Recieved 2 accolades in 2 months for perfect attendance.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div id='resume-education'>
          <h2>Education</h2>
          <h3>Full Stack Web Development Bootcamp</h3>
          <p>Michigan State University, Lansing MI</p>
          <ul>
            <li>Completed an intensive and comprehensive Full Stack Web Development Bootcamp, gaining expertise in front-end and back-end technologies.</li>
            <li>Acquired hands-on experience in web development, including but not limited to JavaScript, React, MongoDB, Express, Node.js, and database management.</li>
            <li>Successfully completed challenging projects that demonstrated problem-solving skills, creativity, and the ability to work in a collaborative coding environment.</li>
            <li>Engaged in continuous learning and exploration of emerging technologies in the web development field.</li>
          </ul>
        </div>
        <div id='resume-references'>
          <h2>References</h2>
          <h3>Peter Boling</h3>
          <p>Bootcamp Instructor</p>
          <p>Michigan State University</p>
          <p>Phone: 925-252-5351</p>
          <p>Peter Boling served as my instructor during the Full Stack Web Development Bootcamp at Michigan State University. With over 10 years of experience in the field, Peter guided me through the complexities of web development, offering valuable insights and mentorship. He can provide insight into my technical capabilities, problem-solving skills, and collaborative work ethic.</p>
        </div>
        <div className='spacer'></div>
      </div>
    </div>
  )
}