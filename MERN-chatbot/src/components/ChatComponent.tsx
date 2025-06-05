// src/components/ChatComponent.tsx

import { Avatar, Box, Paper, Typography } from '@mui/material';
import React from 'react';

import DeepSeekLogo from '../../public/DeepSeekLogoS.png'; // Ensure this path is correct

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface Props {
  messages: Message[];
  auth?: any;
}

const ChatComponent: React.FC<Props> = ({ messages, auth }) => {
  return (
    <>
      {messages.map((message, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
            alignItems: 'flex-start',
            mb: 2,
          }}
        >
          {/* Assistant (DeepSeek) */}
          {message.role === 'assistant' && (
            <Avatar
              src={DeepSeekLogo}
              alt="DeepSeek AI"
              sx={{ width: 32, height: 32, mr: 1, mt: 0.5 }}
            />
          )}

          

          <Paper
            elevation={3}
            sx={{
              px: 2,
              py: 1.5,
              maxWidth: '75%',
              backgroundColor: message.role === 'user' ? '#0d869b' : '#1e293b',
              color: 'white',
              borderRadius: 2,
              fontSize: '16px',
            }}
          >
            
            <Typography>{message.content}</Typography>
          </Paper>
           {/* User */}
          {message.role === 'user' && (
            <Avatar
              sx={{
                mx: "left",
                my: 1,
                bgcolor: "white",
                color: "black",
                fontWeight: 700,
                width: 32,
                height: 32,
                ml: 2,
              }}
            >
              {auth?.user?.name[0].toUpperCase()}
            </Avatar>
          )}

         
        </Box>
      ))}
    </>
  );
};

export default ChatComponent;
