import React from 'react'

function Skills() {
  const skills = [
    'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'JavaScript',
    'TypeScript', 'GraphQL', 'Tailwind', 'Flutter', 'Kotlin', 'Git',
    'AWS', 'Figma', 'Jira', 'Docker', 'Selenium', 'Jest'
  ]

  return (
    <section id="skills" className="skills">
     <svg
    className="pin-dot"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="6" r="6" fill="#000" />
  </svg>
      <h2>Skills <span className='wave'>🔨</span></h2>
      <ul>
      {skills.map((skill, index) => (
        <li key={index} className={index % 2 === 0 ? 'left' : 'right'}>
          {skill}
        </li>
      ))}
      </ul>
    </section>
  )
}

export default Skills
