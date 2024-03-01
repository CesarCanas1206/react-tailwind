import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import avatarSrc from '../assets/img/avatar.png';

const Users = ({ users, onUserClick, selectedUser }) => {
  // const { currentUser } = useContext(AuthContext);
  const currentUser = { uid: '0', displayName: 'John Doe', email: 'john@gmail.com', photoURL: '' };
  const sortedUsers = [...users].sort((a, b) => {
    return a.displayName.localeCompare(b.displayName);
  });

  return (
    <div className=' overflow-y-auto h-[calc(100vh-420px)] max-h-[calc(100vh-420px)]'>
      {sortedUsers.map((user) => {
        if (user.uid !== currentUser.uid) {
          return (
            <div
              className={`${user.uid === selectedUser?.uid ? 'bg-slate-200' : ''
                } flex items-center gap-2 p-3 cursor-pointer border-t-2 border-gray-100 border-x-2 border-b-slate-200 border-b-2`}
              key={user.uid}
              onClick={() => onUserClick(user)}
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className='w-10 h-10 rounded-full'
                />
              ) : (
                <img
                  src={avatarSrc}
                  alt='avatar'
                  className='w-10 h-10 rounded-full'
                />
              )}
              <div className='flex flex-col'>
                <h4 className=' text-base'>{user.displayName}</h4>
                <p className=' text-sm text-gray-700'>{user.lasttime}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Users;
