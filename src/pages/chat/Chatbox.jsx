import React, { useState, useEffect } from "react";
import "./Chatbox.css";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const updatedMessages = [...messages, { text: newMessage, sender: "user" }];
    setMessages(updatedMessages);
    setNewMessage("");

    setTimeout(() => {
      const response = { text: "This is a temporary response.", sender: "bot" };
      setMessages([...updatedMessages, response]);
    }, 1000);
  };

  return (
    <div className="container">
      <div className="chat-app">
        <div className="chat-header">Messenger</div>
        <div className="message-container">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
