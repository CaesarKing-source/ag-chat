import React from "react";
import { useSelector } from "react-redux";

const ChatMessage = ({ messages }) => {
  const { user } = useSelector((state) => state.user);
  console.log(messages);
  return (
    <>
      {!messages ? (
        <>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <img src="https://i.pinimg.com/originals/0b/f2/ba/0bf2baebc370e83b26b1e5ef6a558f07.gif" 
            alt="start-conversation" />
            <p>Start the conversation</p>
          </div>
        </>
      ) : (
        <>
          {messages?.map((message) => {
            return (
              <div
                className={`chat ${
                  user?._id == message?.senderID ? "chat-end" : "chat-start"
                }`}
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                    />
                  </div>
                </div>
                <div className="chat-bubble">{message?.message}</div>
                <div className="chat-footer opacity-50">
                  {message?.createdAt.split("T")[0]}
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default ChatMessage;
