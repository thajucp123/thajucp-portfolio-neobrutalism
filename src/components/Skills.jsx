import React from 'react'

function Skills() {
  const skills = [
    'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'JavaScript',
    'TypeScript', 'GraphQL', 'Tailwind', 'Flutter', 'Kotlin', 'Git',
    'AWS', 'Figma', 'Jira', 'Docker', 'Selenium', 'Jest'
  ]

  return (
    <section id="skills" className="skills">
      <h2>Skills 🔨</h2>
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
