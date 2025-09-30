import React, { useState, useEffect } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // for mobile navigation menu
  const [theme, setTheme] = useState("light"); // for theme toggling

  // for hamburger menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const [hidden, setHidden] = useState(false); // for hiding navbar on scroll
  // Track the last scroll position
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

  // Theme toggling logic
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

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
        <a href="#about" onClick={closeMenu} className='color-1'>About</a>
        <a href="#skills" onClick={closeMenu} className='color-2'>Skills</a>
        <a href="#projects" onClick={closeMenu} className='color-3'>Projects</a>
        <a href="#experience" onClick={closeMenu} className='color-4'>Experience</a>
        <a href="#book" onClick={closeMenu} className='color-5'>Book</a>
        <a href="#contact" onClick={closeMenu} className='color-6'>Contact</a>
        
      </div>
      {/* place toggle dark/light mode button with moon and sun icons here */}
      <div className="theme-toggle">
  <button className="toggle-button" 
    aria-label="Toggle dark/light mode"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<path d="M32 19c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13S24.82 19 32 19zM34 8c0 .366 0 5.634 0 6 0 1.105-.895 2-2 2s-2-.895-2-2c0-.366 0-5.634 0-6 0-1.105.895-2 2-2S34 6.895 34 8zM50.385 16.444c-.259.259-3.984 3.984-4.243 4.243-.781.781-2.047.781-2.828 0-.781-.781-.781-2.047 0-2.828.259-.259 3.984-3.984 4.243-4.243.781-.781 2.047-.781 2.828 0S51.166 15.663 50.385 16.444zM56 34c-.366 0-5.634 0-6 0-1.105 0-2-.895-2-2s.895-2 2-2c.366 0 5.634 0 6 0 1.105 0 2 .895 2 2S57.105 34 56 34zM47.556 50.385c-.259-.259-3.984-3.984-4.243-4.243-.781-.781-.781-2.047 0-2.828s2.047-.781 2.828 0c.259.259 3.984 3.984 4.243 4.243.781.781.781 2.047 0 2.828S48.337 51.166 47.556 50.385zM30 56c0-.366 0-5.634 0-6 0-1.105.895-2 2-2s2 .895 2 2c0 .366 0 5.634 0 6 0 1.105-.895 2-2 2S30 57.105 30 56zM13.615 47.556c.259-.259 3.984-3.984 4.243-4.243.781-.781 2.047-.781 2.828 0 .781.781.781 2.047 0 2.828-.259.259-3.984 3.984-4.243 4.243-.781.781-2.047.781-2.828 0S12.834 48.337 13.615 47.556zM8 30c.366 0 5.634 0 6 0 1.105 0 2 .895 2 2s-.895 2-2 2c-.366 0-5.634 0-6 0-1.105 0-2-.895-2-2S6.895 30 8 30zM16.444 13.615c.259.259 3.984 3.984 4.243 4.243.781.781.781 2.047 0 2.828-.781.781-2.047.781-2.828 0-.259-.259-3.984-3.984-4.243-4.243-.781-.781-.781-2.047 0-2.828S15.663 12.834 16.444 13.615z"></path>
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
      <path d="M20 15c0 5-4 9-9 9 3-2 5-5 5-9s-2-7-5-9c5 0 9 4 9 9z"
            stroke="currentColor" strokeWidth="2"/>
    </svg>
  </button>
</div>


    </div>
  )
}

export default Navbar
