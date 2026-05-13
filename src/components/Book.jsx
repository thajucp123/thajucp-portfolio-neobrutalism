import React from 'react'
import { books } from '../data/books'

function Book() {
  return (
    <section id="book" className="book">
    <svg
    className="pin-dot"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="6" r="6" fill="#000" />
  </svg>
      <h2>Books 📖</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {books.map(book => (
          <div key={book.id} className="book-card" style={{ flexDirection: 'column' }}>
            <img src={book.image} alt={book.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className='book-description' style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3>{book.title}</h3>
              <div className="badges" style={{ marginBottom: '1rem', marginTop: '0.25rem' }}>
                <span className="badge" style={{ fontSize: '0.7rem', padding: '0.2rem 0.4rem' }}>{book.genre}</span>
                <span className="badge" style={{ fontSize: '0.7rem', padding: '0.2rem 0.4rem' }}>{book.type}</span>
                <span className="badge" style={{ fontSize: '0.7rem', padding: '0.2rem 0.4rem' }}>{book.publishYear}</span>
                {book.status === 'In Development' && <span className="badge" style={{ fontSize: '0.7rem', padding: '0.2rem 0.4rem', background: '#ff5c8a', color: '#fff' }}>In Dev</span>}
              </div>
              <p style={{ flex: 1, marginBottom: '1rem', fontSize: '0.9rem' }}>{book.overview.length > 150 ? book.overview.substring(0, 150) + '...' : book.overview}</p>
              <div className="book-button" style={{ marginTop: 'auto' }}>
                <a href={`/book/${book.id}`} className="read-more-btn">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Book
