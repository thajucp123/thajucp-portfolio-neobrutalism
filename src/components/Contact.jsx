import React from 'react'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
  }

  return (
    <section id="contact" className="contact">
    <svg
    className="pin-dot"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="6" r="6" fill="#000" />
  </svg>
      <h2>Contact 📬</h2>
      <form onSubmit={handleSubmit} className='contact-form'>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p style={{marginTop: '15px'}}>Or reach me directly at <a href="mailto:mail@thajucp.in" style={{color: 'var(--red)', fontWeight: 'bold'}}>mail@thajucp.in</a></p>
      
      <div className="social-links">
        <a href="https://www.linkedin.com/in/thaju-fakrudheen/" target="_blank" rel="noopener noreferrer">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.7v2.16h.05c.52-.98 1.79-2.16 3.68-2.16C20.42 8 24 10.77 24 16.25V24h-4v-7.25c0-1.73-.62-2.91-2.17-2.91-1.18 0-1.88.79-2.19 1.56-.11.27-.14.65-.14 1.03V24h-4V8z"/>
          </svg>
        </a>
        <a href="https://github.com/thajucp123" target="_blank" rel="noopener noreferrer">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56 0-.28-.01-1.04-.02-2.05-3.2.69-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.04 1.79 2.74 1.27 3.41.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11.14 11.14 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.43-2.68 5.41-5.24 5.69.42.37.8 1.1.8 2.22 0 1.61-.01 2.91-.01 3.31 0 .31.21.68.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/chaaju__/" target="_blank" rel="noopener noreferrer">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm4.5-.5c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"/>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Contact
