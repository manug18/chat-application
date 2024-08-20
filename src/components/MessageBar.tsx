import { Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export function MessageBar() {
  const socket = io('http://localhost:5000'); // Your WebSocket server URL

  const [message, setMessage] = useState<string>(''); // Message is a string
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    // Define the callback for handling messages
    const handleMessage = (msg: string) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    };

    // Register the WebSocket event handler
    socket.on('chat message', handleMessage);

    // Cleanup function to unregister the event handler and disconnect the socket
    return () => {
      socket.off('chat message', handleMessage);
      socket.disconnect(); // Clean up WebSocket connection
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Prevent sending empty messages
      socket.emit('chat message', message);
      setMessage('');
    }
  };

  return (
    <Stack p={2}>
      <Typography>hekko</Typography>
      <div>
        <div>
          <ul>
            {messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </Stack>
  );
}
