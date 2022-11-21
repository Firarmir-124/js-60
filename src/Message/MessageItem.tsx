import React from 'react';
import {MessageType} from "../types";
import {Box, Typography, Card} from "@mui/material";

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MessageIcon from '@mui/icons-material/Message';
import DateRangeIcon from '@mui/icons-material/DateRange';

interface Props {
  message: MessageType;
}

const MessageItem:React.FC<Props> = ({message}) => {
  return (
    <Card sx={{mb: '20px', p: '5px'}}>
      <Box component='div' sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography sx={{color: '#1769aa', display: 'flex', alignItems: 'center'}} variant="h4" component='h3'>
          <AccountBoxIcon fontSize='large'/>
          {message.author}
        </Typography>
        <Typography sx={{display: 'flex', alignItems: 'center'}} color="text.secondary" component='span'>
          {message.datetime}
          <DateRangeIcon fontSize='medium'/>
        </Typography>
      </Box>
      <Typography sx={{mt: '50px', display: 'flex', alignItems: 'center'}} component='p'>
        <MessageIcon fontSize='medium'/>
        {message.message}
      </Typography>
    </Card>
  );
};

export default MessageItem;