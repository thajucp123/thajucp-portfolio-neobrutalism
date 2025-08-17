import React, { useState, useEffect } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setHidden(true);
      } else {
        // scrolling up → show
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`navbar ${hidden ? "hidden" : ""}`}>
    <div className='navbar-name'>
      <h1>Thajudeen CP</h1>
      <p>Full Stack Developer + AI/ML Engineer</p>
    </div>
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#book" onClick={closeMenu}>Book</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        
      </div>
      {/* place toggle dark/light mode button with moon and sun icons here */}
      <div className="theme-toggle">
  <button className="toggle-button" aria-label="Toggle dark/light mode">
    <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
    <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{ display: 'none' }}>
      <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077 4.597c-.3.16-.6.287-.905.287a4.97 4.97 0 0 1-2.29-.588 4.777 4.777 0 0 1-1.588-2.29c0-.325.13-.63.287-.905a8.19 8.19 0 0 1 4.597-2.077 8.089 8.089 0 0 1 2.077 4.597zM12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
    </svg>
  </button>
</div>

    </div>
  )
}

export default Navbar
