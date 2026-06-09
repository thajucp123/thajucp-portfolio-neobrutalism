import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const ChatBot = ({ isOpen, toggleChat }) => {
    const [messages, setMessages] = useState([
        { text: "Hello! I'm KnowThaj, a chatbot for Thaju CP's portfolio. How can I help you today?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatContainerRef = useRef(null);

    const [serverStatus, setServerStatus] = useState('Checking...');
const [modelName, setModelName] = useState('');
    

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            const newMessages = [...messages, { text: inputValue, sender: 'user' }];
            setMessages(newMessages);
            setInputValue('');
            setIsTyping(true);

            try {
                const response = await fetch('https://thajucp-portfolio-chatbot.vercel.app/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ question: inputValue })
                });
                const data = await response.json();
                const botMessage = data.answer || data.response || data.message || 'Sorry, I could not process the response.';
                setMessages(prev => [...prev, { text: botMessage, sender: 'bot' }]);
            } catch (error) {
                console.error('Failed to fetch bot response:', error);
                setMessages(prev => [...prev, { text: `<strong>Error:</strong> Connection failed. <br><small>${error.message}</small>`, sender: 'bot' }]);
            } finally {
                setIsTyping(false);
            }
        }
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);


// for checking if backend online and getting model name
    useEffect(() => {

const checkServerStatus = async () => {

    try {

        const response = await fetch(
            'https://thajucp-portfolio-chatbot.vercel.app/status'
        );

        if (!response.ok) {
            throw new Error('Server unavailable');
        }

        const data = await response.json();

        setServerStatus(data.status || 'Online');
        setModelName(data.model || '');

    } catch (error) {

        console.error('Status check failed:', error);

        setServerStatus('Offline');
        setModelName('');
    }
};

checkServerStatus();

}, []);


    return (
        <div className={`chatbot-fab ${isOpen ? 'open' : ''}`}>
            {!isOpen && (
                <div className="fab-container" onClick={toggleChat} style={{ height: '7rem', width: '7rem', textAlign: 'center', cursor: 'pointer' }}>
                    <div className="fab-icon">
                        <svg className="w-8 h-8 text-black mr-0 group-hover:mr-2 transition-all duration-300" fill="none" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6a2 2 0 100-4 2 2 0 000 4zm0 14a2 2 0 100-4 2 2 0 000 4zm6-8a2 2 0 100-4 2 2 0 000 4zm-12 0a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                    </div>
                    <span className="fab-text" style={{fontSize: '1rem'}}>Chat with<br/> me</span>
                </div>
            )}

            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="header-content">
                            <div className="bot-icon">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6a2 2 0 100-4 2 2 0 000 4zm0 14a2 2 0 100-4 2 2 0 000 4zm6-8a2 2 0 100-4 2 2 0 000 4zm-12 0a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">KnowThaj Bot</h1>
                                <p className="text-sm">
  STATUS:
  <span
    style={{
      color:
        serverStatus.toLowerCase() === 'online'
          ? '#16a34a'
          : serverStatus === 'Checking...'
          ? '#eab308'
          : '#dc2626',
      fontWeight: 'bold',
      marginLeft: '6px'
    }}
  >
    {serverStatus}
  </span>

{modelName && (
<span style={{ marginLeft: '8px', opacity: 0.8 }}>
({modelName}) </span>
)}

</p>

                            </div>
                        </div>
                        <button onClick={toggleChat} className="close-button">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>

                    <div ref={chatContainerRef} className="chat-container">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message-wrapper ${msg.sender === 'user' ? 'user' : 'bot'}`}>
                                <div className={`chat-bubble ${msg.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}`}>
                                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text }}></p>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="message-wrapper bot">
                                <div className="chat-bubble chat-bubble-bot typing-indicator">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="chat-input-form">
                        <form onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="TYPE HERE..."
                                autoComplete="off"
                            />
                            <button type="submit">
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
