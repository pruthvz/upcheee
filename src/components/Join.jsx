import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Join.css";

// dark mode
import useDarkMode from "./useDarkMode";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [colourTheme, setTheme] = useDarkMode();

  return (
    <div>
      <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-500 mb-0 dark:bg-gray-800 transition duration-200">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a
              class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white animate-bounce"
              href="#pablo"
            >
              upcheee chat
            </a>
            <button
              class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <span class="block relative w-6 h-px rounded-sm bg-white"></span>
              <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div
            class="lg:flex flex-grow items-center"
            id="example-navbar-warning"
          >
            <ul class="flex flex-col lg:flex-row list-none ml-auto">
              <li class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i class="fab fa-twitter text-lg leading-lg text-white " />
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i class="fab fa-github text-lg leading-lg text-white opacity-75" />
                </a>
              </li>
              <li class="nav-item ml-1 md:ml-5 ">
                <span
                  onClick={() => setTheme(colourTheme)}
                  class="p-2 h-10  w-10 flex items-center text-xs uppercase font-bold leading-snug text-white rounded-full bg-indigo-700 cursor-pointer dark:bg-gray-600 transition duration-300 "
                >
                  {colourTheme === "light" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-yellow-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-gray-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 dark:bg-gray-700 transition duration-200">
        <div class="relative py-3 w-11/12 max-w-xl sm:mx-auto">
          <div class="relative p-8 dark:bg-gray-800 bg-gray-200 md:ml-0 ml-7 shadow-sm sm:rounded-xl transition duration-200">
            <form class="w-full">
              <div class="mb-5 relative">
                <input
                  type="email"
                  id="email"
                  class="peer pt-8 border transition duration-300 dark:bg-gray-900 dark:text-gray-300 border-gray-500 focus:outline-none rounded-md focus:border-gray-300 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                  placeholder="JohnDoe"
                  autocomplete="off"
                  onChange={(event) => setName(event.target.value)}
                />
                <label
                  for="username"
                  class="dark:text-gray-100  peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >
                  Enter Username
                </label>
              </div>
              <div class="mb-5 relative">
                <input
                  type="text"
                  id="roomId"
                  class="peer pt-8 border transition duration-300  dark:bg-gray-900 dark:text-gray-300  border-gray-500 focus:outline-none rounded-md focus:border-gray-300 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                  placeholder="Enter Roon Name"
                  autocomplete="off"
                  onChange={(event) => setRoom(event.target.value)}
                />
                <label
                  for="roomId"
                  class="dark:text-gray-100 peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >
                  Create Room Name
                </label>
              </div>
              <Link
                onClick={(e) => (!name || !room ? e.preventDefault() : null)}
                to={`/chat?name=${name}&room=${room}`}
              >
                <button class="w-full bg-indigo-600 hover:bg-indigo-700 shadow-sm text-white p-3 rounded-md  transition duration-200">
                  Create Room
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
