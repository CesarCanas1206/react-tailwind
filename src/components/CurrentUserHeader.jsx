import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const CurrentUserHeader = () => {
  // const { currentUser } = useContext(AuthContext);
  const currentUser = { uid: '0', displayName: 'John Doe', email: 'john@gmail.com', photoURL: '' };
  console.log(currentUser);
  const [toggleMore, setToggleMore] = useState(false);
  return (
    <div className='relative h-16 bg-slate-100 border-b border-slate-200 flex justify-between items-center py-2 px-4'>
      <div className='flex items-center gap-3'>
        <h4 className='font-semibold text-lg'>{currentUser.displayName}</h4>
      </div>
      <div>
        <div
          className={`cursor-pointer p-2 ${
            toggleMore ? 'bg-slate-200' : ''
          } rounded-full`}
          onClick={() => setToggleMore(!toggleMore)}
        >
        </div>
        {toggleMore && (
          <div className='absolute top-14 right-4 w-44 bg-white py-2 rounded shadow border'>
            <div
              className='cursor-pointer hover:bg-slate-100 py-2 px-5 text-slate-700 flex gap-2 items-center'
            >
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentUserHeader;
