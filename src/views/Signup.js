import React, { useState, useContext } from 'react';
import ChatPartnerHeader from '../components/ChatPartnerHeader';
import Input from '../components/Input';
import { AuthContext } from 'src/context/AuthContext';
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";

const Signup = () => {

  const { currentUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatar: null
  });

  const [avatar, setAvatar] = useState(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file.type.startsWith('image/')) {
      setFormData({ ...formData, avatar: file });
      const img = new FormData();
      img.append('file', file);
      setAvatar(img);
    } else {
      alert('Please upload an image file');
      e.target.value = null;
    }
  };

  const handleAvatarClick = () => {
    document.getElementById('avatarInput').click();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data = await response.json();
      console.log(data);
      console.log(formData.firstname);
      setAvatar({...avatar, 'name':formData.firstname});

      // response = await fetch('http://localhost:5000/upload', avatar, {
      //   headers: { 'Content-Type': 'multipart/form-data' }
      // });
      // data = await response.json();
      console.log(avatar);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className='flex flex-row w-full h-[calc(100vh-120px)] bg-slate-200 border-y-2 border-slate-300 pt-8 px-16 pb-32 gap-8'>
      <div className='w-2/5 h-full border-2 border-slate-300 rounded-lg p-4 text-slate-500'>
        <h2 className=' text-4xl font-semibold mb-4 text-center'>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-row gap-4'>
            <div className='flex w-1/3 h-full justify-center'>
              <div className='flex flex-col items-center justify-center relative'>
                <svg viewBox="0 0 168 168" xmlns="http://www.w3.org/2000/svg" className='absolute'>
                  <path id="circlePath" d="M168 84A84 84 0 0 0 0 84A84 84 0 0 0 168 84" fill="none" />
                  <text>
                    <textPath xlinkHref="#circlePath" startOffset="59%" className=' text-xl font-medium' fill="gray">
                      Upload Your Avatar
                    </textPath>
                  </text>
                </svg>
                <input
                  id="avatarInput"
                  type="file"
                  name="avatar"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
                <div
                  className=" flex w-[168px] h-[168px] py-5 px-[22px] rounded-full cursor-pointer z-10"
                >
                  <div
                    htmlFor="avatarInput"
                    onClick={handleAvatarClick}
                    className=" flex w-32 h-32 rounded-full cursor-pointer border-2 border-slate-400">
                    {formData.avatar ? (
                      <img src={URL.createObjectURL(formData.avatar)} alt="Avatar" className="w-32 h-32 rounded-full object-cover" />
                    ) : (
                      <span className=" text-6xl text-gray-600 mx-10 my-6">+</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className='w-2/3 h-full '>
              <input
                type='text'
                name='firstname'
                placeholder='First Name'
                value={formData.firstname}
                onChange={handleInputChange}
                className='w-full p-2 my-2 border rounded outline-slate-300'
              />
              <input
                type='text'
                name='lastname'
                placeholder='Last Name'
                value={formData.lastname}
                onChange={handleInputChange}
                className='w-full p-2 my-2 border rounded outline-slate-300'
              />
              <input
                type='email'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleInputChange}
                className='w-full p-2 my-2 border rounded outline-slate-300'
              />
              <div className='relative w-full'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleInputChange}
                  className='w-full p-2 my-2 border rounded outline-slate-300'
                />
                <div className="absolute inset-y-0 end-0 flex items-center pe-3">
                  {showPassword ? <BsFillEyeFill onClick={togglePasswordVisibility} />
                    : <BsFillEyeSlashFill onClick={togglePasswordVisibility} />}
                </div>
              </div>
              <div className='relative w-full'>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name='confirmPassword'
                  placeholder='Confirm Password'
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className='w-full p-2 my-2 border rounded outline-slate-300'
                />
                <div className="absolute inset-y-0 end-0 flex items-center pe-3">
                  {showConfirmPassword ? <BsFillEyeFill onClick={toggleConfirmPasswordVisibility} />
                    : <BsFillEyeSlashFill onClick={toggleConfirmPasswordVisibility} />}
                </div>
              </div>
              <button type='submit' className='w-full py-2 mt-4 bg-blue-600 text-white rounded'>
                Signup
              </button>
            </div>
          </div>
        </form>
      </div >
      <div className='bg-white w-3/5 flex-grow rounded-lg'>
        <ChatPartnerHeader user={currentUser} />
        <div className='chats p-4 h-[calc(100vh-416px)] overflow-y-auto border-b-2 border-slate-200'></div>
        <Input user={currentUser} />
      </div>
    </div >
  );
};

export default Signup;