import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './pages/Projects'
import Book from './pages/Book'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  )
} 

export default App
