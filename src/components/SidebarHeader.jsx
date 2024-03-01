import React, { useContext, useState } from 'react';
import messageSrc from '../assets/img/message.png';

const SidebarHeader = () => {
  return (
    <div className='h-16 grid grid-cols-2 divide-x-2'>
      <div className='flex flex-row p-4 items-center justify-center gap-1'>
        <img
          src={messageSrc}
          alt="message"
          className='w-8 h-8'
        />
        <p className=' text-base text-blue-500 font-semibold'>My Logs</p>
        <section className=' bg-blue-500 text-white text-xs rounded-lg px-2 py-1'>32</section>
      </div>
      <div className='flex flex-row p-6 items-center justify-center gap-2'>
        <p className=' text-base text-blue-500 font-semibold'>Archived</p>
        <section className=' bg-slate-200 text-slate-700 text-xs rounded-lg px-2 py-1'>08</section>
      </div>
    </div>
  );
};

export default SidebarHeader;
