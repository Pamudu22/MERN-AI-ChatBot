// src/pages/Chat.tsx

import { Avatar, Box, Button, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';
import { UseAuth } from '../context/AuthContext';
import ChatComponent from '../components/ChatComponent';

type Message = {
  role: "assistant" | "user";
  content: string;
};

const conversations: Message[] = [
  {
    role: "assistant",
    content: "Sure! I can help with that. Please provide me with your location.",
  },
  {
    role: "user",
    content: "I'm in New York City.",
  },
  {
    role: "assistant",
    content: "Great! Give me a moment to fetch the weather information for New York City.",
  },
  {
    role: "assistant",
    content: "The weather forecast for New York City tomorrow is: Sunny with a high of 78°F and a low of 62°F.",
  },
  {
    role: "user",
    content: "That sounds perfect! Thanks for the information.",
  },
  {
    role: "assistant",
    content: "You're welcome! If you have any more questions, feel free to ask.",
  },
];

const Chat = () => {
  const auth = UseAuth();

  return (
    <Box sx={{ display: 'flex', flex: 1, height: '100%', width: '100%', mt: 3, gap: 3 }}>
      
      {/* Sidebar */}
      <Box sx={{
        display: { md: 'flex', xs: 'none', sm: 'none' },
        flexDirection: 'column',
        flex: 0.2,
      }}>
        <Box sx={{
          display: 'flex',
          bgcolor: 'rgb(17,29,39)',
          width: '100%',
          height: '60vh',
          borderRadius: 5,
          flexDirection: 'column',
          mx: 3,
        }}>
          <Avatar sx={{ mx: "auto", my: 2, bgcolor: "white", color: "black", fontWeight: 700 }}>
            {auth?.user?.name[0].toUpperCase()}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: 'work sans' }}>
            You are talking to a ChatBot
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: 'work sans', my: 4, p: 3 }}>
            You can ask anything you want. The ChatBot will try to answer your question as best as it can.
          </Typography>
          <Button sx={{
            width: '200px',
            my: 'auto',
            mx: "auto",
            color: 'white',
            fontWeight: 700,
            borderRadius: 3,
            bgcolor: red[500],
            '&:hover': {
              bgcolor: red[900],
            },
          }}>
            Clear Conversation
          </Button>
        </Box>
      </Box>

      {/* Chat Area */}
      <Box sx={{
        display: 'flex',
        flex: { md: 0.8, xs: 1, sm: 1 },
        flexDirection: 'column',
        p: 3,
      }}>
        <Typography sx={{
          textAlign: 'center',
          fontFamily: 'work sans',
          fontSize: '40px',
          color: 'white',
          mb: 2,
          mx: 'auto',
          fontWeight: 700,
        }}>
          Model - deepseek-chat
        </Typography>

        <Box sx={{
          width: '100%',
          height: '60vh',
          borderRadius: 3,
          mx: "auto",
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          scrollBehavior: 'smooth',
          bgcolor: "#00000f",
          p: 2
        }}>
          <ChatComponent messages={conversations} auth={auth} />
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
