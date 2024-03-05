import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from 'src/context/AuthContext';
import { MessageData } from '../db/DataBase';
import avatarSrc from '../assets/img/avatar.png';

const Chats = ({ selectedUser }) => {
  const { currentUser } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const chatRef = useRef(null);

  useEffect(() => {
    setMessages(filteredMessages => MessageData.filter(message => message.senderId === selectedUser.uid || message.receiverId === selectedUser.uid));
  }, [selectedUser, currentUser.uid]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    chatRef.current?.scrollIntoView({ behavoir: 'smooth' });
  };

  return (
    <div className='chats p-4 h-[calc(100vh-416px)] overflow-y-auto border-b-2 border-slate-200'>
      {messages.map((message) => {
        return (
          <div
            className={`relative flex ${message.senderId === currentUser.uid
                ? 'justify-end'
                : 'justify-start'
              }`}
            key={message.timestamp}
          >
            <div className='flex flex-row items-center gap-2'>
              {message.photoURL ? (
                <img
                  src={message.photoURL}
                  alt={message.displayName}
                  className='w-12 h-12 rounded-full mr-2'
                />
              ) : (
                <img
                  src={avatarSrc}
                  alt='avatar'
                  className='w-12 h-12 rounded-full mr-2'
                />
              )}
            </div>
            {message.imageUrl ? (
              <div
                className={`shadow mb-1 p-1 rounded-lg max-w-[80%] lg:max-w-[60%] ${message.senderId === currentUser.uid
                    ? 'bg-indigo-400 text-white rounded-tr-none'
                    : 'bg-slate-200 text-slate-600 rounded-tl-none'
                  }`}
              >
                <img
                  src={message.imageUrl}
                  alt='Chat Image'
                  className='max-w-[200px] mx-auto mb-2 rounded-md'
                />
                <div className='flex justify-between items-end px-1'>
                  <p className='py-1 px-2'>{message.message}</p>
                  {message.timestamp && (
                    <p
                      className={`text-[11px] ${message.senderId === currentUser.uid
                          ? 'text-slate-200'
                          : 'text-slate-400'
                        }`}
                    >
                      {message.timestamp}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div
                className={`flex items-end shadow mb-1 py-1 px-2 rounded-lg max-w-[80%] lg:max-w-[60%] ${message.senderId === currentUser.uid
                    ? 'bg-indigo-400 text-white rounded-tr-none'
                    : 'bg-slate-200 text-slate-600 rounded-tl-none'
                  }`}
              >
                <p className='py-1 px-2'>{message.message}</p>
                {message.timestamp && (
                  <p
                    className={`text-[11px] ${message.senderId === currentUser.uid
                        ? 'text-slate-200'
                        : 'text-slate-400'
                      }`}
                  >
                    {message.timestamp}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
      <div ref={chatRef}></div>
    </div>
  );
};

export default Chats;
