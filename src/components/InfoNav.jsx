import React from "react";

const InfoNav = ({ room }) => (
  <div>
    <div
      style={{ top: "0px" }}
      class="fixed z-50 w-full bg-gray-800 h-16 pt-2 text-white flex justify-between shadow-md"
    >
      <a href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-12 h-12 my-1 text-gray-100 ml-2 transform hover:scale-110 transition duration-200"
        >
          <path
            class="text-purple-100 fill-current "
            d="M9.41 11H17a1 1 0 0 1 0 2H9.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L9.4 11z"
          />
        </svg>
      </a>
      <div class="my-3 text-gray-200 font-bold text-lg tracking-wide">
        Welcome to {room}.
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="icon-dots-vertical w-8 h-8 mt-2 mr-2"
      ></svg>
    </div>
  </div>
);

export default InfoNav;
