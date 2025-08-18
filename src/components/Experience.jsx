import React from 'react'

function Experience() {
  return (
    <section id="experience" className="experience">
    <svg
    className="pin-dot"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="6" r="6" fill="#000" />
  </svg>
      <h2>Experience 💼</h2>
      <div className="job">
        <h3>Full Stack Developer – AES India</h3>
        <p><strong>Aug 2021 – Present</strong></p>
        <p>Developed and maintained web apps using the MERN stack and Next.js, created native Android and Flutter applications, and designed user-friendly interfaces. Leveraged cloud platforms for deployment and managed CI/CD pipelines to ensure efficient development and deployment processes.</p>
      </div>
    </section>
  )
}

export default Experience
