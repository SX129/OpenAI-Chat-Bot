import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";

const chat_messages = [
  { role: "user", content: "Hello, how are you?" },
  {
    role: "assistant",
    content:
      "I'm just a computer program, so I don't have feelings, but I'm here to help you! How can I assist you today?",
  },
  { role: "user", content: "I need help with a programming problem." },
  {
    role: "assistant",
    content:
      "Sure! I'd be happy to help. What programming language are you using, and what seems to be the problem?",
  },
  {
    role: "user",
    content:
      "I'm working with Python, and I'm getting an error when trying to open a file.",
  },
  {
    role: "assistant",
    content:
      "Can you please show me the code where you're trying to open the file, as well as the exact error message you're receiving?",
  },
  {
    role: "user",
    content:
      'Here is the code:\n\nwith open("example.txt", "r") as file:\n    content = file.read()\n\nAnd the error message says "FileNotFoundError: [Errno 2] No such file or directory: \'example.txt\'".',
  },
  {
    role: "assistant",
    content:
      "It looks like the file 'example.txt' is not in the same directory as your Python script. Make sure the file is located in the same folder, or provide the correct path to the file.",
  },
  { role: "user", content: "Ah, I see. Thank you for your help!" },
  {
    role: "assistant",
    content:
      "You're welcome! If you have any more questions, feel free to ask. Happy coding!",
  },
];

const Chat = () => {
  const auth = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17, 29, 39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name[0]}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", p: 3 }}>
            You are talking to OpenAI's GPT
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
            Ask me anything!
          </Typography>
          <Button
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400,
              },
            }}
          >
            Clear Chat
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
            fontWeight: "600",
          }}
        >
          Model - GPT 3.5 Turbo
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {chat_messages.map((chat) => (
            <div>{chat.content}</div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
