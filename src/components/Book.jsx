import React from 'react'

function Book() {
  return (
    <section id="book" className="book">
      <h2>Book</h2>
      <div className="book-card">
        <h3>In the Shadow's Wake</h3>
        <p>A journey into the darker edges of imagination — my book, <em>In the Shadow's Wake</em>, explores the quiet chaos of human experience through fiction, reflection, and raw honesty.</p>
        <div className="book-button">
          <a href="/book" className="read-more-btn">Read More</a>
        </div>
      </div>
    </section>
  )
}

export default Book
