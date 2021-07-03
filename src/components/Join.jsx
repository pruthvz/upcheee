import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      <div className="p-10">
        <h1 className="text-4xl font-bold text-purple-600 text-center p-5">
          Join Chat
        </h1>
        <div>
          <label
            class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Username
          </label>
          <input
            placeholder="Name"
            className="mb-5 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label
            class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Room
          </label>
          <input
            placeholder="Room"
            className="mb-5 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button
            className="bg-purple-500 p-2 pl-10 pr-10 rounded-full text-white hover:bg-purple-800 "
            type="submit"
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
