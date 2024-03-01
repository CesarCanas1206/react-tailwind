import React, { useContext } from 'react';
import ChatPartnerHeader from '../components/ChatPartnerHeader';
import Input from '../components/Input';
import { AuthContext } from 'src/context/AuthContext';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  
  return (
    <div className='flex flex-row bg-slate-200 h-[calc(100vh-120px)]'>
      <div className='flex flex-row w-full mt-8 mb-32 mx-16 gap-8 justify-stretch'>
        <div className=' w-2/5 flex-grow rounded-lg p-12'>
          <div className=' text-5xl font-bold text-slate-700 pb-8'>
            <h1>AI-Assisted</h1>
            <h1>Job Preparation</h1>
            <h1>and Live Help</h1>
          </div>
          <div className='text-2xl text-slate-700 pb-8'>
            <ul className="list-disc list-inside">
              <li className='pb-2'>Post Job Description to See Expected Questions (with Answers)</li>
              <li className='pb-2'>Get Live Help During the interview</li>
              <li className='pb-2'>An AI Bot can stay with you assist you through your interview call or meeting</li>
              <li className='pb-2'>Add AI Bot to your call so only you can see the Live Insights on the topic being discussed</li>
            </ul>
          </div>
          <button className=' bg-green-600 border-green-700 border-2 text-white text-2xl font-bold rounded-lg px-8 py-4'>Get Started</button>
        </div>
        <div className='bg-white w-3/5 flex-grow rounded-lg'>
          <ChatPartnerHeader user={currentUser} />
          <div className='chats p-4 h-[calc(100vh-416px)] overflow-y-auto border-b-2 border-slate-200'></div>
          <Input user={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default Home;