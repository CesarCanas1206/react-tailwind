import React, { useState } from 'react';
import CurrentUserHeader from '../components/CurrentUserHeader';
import SidebarHeader from '../components/SidebarHeader';
import Search from '../components/Search';
import Users from '../components/Users';

const Sidebar = ({ users, onUserClick, selectedUser }) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const sortedUsers = [...users].sort((a, b) => {
    return a.displayName.localeCompare(b.displayName);
  });

  const filteredUsers = sortedUsers.filter((user) =>
    user.displayName.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const handleUserClick = (user) => {
    onUserClick(user);
    setSearchKeyword('');
  };

  return (
    <div className='border-e flex flex-col rounded-lg'>
      <SidebarHeader />
      <Search
        searchKeyword={searchKeyword}
        onSearchChange={(value) => setSearchKeyword(value)}
      />
      <Users
        users={filteredUsers}
        onUserClick={handleUserClick}
        selectedUser={selectedUser}
      />
    </div>
  );
};

export default Sidebar;
