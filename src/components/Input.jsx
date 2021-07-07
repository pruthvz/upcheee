import React from "react";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form ">
    <div
      class="fixed w-full flex justify-between bg-gray-800 p-2 pt-2 "
      style={{ bottom: "0px" }}
    >
      <input
        class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-8 bg-gray-200 rounded-full py-3 overflow-clip overflow-hidden"
        placeholder="Enter your message here..."
        type="text"
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />

      <div className="p-1">
        <button
          onClick={(e) => sendMessage(e)}
          class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-6 w-6 transform rotate-90"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
          </svg>
        </button>
      </div>
    </div>
  </form>
);

export default Input;
