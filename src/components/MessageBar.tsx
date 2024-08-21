import { Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

export function MessageBar() {
  const [message, setMessage] = useState<string>(''); // Message is a string
  const [messages, setMessages] = useState<string[]>([]);
  const [stompClient, setStompClient] = useState<Client | null>(null);

  useEffect(() => {
    // Create a SockJS connection to the Spring Boot server
    const socket = new SockJS('http://localhost:8080/ws');

    // Create a STOMP client over the SockJS connection
    const client = new Client({
      webSocketFactory: () => socket as WebSocket,
      debug: (str) => console.log(str),
      onConnect: () => {
        console.log('Connected to WebSocket');
        // Subscribe to the "/topic/public" endpoint where messages are broadcasted
        client.subscribe('/topic/public', (message) => {
          const msg = JSON.parse(message.body);
          setMessages((prevMessages) => [...prevMessages, msg.content]);
        });
      },
      onStompError: (frame) => {
        console.error('STOMP error', frame);
      },
    });

    // Activate the STOMP client
    client.activate();
    setStompClient(client);

    // Cleanup on component unmount
    return () => {
      if (client.connected) {
        client.deactivate();
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && stompClient?.connected) {
      // Create a message object to send
      const msg = { content: message, sender: 'User' }; // Customize sender as needed

      // Send the message to the "/app/chat.sendMessage" endpoint
      stompClient.publish({
        destination: '/app/chat.sendMessage',
        body: JSON.stringify(msg),
      });

      setMessage(''); // Clear the input field
    }
  };

  return (
    <Stack p={2}>
      <Typography>Chat</Typography>
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
