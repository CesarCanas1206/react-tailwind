import React, { useState } from 'react';
// import { IconContext } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
const Input = ({ selectedUser }) => {
  const [message, setMessage] = useState('');

  const sendMessage = async (e) => {
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const handleSendClick = () => {
    sendMessage();
  };

  return (
    <div className='flex flex-row bg-white h-16 border-slate-200 items-center px-6 gap-4'>
      <input
        type='text'
        className='w-full rounded-lg h-11 bg-white shadow px-4 outline-none'
        placeholder='Ask AI Bot anything or Turn on Microphone or Add Bot to call'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={() => handleSendClick()}
      />
      <span className='p-2'>
        <IoSend />
      </span>
      <span className='p-2'>
        <FaMicrophone />
      </span>
      <span className='p-2'>
        <FaPhone />
      </span>
    </div>
  );
};

export default Input;
