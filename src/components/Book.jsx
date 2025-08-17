import React from 'react'
import bookimage from '../assets/shadows wake.jpg'

function Book() {
  return (
    <section id="book" className="book">
      <h2>Book 📖</h2>
      <div className="book-card">
        <img src={bookimage} alt="Book Cover" />
        <div className='book-description'>
        <h3>In the Shadow's Wake</h3>
        <p>A journey into the darker edges of imagination — my book, <em>In the Shadow's Wake</em>, explores the quiet chaos of human experience through fiction, reflection, and raw honesty.</p>
        <div className="book-button">
          <a href="/book" className="read-more-btn">Read More</a>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Book
