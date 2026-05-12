import React from 'react'

function Skills() {
  const skills = [
'Python',
'AI/ML',
'Computer Vision',
'OpenCV',
'YOLOv8',
'TensorFlow',
'PyTorch',
'Scikit-Learn',
'SQL',
'NumPy',
'Pandas',
'Jupyter',
'React.js',
'Next.js',
'Node.js',
'Express',
'MongoDB',
'JavaScript',
'TypeScript',
'REST APIs',
'Docker',
'AWS',
'Linux',
'Git',
'GitHub Actions',
'Flutter',
'Kotlin',
'Figma',
'Photoshop'
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
