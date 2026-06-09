import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Book from './Book'
import Contact from './Contact'
import Footer from './Footer'
import PreviousSite from './PreviousSite'

function Home({ toggleChat }) {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main>
      <Hero />
      <About toggleChat={toggleChat} />
      <PreviousSite />
      <Skills />
      <Projects />
      <Experience />
      <Book />
      <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
