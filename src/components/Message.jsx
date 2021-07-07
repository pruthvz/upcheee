import React from "react";
import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    // <div class="chat-message mb-3">
    //   <div class="flex items-end justify-end">
    //     <div class="flex flex-col space-y-2  max-w-xs mx-2 order-1 items-end">
    //       <div>
    //         <p className="pr-2 pull-left text-gray-300">{trimmedName}</p>
    //         <span class="px-4 py-2 md:overflow-hidden rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
    //           {ReactEmoji.emojify(text)}
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="chat-message mb-2 mr-1">
      <div class="flex items-end justify-end">
        <div class="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end">
          <div>
            <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-gradient-to-t from-purple-500 to-purple-600 text-white ">
              <p className="font-bold text-lg text-white">{trimmedName}</p>
              {ReactEmoji.emojify(text)}
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div class="chat-message mb-2">
      <div class="flex items-end">
        <div class="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
          <div>
            <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
              <p className="font-bold text-lg text-gray-600">{user}</p>
              {ReactEmoji.emojify(text)}
            </span>
          </div>
        </div>
      </div>
    </div>
    // <div class="chat-message mb-2">
    //   <div class="flex items-end">
    //     <div class="pl-2 flex flex-col space-y-2  max-w-xs mx-2 order-2 items-start">
    //       <div>
    //         <p className="pb-1 text-gray-300">{user}</p>
    //         <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 transition duration-200 text-gray-600">
    //           {ReactEmoji.emojify(text)}
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div class="mb-10 overscroll-auto">
    //   <div class="bg-green-300 ">
    //     <p className="sentText pr-10">{trimmedName}</p>
    //     {ReactEmoji.emojify(text)}
    //   </div>
    // </div>
    // <div class="mb-10 overscroll-auto">
    //   <div class="bg-gray-300 ">
    //     <p className="sentText pl-10">{user}</p>
    //     {ReactEmoji.emojify(text)}
    //   </div>
    // </div>
  );
};

export default Message;
