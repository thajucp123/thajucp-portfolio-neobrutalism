import React from 'react'
import Navbar from './Navbar'
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
    <>
    <Navbar />
    <div className="home-container ">

      <About toggleChat={toggleChat} />
      <PreviousSite />
      <Skills />
      <Projects />
      <Experience />
      <Book />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default Home
