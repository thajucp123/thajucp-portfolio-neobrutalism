import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { books } from '../data/books'

function Book() {
  const { id } = useParams();
  const book = books.find(b => b.id === id);

  if (!book) {
    return (
      <div className="book-page" style={{ textAlign: 'center', paddingTop: '100px' }}>
        <div className="page-header">
          <Link to="/" className="back-btn">← Back to Portfolio</Link>
          <h1>Book Not Found</h1>
          <p>The book you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="book-page">
      <div className="page-header">
        <Link to="/#book" className="back-btn">← Back to Portfolio</Link>
        <h1>{book.title}</h1>
        <p><span style={{ backgroundColor: "#5b85d9", color: "white", padding: "0.25rem 0" }}>&nbsp;{book.genre}&nbsp;</span></p>
      </div>

      <div className="book-content">
        <div className="book-cover">
          <div className="cover-placeholder">
            <img src={book.image} alt="Book Cover" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }} />
          </div>
        </div>

        <div className="book-details">
          <div className="book-section">
            <h2>About the Book</h2>
            <p>{book.overview}</p>
          </div>

          <div className="book-section">
            <h2>Key Themes</h2>
            <ul className="themes-list">
              {book.coreThemes.map((theme, idx) => (
                <li key={idx} style={{ padding: '0.25rem 0' }}>{theme}</li>
              ))}
            </ul>
          </div>

          <div className="book-section">
            <h2>Narrative Identity</h2>
            <p>{book.narrativeIdentity}</p>
          </div>

          <div className="book-section">
            <h2>Publication Details</h2>
            <div className="publication-info">
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>Type:</strong> {book.type}</p>
              <p><strong>Publish Year:</strong> {book.publishYear}</p>
              <p><strong>Status:</strong> {book.status}</p>
              <p><strong>Language:</strong> English</p>
            </div>
          </div>

          {book.buyLinks && book.buyLinks.length > 0 && (
            <div className="book-section">
              <h2>Get Your Copy</h2>
              <div className="purchase-options" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {book.buyLinks.map((link, idx) => (
                  <a key={idx} href={link.url} className="purchase-btn" style={{ 
                    padding: '0.5rem 1rem', 
                    border: '0.125rem solid var(--black)', 
                    background: 'var(--yellow)', 
                    color: 'var(--black)', 
                    fontWeight: 'bold', 
                    textDecoration: 'none', 
                    borderRadius: '0.375rem', 
                    boxShadow: '4px 4px 0px var(--black)',
                    transition: 'all 0.3s'
                  }}>
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Book
