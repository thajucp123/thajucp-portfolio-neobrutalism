import React from 'react'
import { Link } from 'react-router-dom'
import bookimage from '../assets/shadows wake.jpg'

function Book() {
  return (
    <div className="book-page">
      <div className="page-header">
        <Link to="/" className="back-btn">← Back to Portfolio</Link>
        <h1>In the Shadow's Wake</h1>
        <p>A journey into the darker edges of <span style={{ backgroundColor: "#5b85d9", color: "white" }}>&nbsp;imagination&nbsp;</span></p>
      </div>

      <div className="book-content">
        <div className="book-cover">
          <div className="cover-placeholder">
            <img src={bookimage} alt="Book Cover" />
          </div>
        </div>

        <div className="book-details">
          <div className="book-section">
            <h2>About the Book</h2>
            <p>
              <em>In the Shadow's Wake</em> is a collection of stories that explore the quiet chaos of human experience 
              through fiction, reflection, and raw honesty. This book delves into the darker edges of imagination, 
              examining themes of identity, loss, redemption, and the human condition.
            </p>
            <p>
              Each story is crafted with careful attention to detail, drawing readers into worlds that are at once 
              familiar and unsettling. The narratives challenge conventional perspectives and invite readers to 
              question their own understanding of reality and morality.
            </p>
          </div>

          <div className="book-section">
            <h2>Key Themes</h2>
            <ul className="themes-list">
              <li>Identity and self-discovery</li>
              <li>The nature of reality and perception</li>
              <li>Loss and the process of healing</li>
              <li>Redemption and transformation</li>
              <li>The human condition in modern society</li>
              <li>Existential questions and philosophical exploration</li>
            </ul>
          </div>

          <div className="book-section">
            <h2>Excerpt</h2>
            <blockquote className="book-excerpt">
              "In the quiet moments between chaos and order, we find ourselves. Not in the grand gestures or 
              the loud declarations, but in the shadows that dance at the edges of our consciousness. 
              It is there, in the wake of what we've left behind, that our true nature emerges."
            </blockquote>
          </div>

          <div className="book-section">
            <h2>Publication Details</h2>
            <div className="publication-info">
              <p><strong>Genre:</strong> Literary Fiction / Dark Fantasy Thriller</p>
              <p><strong>Pages:</strong> 288</p>
              <p><strong>Language:</strong> English</p>
              <p><strong>Format:</strong> Paperback, E-book</p>
              <p><strong>Publisher:</strong> Independent Publication</p>
            </div>
          </div>

          <div className="book-section">
            <h2>Reader Reviews</h2>
            <div className="reviews">
              <div className="review">
                <p>"A haunting exploration of the human psyche that stays with you long after the last page."</p>
                <span className="reviewer">- Literary Review</span>
              </div>
              <div className="review">
                <p>"Thajudeen's writing is both beautiful and unsettling, creating a unique reading experience."</p>
                <span className="reviewer">- Book Enthusiast</span>
              </div>
            </div>
          </div>

          <div className="book-section">
            <h2>Get Your Copy</h2>
            <div className="purchase-options">
              <a href="#" className="purchase-btn">Amazon Kindle</a>
              <a href="#" className="purchase-btn">Paperback</a>
              <a href="#" className="purchase-btn">Local Bookstores</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
