import React, { useState, useEffect, useRef } from "react";
import queryString from "query-string";
import io from "socket.io-client";

// comps
import InfoNav from "./InfoNav";
import Input from "./Input";
import Messages from "./Messages";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "https://upcheee.herokuapp.com/";
  // https://upcheee.herokuapp.com/

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);
    socket.emit("join", { name, room }, () => {});

    // console.log(socket);
    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  // console.log(message, messages);
  const el = useRef(null);

  useEffect(() => {
    el.current.scrollIntoView({ block: "end", behavior: "smooth" });
  });

  return (
    <div>
      <div>
        <div>
          <InfoNav room={room} />
          <div class="mt-20 mb-20">
            <Messages messages={messages} name={name} />
          </div>
        </div>

        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
        <div id={"el"} ref={el}></div>
      </div>
    </div>
  );
};

export default Chat;
