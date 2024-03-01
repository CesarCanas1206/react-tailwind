import React from 'react';

const Interview = ({ user }) => {
  return (
    <div>
      <h1>Welcome to the Interview, {user.name}!</h1>
      <p>This is the Interview page of your application.</p>
    </div>
  );
};

export default Interview;