import React, { useEffect } from 'react'

export default function Projects(props) {
  useEffect(() => {
    if(props.old == true) {
      document.querySelector('#portfolio-contact-body').classList.remove('body-down')
      document.querySelector('#portfolio-contact-header').classList.remove('header-up')
      setTimeout(() => {
        document.querySelector('#portfolio-contact').classList.add('body-up')
      }, 10);
    } else {
      setTimeout(() => {
        document.querySelector('#portfolio-contact-body').classList.remove('body-down')
      }, 10);
      setTimeout(() => {
        document.querySelector('#portfolio-contact-header').classList.remove('header-up')
      }, 1000);      
    }
  })

  function handleSubmit(e) {
    e.preventDefault();

    const templateId = 'template_cog2986';
    sendEmail(templateId, {
      message: document.querySelector('#emailMessage').value,
      from_name: document.querySelector('#emailSubject').value,
      reply_to: document.querySelector('#emailSender').value
    })

    function sendEmail(templateId, variables) {
      document.querySelector('#input-button').innerHTML = 'Loading'
      window.emailjs.send(
        'service_gk9y0je',
        templateId,
        variables
      ).then(res => {
        document.querySelector('#input-button').innerHTML = 'Email Sent'
        console.log('email successfully sent')
      })
    }
  }

  return(
    <div id='portfolio-contact'>
      <div className='header-up' id='portfolio-contact-header'>
        <h1>Contact Me</h1>
      </div>
      <div className='body-down' id='portfolio-contact-body'>
        <div id='left-panel'>
          <h2>Let's Talk</h2>
          <p>Have a project in mind or just want to say hello? I'd love to hear from you! Feel free to reach out using the form below or email me directly at <a href="mailto: mjherford@gmail.com">mjherford@gmail.com</a>. Let's connect and discuss how we can bring your ideas to life.</p>
          <ul>
            <li>Phone: <a href='callTo:248-245-6890'>248-245-6890</a></li>
            <li>LinkedIn: <a href='https://www.linkedin.com/in/matthew-herford-58682826b/'>Matthew Herford</a></li>
          </ul>
        </div>
        <div id='right-panel'>
          <h2>Send Me an Email</h2>
          <form id='contact-form' onSubmit={handleSubmit}>
            <input id='emailSubject' type='text' placeholder='Your Name'/><br/>
            <input id='emailSender' type='email' placeholder='Your Email'/><br/>
            <textarea id='emailMessage' rows='5' cols='30' placeholder='Your Message'></textarea><br/>
            <button id='input-button' type='submit'>Send</button>
          </form>
        </div>
        <div className='spacer'></div>
      </div>
    </div>
  )
}