import React, { useContext, useEffect, useState } from 'react';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import { UserData } from '../db/DataBase';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      setUsers(UserData);
    };
    getUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className='flex flex-row bg-slate-200 h-[calc(100vh-120px)]'>
      <div className='flex flex-row w-full mt-8 mb-32 mx-16 gap-8 justify-stretch'>
        <div className='bg-white w-1/6 flex-grow rounded-lg'>
          <Sidebar
            users={users}
            onUserClick={handleUserClick}
            selectedUser={selectedUser}
          />
        </div>
        <div className='bg-white w-4/6 flex-grow rounded-lg'>
          <MainContent selectedUser={selectedUser} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
