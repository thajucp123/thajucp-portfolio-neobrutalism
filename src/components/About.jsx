import React from 'react'
import logo from '../assets/thaju.jpg'
import cv from '../assets/cv/THAJUDEEN CP - Full Stack Developer - CV 2025.pdf'

function About({ toggleChat }) {
  return (
    <section id="about" className="about">
      <img src={logo} alt="Thajudeen's Profile" className="profile-image" />
      <h2>About Me <big className='wave'>👋</big></h2>
      <p style={{ fontWeight: '400'}}>Hi, I'm <strong>Thajudeen</strong>, a <span style={{ backgroundColor: "#325da2", color: "white", padding: "0.25rem 0" }}>&nbsp;Full Stack Developer and AI/ML Engineer&nbsp;</span> with a passion for creating innovative solutions. Currently working at AES India. With a background in Computer Science, I build applications using the MERN stack, AI/ML Solutions, Flutter, and Kotlin. I focus on creating clean, efficient solutions that bridge front-end and back-end seamlessly. Beyond coding, I'm into astronomy, gaming, gym, and photography. 🚀</p>
      <p style={{ marginTop: '1rem', fontWeight: 'g00' }}>Feel free to connect with me on <a href="https://www.linkedin.com/in/thaju-fakrudheen/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 'bold', textDecoration: 'underline' }}>LinkedIn</a> or check out my work on <a href="https://github.com/thajucp123" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 'bold', textDecoration: 'underline' }}>GitHub</a>!</p>
      <p style={{ marginTop: '1rem', fontWeight: 'g00' }}>Want to know more about me? <a href="#" onClick={toggleChat} style={{ color: 'var(--blue)', fontWeight: 'bold', textDecoration: 'underline' }}>Chat with KnowThaj bot</a>.</p>
      <div className='about-buttons'>
      <a href={cv} download className="download-resume-btn">Download Resume</a>
  <a href="/book" className="read-book-btn">Read My Book</a>
  </div>
    </section>
  )
}

export default About
