import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './pages/Projects'
import Book from './pages/Book'
import ChatBot from './components/ChatBot'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home toggleChat={toggleChat} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <ChatBot isOpen={isChatOpen} toggleChat={toggleChat} />
    </Router>
  )
} 

export default App
