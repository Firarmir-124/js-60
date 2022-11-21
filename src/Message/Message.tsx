import React from 'react';
import MessageItem from "./MessageItem";
import {MessageType} from "../types";

interface Props {
  messages: MessageType[];
}

const Message:React.FC<Props> = ({messages}) => {
  return (
    <div>
      {messages.map(item => (
        <MessageItem key={item._id} message={item}/>
      ))}
    </div>
  );
};

export default Message;