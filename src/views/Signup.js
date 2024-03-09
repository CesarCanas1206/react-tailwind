import React, { useState, useContext } from 'react';
import { Typewriter } from "react-simple-typewriter";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { AuthContext } from 'src/context/AuthContext';
import ChatPartnerHeader from '../components/ChatPartnerHeader';
import Input from '../components/Input';



const Signup = () => {

  const { currentUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className='flex flex-row w-full h-[calc(100vh-120px)] bg-slate-200 border-y-2 border-slate-300 pt-8 px-16 pb-32 gap-8'>
      <div className='bg-white w-3/5 flex-grow rounded-lg'>
        <ChatPartnerHeader user={currentUser} />
        <div className='chats p-4 h-[calc(100vh-416px)] overflow-y-auto border-b-2 border-slate-200'></div>
        <Input user={currentUser} />
      </div>
      <div className='w-2/5 h-full border-2 border-slate-300 rounded-lg p-4 text-slate-500'>
        <h2 className=' text-4xl font-semibold mt-4 mb-8 text-center'>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className='w-2/5 h-full grid grid-rows-7 gap-4 justify-center'>
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
              type='text'
              name='username'
              placeholder='User Name'
              value={formData.username}
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
                className='w-full p-2 my-2 border rounded outline-slate-300 pe-8'
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
                className='w-full p-2 my-2 border rounded outline-slate-300 pe-8'
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
          <div className='w-3/5 h-full'>
            <h2
              style={{ fontFamily: "Morganite Bold, sans-serif" }}
              className="message text-3xl p-4  text-grayscale-200 text-center border-b-2 border-gray-200 rounded-b-[0%] shadow-md"
            >
              <Typewriter
                words={['World', 'Ipsum', 'Bye']}
                loop={false}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={50}
              />
              &nbsp;
            </h2>
          </div>
        </form>
      </div >
    </div >
  );
};

export default Signup;