import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Book from './Book'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
  return (
    <>
      <Navbar />
      <About />
      {/* section to provide link to previous version of this sit in the Coding Wizard theme. */}
      {/* this section is devided in two parts: left side is the text and right side is the image (screenshot of previous site). image side is shorter than text side. */}
      <section className="previous-version">
      <h2>Check out the previous version of this site</h2>
      <div className='previous-version-container'>
        <div className="previous-version-text">
          <p>This site was previously built with a <span>Coding Wizard</span> theme. You can view the old version <a href="https://wizardry.thajucp.in/" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
        <div className="previous-version-image">
          <img src="https://github.com/thajucp123/personal-portfolio/raw/main/src/assets/img/screenshots/main-screenshot-1.jpg" alt="Previous Version" />
        </div>
        </div>
      </section>
      <Skills />
      <Projects />
      <Experience />
      <Book />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
