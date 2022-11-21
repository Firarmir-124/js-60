import React, {useEffect, useState} from 'react';
import FormChat from "./FormChat/FormChat";
import {MessageType} from "./types";
import Message from "./Message/Message";
import {Box, Container} from "@mui/material";

let URL = 'http://146.185.154.90:8000/messages';

function App() {
  const [messages, setMessages] = useState<MessageType[]>([]);


  useEffect(() => {
    setInterval(async () => {
      const newRes = await fetch(URL);
      if (newRes.ok) {
        const newJsn = await newRes.json();
        setMessages(newJsn)
      }
    }, 3000)
  }, [])



  return (
    <Container>
      <Box component='div' sx={{width: '800px'}}>

        <Box component='div' sx={{ background: 'rgb(231, 235, 240)', height: '500px', overflowY: 'scroll', pt: '10px', px: '10px'}}>
          <Message messages={messages}/>
        </Box>

        <Box sx={{background: '#FFF', boxShadow: ' 1px -15px 18px -1px rgba(0,0,0,0.16)'}} component='div'>
          <FormChat/>
        </Box>

      </Box>
    </Container>
  );
}

export default App;
