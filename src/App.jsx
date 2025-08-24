import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './pages/Projects'
import Book from './pages/Book'
import ChatBot from './components/ChatBot'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <ChatBot />
    </Router>
  )
} 

export default App
