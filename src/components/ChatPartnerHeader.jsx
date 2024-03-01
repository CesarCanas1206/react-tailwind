import avatarSrc from '../assets/img/avatar.png';
import { IoDocumentText } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

const ChatPartnerHeader = ({ user }) => {

  return (
    <div className='flex flex-row px-6 py-2 h-16 justify-between border-b-2 border-slate-200'>
      <div className='flex flex-row items-center gap-2'>
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.displayName}
            className='w-12 h-12 rounded-full'
          />
        ) : (
          <img
            src={avatarSrc}
            alt='avatar'
            className='w-12 h-12 rounded-full'
          />
        )}
        <div className='flex flex-col'>
          <h4 className=' text-base'>{user.displayName}</h4>
          <p className=' text-sm text-green-600'>{user.lasttime}</p>
        </div>
      </div>
      <div className='flex flex-row items-center gap-4'>
        <span className='p-2'>
          <IoDocumentText />
        </span>
        <span className='p-2'>
          <RiDeleteBin6Line />
        </span>
      </div>
    </div>
  );
};

export default ChatPartnerHeader;
