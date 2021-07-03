import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";
const Messages = ({ messages, name }) => {
  return (
    <div>
      <ScrollToBottom className="messages">
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
