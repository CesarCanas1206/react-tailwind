import React, { useContext, useState } from 'react';

const Search = ({ searchKeyword, onSearchChange }) => {
  return (
    <div className='border-slate-200 h-16 flex text-base bg-slate-200'>
      <div className='relative w-full'>
        <input
          type='text'
          className='bg-inherit w-full h-16 p-4 outline-none'
          placeholder='What are you searching for?'
          onChange={(e) => onSearchChange(e.target.value)}
          value={searchKeyword}
        />
        <div className="absolute inset-y-0 end-0 flex items-center pe-3">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Search;
