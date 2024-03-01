import React from 'react';
import ChatPartnerHeader from '../components/ChatPartnerHeader';
import Chats from '../components/Chats';
import Input from '../components/Input';
import Logo from '../components/Logo';

const MainContent = ({ selectedUser }) => {
  return (
    <>
      {selectedUser ? (
        <div className='flex flex-col'>
          <ChatPartnerHeader user={selectedUser} />
          <Chats selectedUser={selectedUser} />
          <Input selectedUser={selectedUser} />
        </div>
      ) : (
        <div className='bg-white flex h-full justify-center items-center text-center flex-col rounded-lg'>
          <Logo />
          <p className='mt-8'>Click on the user to start chatting...</p>
        </div>
      )}
    </>
  );
};

export default MainContent;
