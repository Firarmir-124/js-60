import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";

const FormChat = () => {

  const [value, setValue] = useState({
    author: '',
    message: '',
  });

  const onChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setValue(prev => ({...prev, [name]: value}))
  }

  const postMessage =  () => {

    const url = 'http://146.185.154.90:8000/messages';
    const data = new URLSearchParams();

    data.set('author', value.author)
    data.set('message', value.message)

    fetch(url, {
      method: 'post',
      body: data,
    });
  }

  const onFormSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    postMessage();
    setValue({author: '', message: ''})
  }


  return (
    <Box component='form' onSubmit={onFormSubmit} sx={{width: '800px'}}>

      <Box component='div' sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '10px', px: '10px'}}>
        <TextField variant='standard' value={value.author} onChange={onChange} type="text" name='author' label='Ваше имя'/>
        <Button type='submit' sx={{backgroundColor: '#e91e63', ml: '50px'}} variant="contained">Send</Button>
      </Box>

      <Box component='div' sx={{px: '10px', pb: '10px'}}>
        <TextField variant='outlined' sx={{ width: '100%'}} value={value.message} onChange={onChange} name='message' label='Сообщение' rows={5} multiline></TextField>
      </Box>

    </Box>
  );
};

export default FormChat;