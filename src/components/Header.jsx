import React from 'react';
import { Link } from 'react-router-dom';
import bannerSrc from '../assets/img/banner.png';
import avatarSrc from '../assets/img/avatar.png';
import { MdOutlineSpaceDashboard } from "react-icons/md";

const Header = ({ user, setUser }) => {
  return (
    <header className="bg-gray-100 text-gray-800 h-16 p-4 px-8">
      <div className="flex justify-between items-center">
        <Link to="/" className='flex flex-row items-center gap-2'>
          <img
            src={bannerSrc}
            alt="banner"
            className='w-8 h-8'
          />
          <h1 className=' text-2xl font-semibold'>LiveCaller</h1></Link>
        <div className='flex gap-4'>
          <div className='flex flex-row items-center gap-2'>
            <span>
              <MdOutlineSpaceDashboard  className='w-6 h-6 text-slate-800'/>
            </span>
            <h1 className=''>pricing</h1>
          </div>
          {user ? (
            <div className='flex flex-row items-center gap-2'>
              <img
                src={avatarSrc}
                alt="avatar"
                className='w-8 h-8 rounded-full'
              />
              <div>Profile</div>
            </div>
          ) : (
            <div className='flex flex-row items-center gap-2'>
              <img
                src={avatarSrc}
                alt="avatar"
                className='w-8 h-8 rounded-full'
              />
              <Link to="/login">Login/Register</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;