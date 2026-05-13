import React from 'react'
import logo from '../assets/thaju.jpg'
import cv from '../assets/cv/THAJUDEEN_CP_AI_ML_Engineer_CV.pdf'

function About({ toggleChat }) {
  return (
    <section id="about" className="about">
      <img src={logo} alt="Thajudeen's Profile" className="profile-image" />
      <h2>About Me <big className='wave'>👋</big></h2>

<p style={{ fontWeight: '400' }}>
Hi, I'm <strong>Thajudeen</strong>, an <span style={{ backgroundColor: "#325da2", color: "white", padding: "0.25rem 0" }}>&nbsp;AI/ML Engineer and Full Stack Developer&nbsp;</span> from Kerala, India, currently working at AES India in technical operations and systems support.
<br/><br/>
With a background in Computer Science and ongoing MCA studies, I focus on building practical software systems, AI-powered tools, and computer vision solutions that solve real-world problems. My work combines full stack development, automation, and machine learning with hands-on operational experience from industrial environments.
<br/><br/>
I primarily work with Python, React, Next.js, Node.js, Computer Vision frameworks, and modern AI/ML tools. Beyond coding, I enjoy astronomy, photography, gaming, fitness, fiction writing, and experimenting with Linux systems and hardware.
🚀
</p>

<p style={{ marginTop: '1rem', fontWeight: '400' }}>
Feel free to connect with me on <a href="https://www.linkedin.com/in/thaju-fakrudheen/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 'bold', textDecoration: 'underline' }}>LinkedIn</a> or explore my projects on <a href="https://github.com/thajucp123" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 'bold', textDecoration: 'underline' }}>GitHub</a>.
</p>

<p style={{ marginTop: '1rem', fontWeight: '400' }}>
Want to know more about me? <a href="#" onClick={toggleChat} style={{ color: 'var(--blue)', fontWeight: 'bold', textDecoration: 'underline' }}>Chat with the KnowThaj bot</a>.
</p>

      <div className='about-buttons'>
      <a href={cv} download className="download-resume-btn">Download Resume</a>
  <a href="#book" className="read-book-btn">Read My Books</a>
  </div>
    </section>
  )
}

export default About
