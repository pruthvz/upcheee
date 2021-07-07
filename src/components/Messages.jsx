import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";
import "./styles/Chat.css";
const Messages = ({ messages, name }) => {
  return (
    <div id="scrollHere" className="bg-gray-700">
      <ScrollToBottom>
        {messages.map((message, i) => (
          <div key={i}>
            <Message message={message} name={name} />
          </div>
        ))}
      </ScrollToBottom>
    </div>
  );
};

export default Messages;
