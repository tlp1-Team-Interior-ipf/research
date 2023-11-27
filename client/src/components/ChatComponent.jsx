// ChatComponent.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatComponent = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');
  const [typingStatus, setTypingStatus] = useState('');

  useEffect(() => {
    // Conectar al servidor Socket.IO
    const socketInstance = io();

    // Configurar el socket en el estado
    setSocket(socketInstance);

    // Manejar eventos de chat
    socketInstance.on('chat message', (receivedMessages) => {
      setMessages(receivedMessages);
    });

    socketInstance.on('user typing', (typingUsername) => {
      setTypingStatus(`${typingUsername} está escribiendo...`);
    });

    socketInstance.on('user stopped typing', () => {
      setTypingStatus('');
    });

    // Limpiar el socket al desmontar el componente
    return () => {
      socketInstance.disconnect();
    };
  }, []); // Solo ejecuta este efecto una vez al montar el componente

  const handleJoinChat = () => {
    if (username) {
      // Ocultar el formulario de usuario y mostrar los mensajes
      // se puede activar esto si se necesita la funcionalidad de unirse al chat
      // userForm.style.display = 'none';
      // messages.style.display = 'block';
      console.log('Joined as: ' + username);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() && username) {
      socket.emit('chat message', { username: username, message: input });
      setInput('');
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage(e);
    }
  };

  const handleInputKeyUp = () => {
    clearTimeout(typingTimeout);
    socket.emit('typing', username);
    typingTimeout = setTimeout(() => {
      socket.emit('stopped typing', username);
    }, 500);
  };

  return (
    <div>
      <div id="user-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleJoinChat}>Join Chat</button>
      </div>

      <ul id="messages" style={{ display: 'block' }}>
        {messages.map((msg, index) => (
          <li key={index}>{msg.username}: {msg.message}</li>
        ))}
      </ul>

      <form id="form" onSubmit={handleSendMessage}>
        <input
          id="input"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
          onKeyUp={handleInputKeyUp}
        />
        <button type="submit">Send</button>
      </form>

      <div id="typing-status">{typingStatus}</div>
    </div>
  );
};

export default ChatComponent;
